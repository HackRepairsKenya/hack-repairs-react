
import { useFormik } from "formik";
import axios from "axios";
import { Product } from "@/utils/types";

interface PropTypes{
    products:Product[]
}
const CreateImages = ( {products}:PropTypes )=>{
    const formik = useFormik({
        initialValues: {
            name: "",
            productId: ""
        },
        onSubmit: async (values)=>{
            const imageReq  = await axios.post("https://api.wemitraders.co.ke/images", values)

            if (imageReq.status === 201){
                alert("Image added successfully")
                formik.resetForm()
            }
        }
    })

    return (
        <div className="">
            <h4 className="text-xl font-semibold">Add Product Images</h4>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="w-[40%]">
                        <label className="font-semibold text-sm">Product Name</label>
                        <select
                            className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.productId}
                            name="productId"
                            id="productId"
                        >
                                <option></option>
                                {products.map((item, index)=>{
                                    return (
                                        <option key={index} value={item.id}>{item.productName}</option>
                                    )
                                }
                                )}
                        </select>
                    </div>
                    <div className="w-[40%] mt-3">
                        <label className="font-semibold text-sm">Product Image</label>
                        <input
                            className="bg-white border border-gray-500 text-black placeholder-black dark:placeholder-green-500 text-sm rounded focus:ring-black focus:border-gray block w-full p-2 outline-none"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name="name"
                            id="name"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold py-2 px-4 text-center"
                        >
                            Add Image
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateImages;