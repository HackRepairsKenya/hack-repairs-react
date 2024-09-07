import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import { Input } from "@/components/ui/input";
import ScreenRepaircard from "@/components/shared/ScreenRepaircard";
import Breadcrumbs from "@/components/BreadCrumbs";

interface Screen {
  oldPrice: number;
  newPrice: number;
  img: string;
  type: string;
}

interface Repair {
  id: number;
  title: string;
  screen: Screen[];
}

const CategoriesDetailedView: React.FC = () => {
  const availableRepairs: Repair[] = [
    {
      id: 0,
      title: "Tecno",
      screen: [
        {
          type: "Tecno Camon 15",
          img: "/screens/tecno/tecnoscreen.png",
          oldPrice: 2000,
          newPrice: 1800,
        },
        // Add more screen data here...
      ],
    },
    {
      id: 1,
      title: "Samsung",
      screen: [
        {
          type: "Samsung Galaxy S10",
          img: "/screens/samsung/samsungscreen.png",
          oldPrice: 3000,
          newPrice: 2800,
        },
        
      ],
    },
    
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false); 

  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleBooking = (type: string) => {
    navigate(`/brand/${type.toLowerCase()}`);
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.value;
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((b) => b !== brand)
        : [...prevSelected, brand]
    );
  };

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setPriceRange((prevRange) => [prevRange[0], value]);
  };

  const filteredRepairs = availableRepairs
    .filter((repair) => {
      const matchesSearchTerm = repair.title.toLowerCase().includes(searchTerm);
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(repair.title);
      return matchesSearchTerm && matchesBrand;
    })
    .map((repair) => ({
      ...repair,
      screen: repair.screen.filter(
        (screen) => screen.newPrice >= priceRange[0] && screen.newPrice <= priceRange[1]
      ),
    }))
    .filter((repair) => repair.screen.length > 0);

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="flex flex-col md:flex-row w-full">
        {/* Filter Section */}
        <section
          id="filter-section"
          className={`p-4 w-full md:w-1/5 bg-gray-100 ${
            isFilterOpen ? "block" : "hidden"
          } md:block transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col gap-4 mb-4">
            {/* Brand Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Filter by Brand</h3>
              <div className="space-y-2">
                {["Tecno", "Samsung", "Itel", "Xiaomi"].map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      value={brand}
                      checked={selectedBrands.includes(brand)}
                      onChange={handleBrandChange}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Filter by Price</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <span className="text-gray-700 mr-2">
                    Max Price: Ksh {priceRange[1]}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={handlePriceRangeChange}
                    className="w-full"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="w-full ">
          {/* Search Section */}
          <section className="flex gap-4 items-center w-full p-4">
            {/* filter */}
            {/* Filter Toggle Button for Small Screens */}
            <div className="md:hidden">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="px-4 py-1 border  rounded-md focus:outline-none focus:ring-2 focus:ring-button"
                aria-expanded={isFilterOpen}
                aria-controls="filter-section"
              >
                {isFilterOpen ? "Hide Filters" : "Show Filters"}
              </button>
            </div>
            <div>
              <Input
                placeholder="Search phone screen type"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full max-w-xs border-gray-300 rounded-lg"
              />
            </div>
          </section>
          {/* Available Repairs Section */}
          <section className="p-4">
            {filteredRepairs.length === 0 ? (
              <p>No repairs found matching your criteria.</p>
            ) : (
              filteredRepairs.map((item) => (
                <div key={item.id}>
                  <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {item.screen.map((repair,index) => (
                      <ScreenRepaircard
                        key={index}
                        repair={repair}
                        handleBooking={handleBooking}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default CategoriesDetailedView;
