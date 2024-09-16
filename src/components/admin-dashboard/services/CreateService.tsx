import { useEffect, useState } from "react";
import { useFormik,  } from "formik";
import axios from "axios";

// Define the types for categories and subcategories
interface Category {
  id: string;
  name: string;
}


// Define the type for form values
interface FormValues {
  productPrice: number;
  productName: string;
  productDescription: string;
  categoryId: string;
  yearOfManufacture: number;
  productModel: string;
  marketPrice: number;
  supplierName: string;
  productQuantity: number;
  productColor: string;
  subcategoryId: string;
  coverImage: string;
}

// Define the type for props
interface CreateProductsProps {
  handleCallClose: () => void;
}

const CreateProducts: React.FC<CreateProductsProps> = ({ handleCallClose }) => {
  const [category, setCategory] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      productPrice: 0,
      productName: "",
      productDescription: "",
      categoryId: "",
      yearOfManufacture: 0,
      productModel: "",
      marketPrice: 0,
      supplierName: "",
      productQuantity: 0,
      productColor: "",
      subcategoryId: "",
      coverImage: "",
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "https://api.wemitraders.co.ke/products",
          values
        );
        setIsLoading(false);
        if (response.status === 201) {
          alert("Product created successfully!");
          handleCallClose();
        }
      } catch (error) {
        console.error("Error creating product:", error);
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    fetchCategories();
  
  }, []);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>(
        "https://api.wemitraders.co.ke/categories"
      );
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="w-[100%] border h-[100vh] bg-black bg-opacity-50 flex justify-center fixed top-[0vh] left-0">
      <div
        id="product-info"
        className="bg-white relative p-5 rounded-lg h-[90%] mt-[2.5rem]"
      >
        <h1 className="font-semibold">Create Products</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Form fields */}
          <div className="grid grid-cols-3 gap-3 mt-3">
            {/* Product Name */}
            <div>
              <label className="text-sm font-semibold">Product Name</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.productName}
                id="productName"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                placeholder="Product Name"
              />
            </div>
            {/* Product Category */}
            <div>
              <label className="text-sm font-semibold">Product Category</label>
              <select
                name="categoryId"
                id="categoryId"
                required
                onChange={formik.handleChange}
                value={formik.values.categoryId}
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
              >
                <option value="">Select Category</option>
                {category.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Product Subcategory */}
            <div>
              <label className="text-sm font-semibold">Product Subcategory</label>
              <select
                name="subcategoryId"
                id="subcategoryId"
                onChange={formik.handleChange}
                value={formik.values.subcategoryId}
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
              >
               
              </select>
            </div>
          </div>
          {/* More form fields */}
          <div className="grid grid-cols-4 gap-3 mt-3">
            {/* Product Model */}
            <div>
              <label className="text-sm font-semibold">Product Model</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.productModel}
                id="productModel"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                placeholder="Product Model"
              />
            </div>
            {/* Market Price */}
            <div>
              <label className="text-sm font-semibold">Market Price</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.marketPrice}
                id="marketPrice"
                type="number"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                placeholder="Market Price"
              />
            </div>
            {/* Supplier Name */}
            <div>
              <label className="text-sm font-semibold">Supplier Name</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.supplierName}
                id="supplierName"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                placeholder="Supplier Name"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-5">
            {/* Available Quantity */}
            <div>
              <label className="text-sm font-semibold">Available Quantity</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.productQuantity}
                id="productQuantity"
                type="number"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                placeholder="Available Quantity"
              />
            </div>
            {/* Product's Price */}
            <div>
              <label className="text-sm font-semibold">Product's Price</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.productPrice}
                id="productPrice"
                type="number"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                placeholder="Product's Price"
              />
            </div>
            {/* Product Cover Image */}
            <div className="flex flex-col justify-center">
              <label className="text-sm font-semibold">Product Cover Image</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.coverImage}
                id="coverImage"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                placeholder="Cover Image"
                type="text"
              />
            </div>
          </div>
          {/* Product Description */}
          <div className="grid grid-cols-1 mt-5 gap-3">
            <div>
              <label className="text-sm font-semibold">Product Description</label>
              <textarea
                name="productDescription"
                id="productDescription"
                required
                onChange={formik.handleChange}
                value={formik.values.productDescription}
                rows={4}
                className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Product Description ..."
              ></textarea>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-5 flex">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 mr-2 text-sm text-white font-bold py-2 px-4 rounded"
              onClick={handleCallClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-button hover:bg-blue-600 text-sm text-white font-bold py-2 px-4 rounded"
            >
              {isLoading ? "Please wait ..." : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
