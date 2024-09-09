import React from "react";
import { useFormik } from "formik";
import axios from 'axios'

const UserModal = ( { handleClose } )=>{

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: async(values)=>{
                const response = await axios.post('https://api.wemitraders.co.ke/clients', values);
                if (response.status === 201) {
                  // alert('Registration successful!');
                  handleClose()
                }
            }
    })

    return (
        <div className="fixed w-full left-0 top-0 h-full bg-black bg-opacity-50 flex justify-center">
            <div className="bg-white rounded-lg h-[60%] w-[50%] mt-[5rem] p-5">
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="font-semibold text-lg">Create Customer</h1>
                    <div className="grid grid-cols-1 gap-3 mt-3">
                        <div>
                            <label className="text-sm font-semibold">Username</label>
                            <input
                                id="customer_name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className="bg-white border border-black-500 text-black placeholder-black dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 outline-none"
                                placeholder="Username"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 mt-3">
                        <div>
                            <label className="text-sm font-semibold">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className="bg-white border border-black-500 text-black placeholder-black dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 outline-none"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 mt-3">
                        <div>
                            <label className="text-sm font-semibold">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="bg-white border border-black-500 text-black placeholder-black dark:placeholder-white-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 outline-none"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="mt-5 flex">
                        <button
                        className="bg-red-500 hover:bg-red-600 mr-2 text-sm text-white font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                        >
                        Close
                        </button>
                        <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold py-2 px-4 rounded"
                        >
                                Create Customer
                        </button>
                    </div>
                </form>
            </div>
     </div>
    )
}


export default UserModal;