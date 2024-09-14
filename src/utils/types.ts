export interface Product {
    id: number;
    productName: string;
    productQuantity: number;
    productColor: string;
    productModel:string;
    description:string
  }
  
  export interface Subcategory {
    id: number;
    name: string;
    products: Product[];
  }
  
  export interface Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
  }
  
  export interface CategoriesContextType {
    categories: Category[];
  }
  