import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import { Input } from "@/components/ui/input";
import ScreenRepaircard from "@/components/shared/ScreenRepaircard";
import Breadcrumbs from "@/components/BreadCrumbs";
import axios from "axios";

interface Product {
  img: string;
  ProductName: string;
  id: string;
  MarketPrice: number;
  sellingPrice: number;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

const CategoriesDetailedView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleBooking = (categoryId: string, productId: string) => {
    navigate(`/category/${categoryId}/product/${productId}`);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://api.hackrepairs.co.ke/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api.hackrepairs.co.ke/products");
      setAvailableProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

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
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Filter by Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      value={category.name}
                      checked={selectedBrands.includes(category.name)}
                      onChange={() => {}}
                      className="form-checkbox h-4 w-4 text-green-800"
                    />
                    <span className="ml-2 text-gray-700">{category.name}</span>
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
                    onChange={() => {}}
                    className="w-full"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="w-full">
          {/* Search Section */}
          <section className="flex gap-4 items-center w-full p-4">
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
                className="w-full  md:w-[400px] border-gray-300 rounded-lg"
              />
            </div>
          </section>

          {/* Available Products Section */}
          <section className="p-4">
            {availableProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {availableProducts.map((product) => (
                  <ScreenRepaircard
                    key={product.id}
                    repair={product}
                    handleBooking={() => handleBooking(product.id, product.id)}
                  />
                ))}
              </div>
            )}
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CategoriesDetailedView;
