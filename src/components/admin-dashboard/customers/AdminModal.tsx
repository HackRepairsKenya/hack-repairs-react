
import { useFormik } from "formik";
import axios from 'axios'
interface AdminModalPropTypes{
    handleClose: () => void;
}
const AdminModal = ({ handleClose }:AdminModalPropTypes)=>{
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: async (values)=>{
            const response = await axios.post('https://api.hackrepairs.co.ke/admins', values);
            if (response.status === 201) {
                handleClose()
            }
        }
    })

    return (
        <div className="fixed w-full left-0 top-0 h-full bg-black bg-opacity-50 flex justify-center">
            <div className="bg-white rounded-lg h-[60%] w-[50%] mt-[5rem] p-5">
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="font-semibold text-lg">Create Super User</h1>
                    <div className="grid grid-cols-1 gap-3 mt-3">
                        <div>
                            <label className="text-sm font-semibold">Username</label>
                            <input
                                id="name"
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
                                Create Admin
                        </button>
                    </div>
                </form>
            </div>
     </div>
    )
}


export default AdminModal;