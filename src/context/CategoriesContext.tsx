import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

// Provide a default value for context to prevent undefined errors
export const categoriesContext = createContext({
  categories: [],
});

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Electronics',
      subcategories: [
        {
          id: 101,
          name: 'Mobile Phones',
          products: [{ id: 1001, productName: 'iPhone 12', productQuantity: 50, productColor: 'Black' }]
        },
        {
          id: 102,
          name: 'Laptops',
          products: [{ id: 1002, productName: 'MacBook Pro', productQuantity: 30, productColor: 'Silver' }]
        }
      ]
    }
  ]);

  const getCategories = async () => {
    try {
      const response = await axios.get('https://api.wemitraders.co.ke/categories');
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Run only once when the component mounts
  useEffect(() => {
    getCategories();
  }, []); // Empty dependency array means this will run only once

  return (
    <categoriesContext.Provider value={{ categories }}>
      {children}
    </categoriesContext.Provider>
  );
}
