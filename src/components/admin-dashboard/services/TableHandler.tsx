import {useState} from "react"
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";
import UpdateProductModal from "./UpdateServiceModal";
import { Product } from "@/utils/types";

interface PTablePropTypes{
    products: Product,
    fetchProducts: ()=> void
    outOffStock: ()=>void,
}

const PTable = ({ products , fetchProducts, outOffStock}:PTablePropTypes) =>{
	const [updateProducts, setUpdateProducts] = useState(false);
	const [product, setProduct] = useState(null);
	const [Isdeleting, setIsDeleting] = useState(false);
    const [tobeDeleted, setTobeDeleted] = useState(null);

	const activateProducts = (selectedproduct)=>{
		setUpdateProducts(true);
		setProduct(selectedproduct);
	}

	const closeUpdateProducts = () =>{
		setUpdateProducts(false);
		setProduct(null);
	}

	fetchProducts();

	const handleDelete = (productId) => {
		setIsDeleting(true);
		setTobeDeleted(productId);
	};

	const filterZeroQuantityItems = (arr) => {
		return arr.filter(item => item.productQuantity === 0);
	};

	const zeroQuantityItems = filterZeroQuantityItems(products);

	const deleteProduct = async ()=>{
		try {
			const delReq = await axios.delete('https://api.wemitraders.co.ke/products',{
			  data: {
				  id: tobeDeleted
			  }
			});

			if (delReq.status == 200){
				alert("Product Deletion Success")
				setIsDeleting(false);
				setTobeDeleted(null);
				fetchProducts()
			}
		  } catch (error) {
			console.error("Error deleting products:", error);
		  }
	}

	return (
			<>
			{
				Isdeleting ?
				<div className="flex fixed top-0 left-0 justify-center items-center w-full h-full bg-gray-600 bg-opacity-50">
					<div className="bg-white rounded shadow-lg p-[2rem] h-[35%] w-[30%] border">
						<p className="font-semibold">Are Sure you want to delete this product?</p>
						<div className="mt-5">
							<button onClick={deleteProduct} className="bg-blue-500 mr-5 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none">Ok</button>
							<button onClick={()=>{setIsDeleting(false)}} className="bg-red-500 mr-5 hover:bg-red-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none">Cancel</button>
						</div>
					</div>
				</div>:
				<></>
			}
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				    <tr>
						<th scope="col" className="px-6 py-3">
							Index
						</th>
						<th scope="col" className="px-6 py-3">
							Service Name
						</th>
						<th scope="col" className="px-6 py-3">
							Available Quantity
						</th>
						<th scope="col" className="px-6 py-3">
							Model
						</th>
						<th scope="col" className="px-6 py-3">
							Repair Price
						</th>
						<th scope="col" className="px-6 py-3">
							Market Price
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
				    </tr>
				</thead>
				<tbody>
				    { outOffStock ? zeroQuantityItems.map((item, index)=>{
						return (
							<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4 text-black">
									{index+1}
								</td>
								<td className="px-6 py-4 text-black">
									{item.productName}
								</td>
								<td className="px-6 py-4 text-black">
									{item.productQuantity}
								</td>
								<td className="px-6 py-4 text-black">
									{item.productColor}
								</td>
								<td className="px-6 py-4 text-black">
									Ksh. {item.productPrice}
								</td>
								<td className="px-6 py-4 text-black">
									Ksh. {item.marketPrice}
								</td>
	
								<td className="px-6 py-4">
									<button  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2" onClick={()=>activateProducts(item)}><HiPencil/></button>
									<button onClick={()=>handleDelete(item.id)} className="font-medium text-red-600 dark:text-blue-500 hover:underline" ><IoTrashOutline/></button>
									<button className="font-medium text-red-600 dark:text-blue-500 hover:underline" ><LuEye/></button>
								</td>
							</tr>
						)
					}): products.map((item, index)=>{
					return (
						<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td className="px-6 py-4 text-black">
								{index+1}
							</td>
							<td className="px-6 py-4 text-black">
								{item.productName}
							</td>
							<td className="px-6 py-4 text-black">
								{item.productQuantity}
							</td>
							<td className="px-6 py-4 text-black">
								{item.productColor}
							</td>
							<td className="px-6 py-4 text-black">
								Ksh. {item.productPrice}
							</td>
							<td className="px-6 py-4 text-black">
								Ksh. {item.marketPrice}
							</td>

							<td className="px-6 py-4">
								<button  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2" onClick={()=>activateProducts(item)}><HiPencil/></button>
								<button onClick={()=>handleDelete(item.id)} className="font-medium text-red-600 dark:text-blue-500 hover:underline" ><IoTrashOutline/></button>
								<button className="font-medium text-sky-600 dark:text-blue-500 hover:underline ml-2" ><LuEye/></button>
							</td>
				        </tr>
					)
				    })} 
				</tbody>
			    </table>
				
				{updateProducts && <UpdateProductModal handleCallClose={closeUpdateProducts} product={product}/>}
			</>
	)
}

export default PTable;