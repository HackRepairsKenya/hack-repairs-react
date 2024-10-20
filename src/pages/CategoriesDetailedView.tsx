import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/mainlayout/Navbar";
import Footer from "@/components/mainlayout/Footer";
import ScreenRepaircard from "@/components/shared/ScreenRepaircard";
import Breadcrumbs from "@/components/BreadCrumbs";
import axios from "axios";

interface Product {
  id: string;
  ProductName: string;
  productQuantity: number;
  productPrice: number;
  marketPrice: number;
  categoryId: string;
  productModel: string;
  supplierName: string;
  coverImage: string;
  productDescription: string;
}

interface Category {
  id: string;
  name: string;
}

const CategoriesDetailedView: React.FC = () => {
  const [searchTerm] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange] = useState<[number, number]>([0, 5000]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [availableProducts, setAvailableProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const navigate = useNavigate();


  const handleBooking = (categoryId: string, productId: string) => {
    navigate(`/category/${categoryId}/product/${productId}`);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://api.hackrepairs.co.ke/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api.hackrepairs.co.ke/products");
      setAvailableProducts(response.data);
      setFilteredProducts(response.data); // Initially show all products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // Handle category selection
  const handleCategoryChange = (categoryName: string) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(categoryName)
        ? prevSelectedBrands.filter((brand) => brand !== categoryName)
        : [...prevSelectedBrands, categoryName]
    );
  };

  // Filter products when category or search term changes
  useEffect(() => {
    let filtered = availableProducts;

    // Filter by category
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(
          categories.find((category) => category.id === product.categoryId)?.name || ""
        )
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.ProductName.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredProducts(filtered);
  }, [availableProducts, selectedBrands, searchTerm, categories]);

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
                      onChange={() => handleCategoryChange(category.name)}
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
                className="px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-button"
                aria-expanded={isFilterOpen}
                aria-controls="filter-section"
              >
                {isFilterOpen ? "Hide Filters" : "Show Filters"}
              </button>
            </div>
            <div>
              
            </div>
          </section>

          {/* Available Products Section */}
          <section className="p-4">
            {filteredProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <ScreenRepaircard
                    key={product.id}
                    repair={product}
                    handleBooking={() => handleBooking(product.categoryId, product.id)} category={""} product={""}                  />
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
