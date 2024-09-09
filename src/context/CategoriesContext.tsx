import  { useEffect, useState, createContext, ReactNode } from "react";
import axios from "axios";

interface CategoriesContextType {
  categories: Category[];
}
// eslint-disable-next-line react-refresh/only-export-components
export const categoriesContext = createContext<CategoriesContextType>({
  categories: [],
});

interface Product {
  id: number;
  productName: string;
  productQuantity: number;
  productColor: string;
}
interface Subcategory {
  id: number;
  name: string;
  products: Product[];
}

interface Category {
  id: number;
  name: string;
  subcategories: Subcategory[];
}

interface CategoriesProviderProps {
  children: ReactNode;
}

export default function CategoriesProvider({ children }:CategoriesProviderProps) {
  const [categories, setCategories] = useState<Category []>([
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
      const response = await axios.get<Category []>('https://api.wemitraders.co.ke/categories');
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []); 

  return (
    <categoriesContext.Provider value={{ categories }}>
      {children}
    </categoriesContext.Provider>
  );
}
