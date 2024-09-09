import { React, useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const CreateSubsubcategory = ({ handleSubcatclose }) => {
  const [category, setCategory] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      categoryID:''
    },
    onSubmit: async (values) => {
      // Make a POST request to the endpoint with the category data
      const response = await axios.post(
        "https://api.wemitraders.co.ke/subcategories",
        values
      );

      if (response.status === 201){
        alert("Subcategory created successfully !")
        handleSubcatclose();
      }
    },
  });

  useEffect(() => {
    fetchCategories();
  }, []);
  // fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.wemitraders.co.ke/categories"
      );
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed w-full left-0 top-0 h-full bg-black bg-opacity-50 flex justify-center">
      <div className="bg-white rounded-lg h-[50%] w-[50%] mt-[5rem] p-5">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="font-semibold text-lg">
            Create Product Subcategory
          </h1>
          <div className="grcategoryID grcategoryID-cols-1 gap-3 mt-3">
            <div>
              <label className="text-sm font-semibold">category Name</label>
              <select
                name="categoryID"
                type="text"
                as="select"
                id="categoryID"
                onChange={formik.handleChange}
                value={formik.values.categoryID}
                className="bg-white border border-black text-black dark:text-green-400 placeholder-black dark:placeholder-green-500 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 outline-none"
              >
                <option>Select Category</option>
                {category.map((category, index) => {
                  return <option key={index} className="capitalize" value={category.id}>{category.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="categoryID grcategoryID-cols-1 gap-3 mt-3">
            <div>
              <label className="text-sm font-semibold">
                Subcategory Name
              </label>
              <input
                categoryID="name"
                name="name"
                type="text"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="bg-white border border-black-500 text-black placeholder-black dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 outline-none"
                placeHolder="subcategory Name"
              />
            </div>
          </div>
          <div className="mt-5 flex">
            <button
              className="bg-red-500 hover:bg-red-600 mr-2 text-sm text-white font-bold py-2 px-4 rounded"
              onClick={handleSubcatclose}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold py-2 px-4 rounded"
            >
              Create Subsubcategory
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSubsubcategory;