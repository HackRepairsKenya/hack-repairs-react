
export interface Product {
  productName: string;
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

  
  export interface Category {
    products: any;
    image: string ;
    id: string;
    name: string;
    
  }
  
  export interface CategoriesContextType {
    categories: Category[];
  }
  
  export interface Order {
    id: number;
    clientID: string;
    dateCreated: string;
    totalAmount: number;
    shippingAddress: string;
    paymentStatus: string;
    deliveryStatus: string;
    status:string
  }


  export interface ImageUploaderHook {
    image: File | null;
    imagePreview: string | null;
    isLoading: boolean;
    uploadImageToCloudinary: (file: File, cloudName: string, uploadPreset: string) => Promise<string | null>;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export interface CartItem {
    ProductName: string ;
  
    coverImage: string ;
    id: number;
    name: string;
    productPrice: number;
    productQuantity: number;
  }