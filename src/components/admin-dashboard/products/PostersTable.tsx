import React, {useState, useEffect} from "react";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";

const PostersTable = ()=>{
    const [posters, setPosters] = useState([])
	const [Isdeleting, setIsDeleting] = useState(false);
    const [tobeDeleted, setTobeDeleted] = useState(null);

    const fetchPosters = async()=>{
        try {
          const response = await axios.get("https://api.wemitraders.co.ke/ads")
          setPosters(response.data)
        } catch (error) {
          console.log(error)      
        }
    }
    
    useEffect(()=>{
        fetchPosters()
    }, [posters])


    const handleDelete = async (productId) => {
		setIsDeleting(true);
		setTobeDeleted(productId)
	};

	const deleteProduct = async()=>{
		try{
			const posterReq = await axios.delete('https://api.wemitraders.co.ke/ads',{
					data: {
						id: tobeDeleted
					}
			});

			if (posterReq.status == 200){
				alert("Poster Deletion Success")
				setIsDeleting(false);
				setTobeDeleted(null);
			}
		} catch (error) {
			console.error("Error deleting Poster:", error);
		}
	}

    return (
        <div>
			{Isdeleting ? 
			<div className="flex fixed top-0 left-0 justify-center items-center w-full h-full bg-gray-600 bg-opacity-50">
				<div className="bg-white rounded shadow-lg p-[2rem] h-[35%] w-[30%] border">
					<p className="font-semibold">Are Sure you want to delete this poster ?</p>
					<div className="mt-5">
						<button onClick={()=>{deleteProduct()}} className="bg-blue-500 mr-5 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none">Ok</button>
						<button onClick={()=>{setIsDeleting(false)}} className="bg-red-500 mr-5 hover:bg-red-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none">Cancel</button>
					</div>
				</div>
			</div>:<></>}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				    <tr>
						<th scope="col" className="px-6 py-3">
							Category Img
						</th>
                        <th scope="col" className="px-6 py-3">
							Percentage Off
						</th>
                        <th scope="col" className="px-6 py-3">
							Description
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
				    </tr>
				</thead>
				<tbody>
				    { posters.map((item, index)=>{
					return (
						<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td className="px-6 py-4 text-black">
								{item.img}
							</td>
                            <td className="px-6 py-4 text-black">
								{item.price}
							</td>
                            <td className="px-6 py-4 text-black">
								{item.text}
							</td>
							<td className="px-6 py-4">
								<button  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"><HiPencil/></button>
								<button onClick={()=>handleDelete(item.id)} className="font-medium text-red-600 dark:text-blue-500 hover:underline" ><IoTrashOutline/></button>
							</td>
				        </tr>
					)
				    })} 
				</tbody>
			    </table>
        </div>
    )
};

export default PostersTable;