import React, { useState } from "react";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";
import UpdateServiceModal from "./UpdateServiceModal"; 
import { Product } from "@/utils/types";

interface PTableProps {
  products: Product[];
  fetchProducts: () => void;
  outOffStock: boolean;
}

const PTable: React.FC<PTableProps> = ({ products, fetchProducts, outOffStock }) => {
  const [updateProducts, setUpdateProducts] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [toBeDeleted, setToBeDeleted] = useState<string | null>(null);

  const activateProducts = (selectedProduct: Product) => {
    setUpdateProducts(true);
    setProduct(selectedProduct);
  };

  const closeUpdateProducts = () => {
    setUpdateProducts(false);
    setProduct(null);
  };

  const handleDelete = (productId: string) => {
    setIsDeleting(true);
    setToBeDeleted(productId);
  };

  const filterZeroQuantityItems = (arr: Product[]) => {
    return arr.filter((item) => item.productQuantity === 0);
  };

  const zeroQuantityItems = filterZeroQuantityItems(products);

  const deleteProduct = async () => {
    if (toBeDeleted === null) return;

    try {
      const delReq = await axios.delete("https://api.wemitraders.co.ke/products", {
        data: { id: toBeDeleted },
      });

      if (delReq.status === 200) {
        alert("Product Deletion Success");
        setIsDeleting(false);
        setToBeDeleted(null);
        fetchProducts();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      {isDeleting && (
        <div className="flex fixed top-0 left-0 justify-center items-center w-full h-full bg-gray-600 bg-opacity-50">
          <div className="bg-white rounded shadow-lg p-[2rem] h-[35%] w-[30%] border">
            <p className="font-semibold">Are you sure you want to delete this product?</p>
            <div className="mt-5">
              <button
                onClick={deleteProduct}
                className="bg-blue-500 mr-5 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none"
              >
                Ok
              </button>
              <button
                onClick={() => setIsDeleting(false)}
                className="bg-red-500 mr-5 hover:bg-red-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Index</th>
            <th scope="col" className="px-6 py-3">Product Name</th>
            <th scope="col" className="px-6 py-3">Available Quantity</th>
            <th scope="col" className="px-6 py-3">Color</th>
            <th scope="col" className="px-6 py-3">Selling Price</th>
            <th scope="col" className="px-6 py-3">Market Price</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {(outOffStock ? zeroQuantityItems : products).map((item, index) => (
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 text-black">{index + 1}</td>
              <td className="px-6 py-4 text-black">{item.ProductName}</td>
              <td className="px-6 py-4 text-black">{item.productQuantity}</td>
             
              <td className="px-6 py-4 text-black">Ksh. {item.productPrice}</td>
              <td className="px-6 py-4 text-black">Ksh. {item.marketPrice}</td>
              <td className="px-6 py-4">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  onClick={() => activateProducts(item)}
                >
                  <HiPencil />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  <IoTrashOutline />
                </button>
                <button className="font-medium text-sky-600 dark:text-sky-500 hover:underline ml-2">
                  <LuEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {updateProducts && product && (
        <UpdateServiceModal handleCallClose={closeUpdateProducts} product={product} />
      )}
    </>
  );
};

export default PTable;
