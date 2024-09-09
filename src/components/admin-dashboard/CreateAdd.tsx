import { React, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const CreateAdd = ({ handleCallClose }) => {
  const [isLoading,setIsLoading] = useState(false)
    
  const formik = useFormik({
    initialValues: {
      "img": "",
      "price": 0,
      "text": "",
      "title": ""
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true)
        const response = await axios.post('https://api.wemitraders.co.ke/ads', values)
        setIsLoading(false)
        if (response.status === 201) {
          alert("Poster created successfully!");
          handleCallClose()
        } else {
          console.error("Failed to create ad:", response);
        }
      } catch (error) {
        console.error("Error creating ad:", error);
        setIsLoading(false)
      }
    },
  });

  return (
    <div className="w-[100%] border min-h-[100vh] bg-black bg-opacity-50 border shadow-2xl p-5 fixed top-[0vh] left-0 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[60%] p-5 h-[60%]">
        <h1 className="font-semibold">Create Advertisement </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid mt-5">
            <div>
              <label className="text-sm font-semibold">Description</label>
              <input
                id="text"
                name="text"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.text}
                className="border placeholder-black text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 outline-none"
                placeholder="Add Description"
              />
            </div>
          </div>
          <div className="grid mt-5">
            <div>
              <label className="text-sm font-semibold">Percentage Discount Off</label>
              <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
                className="border placeholder-black text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 outline-none"
                placeholder="Percentage Off"
              />
            </div>
          </div>
          <div className="grid mt-5 grid-cols-1">
            <div>
              <label className="text-sm font-semibold">
                Advertisement Image
              </label>
              <input
                id="img"
                name="img"
                type="text"
                value={formik.values.img}
                onChange={formik.handleChange}
                className="border placeholder-black text-sm rounded-lg focus:ring-green-500 block w-full p-2.5 dark:bg-gray-700 outline-none"
                placeholder="Advertisement Image"
              />
            </div>
          </div>
          <div className="flex justify-betweeen w-full mt-5">
            <div></div>
            <div className="flex ml-[35rem]">
              <button
                className="bg-red-600 text-white text-xs font-bold py-2 px-4 rounded"
                onClick={handleCallClose}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 ml-5 text-white text-xs font-bold py-2 px-4 rounded"
                type="submit"
              >
                Create Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdd;