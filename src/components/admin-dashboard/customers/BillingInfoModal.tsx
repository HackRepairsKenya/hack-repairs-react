import React from "react";
import { useFormik } from "formik";

const BillingModal = ({ handleModalClose }) => {
    const formik = useFormik({
        initialValues: {
            companyName: "",
            country: "",
            phone: "",
            postcode: "",
            state: "",
            street: "",
	        clientId: ""
        }
    })
    return (
        <div>
            <form onSubmit={ formik.handleSubmit } className="flex flex-col gap-4">
                <div className="flex flex-col">
                <label className="">Company name (optional)</label>
                <input
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    id="companyName"
                    name="companyName"
                    autoComplete="off"
                    className="border p-2 my-3 outline-none"
                />
                </div>
                <div className="flex flex-col">
                <label className="">Country / Region</label>
                <input
                    value={formik.values.country}
                    id="country"
                    name="country"
                    onChange={formik.handleChange}
                    className="border p-2   my-3 outline-none"
                    autoComplete="off"
                />
                </div>
                <div className="flex flex-col">
                <label className="">Street Address</label>
                <input
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    id="street"
                    name="street"
                    autoComplete="off"
                    className="border p-2   my-3 outline-none"
                />
                </div>
                <div className="flex flex-col">
                <label className="">State / County</label>
                <input
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    autoComplete="off"
                    name="state"
                    id="state"
                    className="border p-2  my-3 outline-none"
                />
                </div>
                <div className="flex flex-col">
                <label className="">Postcode / Zip</label>
                <input
                    value={formik.values.postcode}
                    onChange={formik.handleChange}
                    name="postcode"
                    id="postcode"
                    className="border p-2  my-3 outline-none"
                    autoComplete="off"
                />
                </div>
                <div className="flex flex-col">
                <label className="">Phone</label>
                <input
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    className="border p-2  my-3 outline-none"
                />
                </div>
                <div className="mt-[1rem] font-bold  flex justify-center">
                {" "}
                <button
                    type="submit"
                    className="bg-yellow-500 w-full pl-[25%] text-gray-900  pr-[25%] p-2 outline-none"
                >
                    Place Order
                </button>
            </div>
          </form>
        </div>
    )
}

export default BillingModal;