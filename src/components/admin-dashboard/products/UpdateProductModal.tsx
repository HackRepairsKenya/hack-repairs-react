import { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Category, Product } from "@/utils/types";

interface UpdateProductModalProps {
  handleCallClose: () => void;
  product: Product | null;
}

const UpdateProductModal = ({ handleCallClose, product }: UpdateProductModalProps) => {
  const [category, setCategory] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);

  // fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://api.wemitraders.co.ke/categories");
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch sub categories
  const fetchSubCategories = async () => {
    try {
      const response = await axios.get("https://api.wemitraders.co.ke/subcategories");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: product || {
      productName: '',
      categoryId: '',
      subcategoryId: '',
      yearOfManufacture: '',
      productModel: '',
      marketPrice: 0,
      supplierName: '',
      productQuantity: 0,
      productPrice: 0,
      productColor: '',
      coverImage: '',
      productDescription: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.put("https://api.wemitraders.co.ke/products", values);
        setIsLoading(true);
        if (response.status === 200) {
          handleCallClose();
          setIsLoading(false);
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.log("Error updating the product");
      }
    }
  });

  if (!product) {
    return null; // Return null if the product is null
  }

  return (
    <div className="w-[100%] border h-[100vh] bg-black bg-opacity-50 flex justify-center fixed top-[0vh] left-0">
      <div
        id="product-info"
        className="bg-white relative p-5 rounded-lg h-[90%] mt-[2.5rem]"
      >
        <h1 className="font-semibold">Update Product</h1>
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
                <option>Select Category</option>
                {category.map((cat: Category, key) => (
                  <option key={key} className="capitalize" value={cat.id}>
                    {cat.name}
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
                required
                onChange={formik.handleChange}
                value={formik.values.subcategoryId}
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
              >
                {/* Add options here */}
              </select>
            </div>
          </div>
          {/* More form fields */}
          <div className="grid grid-cols-4 gap-3 mt-3">
            {/* Manufacturing Year */}
            <div>
              <label className="text-sm font-semibold">Manufacturing Year</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.yearOfManufacture}
                id="yearOfManufacture"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                placeholder="Manufacturing Year"
              />
            </div>
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
          {/* More form fields */}
          <div className="grid grid-cols-4 gap-3 mt-5">
            {/* Available Quantity */}
            <div>
              <label className="text-sm font-semibold">Available Quantity</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.productQuantity}
                id="productQuantity"
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
            {/* Product's Colors */}
            <div>
              <label className="text-sm font-semibold">Product's Colors</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.productColor}
                id="productColor"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                placeholder="Product's Colors"
              />
            </div>
            {/* Product cover image */}
            <div className="flex flex-col justify-center">
              <label className="text-sm font-semibold">Product Cover Image</label>
              <input
                value={formik.values.coverImage}
                onChange={formik.handleChange}
                id="coverImage"
                placeholder="Cover Image"
                className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                type="text"
              />
            </div>
          </div>
          {/* Product description */}
          <div className="grid grid-cols-1 gap-3 mt-5">
            <label className="text-sm font-semibold">Product Description</label>
            <textarea
              onChange={formik.handleChange}
              value={formik.values.productDescription}
              id="productDescription"
              className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
              placeholder="Product Description"
            />
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
