import {  useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Category } from "@/utils/types";
interface UpdateCategoriesModalPropTypes{
  handleCatClose: () => void;
  category:Category
}

const UpdateCategoryModal = ({ handleCatClose, category }:UpdateCategoriesModalPropTypes) => {
  const [isLoading,setIsLoading] = useState(false)
  const formik = useFormik({
    initialValues: category,
    onSubmit: async (values) => {
      try {
        setIsLoading(true)
        const response = await axios.put(
          "https://api.wemitraders.co.ke/categories",
          values
        );

        if (response.status === 200) {
        
          alert("Category updated successfully!");
          setIsLoading(false)
          handleCatClose();
        } else {
          throw new Error("Failed to update category");
          
        }
      } catch (error) {
        console.error("Error updating category:", error);
        // Handle error creating category
        alert("Failed to update category. Please try again later.");
        setIsLoading(false)
      }
    },
  });

  

  useEffect(()=>{
    fetchCategories()
  },[])
  // fetch categories
  const fetchCategories = async()=>{
    try {
      const response = await axios.get('https://api.wemitraders.co.ke/categories')      
      console.log(response)
    } catch (error) {
      console.log(error) 
    }
  }



  return (
    <div className="fixed w-full left-0 top-0 h-full bg-black bg-opacity-50 flex justify-center">
      <div className="bg-white rounded-lg h-[40%] w-[50%] mt-[5rem] p-5">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="font-semibold text-lg">Update Category</h1>
          <div className="grid grid-cols-1 gap-3 mt-3">
            <div>
              <label className="text-sm font-semibold">Category Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="bg-white border border-black-500 text-black placeholder-black dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 outline-none"
                placeholder="Category Name"
              />
            </div>
          </div>
          <div className="mt-5 flex">
            <button
              className="bg-red-500 hover:bg-red-600 mr-2 text-sm text-white font-bold py-2 px-4 rounded"
              onClick={handleCatClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold py-2 px-4 rounded"
            >
           {isLoading ? "Updating Category ...":" Update Category"}  
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategoryModal;