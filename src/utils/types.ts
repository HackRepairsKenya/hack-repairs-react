
export interface Product {
  id: number;
  productName: string;
  productQuantity: number;
  productColor: string;
  productPrice: number;
  marketPrice: number;
  categoryId: string; 
  subcategoryId: string;
  yearOfManufacture: string;
  productModel: string;
  supplierName: string;
  coverImage: string;
  productDescription: string;
}

  
  export interface Category {
    image: string ;
    id: number;
    name: string;
    products:Product[]
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
    title: string | undefined;
    price: number;
    img: string ;
    id: number;
    name: string;
    newPrice: number;
    quantity: number;
  }