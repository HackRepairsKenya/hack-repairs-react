import React, {useState, useEffect} from "react";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import { HiPencil } from "react-icons/hi2";
import UpdateSubcategoryModal from "./updateSubcategoriesModal";

const SubCategoriesTable = ()=>{
    const [subcategories, setSubCategories] = useState([])
	const [updateSubCategory, setUpdateSubCategory] = useState(false);
	const [subcategory, setsubCategory] = useState(null);
	const [Isdeleting, setIsDeleting] = useState(false);
    const [tobeDeleted, setTobeDeleted] = useState(null);

	const activateSubCategory = (selectedcategory)=>{
		setUpdateSubCategory(true);
		setsubCategory(selectedcategory);
	}

	const closeUpdateSubCategory = () =>{
		setUpdateSubCategory(false);
		setsubCategory(null);
	}
    
    const fetchSubCategories = async()=>{
        try {
          const response = await axios.get("https://api.wemitraders.co.ke/subcategories")
          
          setSubCategories(response.data)
          
        } catch (error) {
          console.log(error)      
        }
    }
    
    useEffect(()=>{
        fetchSubCategories()
    }, [subcategories])


    const handleDelete = async (subcategoryId) => {
		setIsDeleting(true)
		setTobeDeleted(subcategoryId)
	};

	const deleteSubcategory = async()=>{
		try{
			const delReq = await axios.delete('https://api.wemitraders.co.ke/subcategories',{
				data: {
					id: tobeDeleted
				}
		  	});
		  	if (delReq.status === 200){
				setIsDeleting(false);
				setTobeDeleted(null);
			}
		} catch (error) {
		  console.error("Error deleting subcategory:", error);
		}
	}

    return (
        <div>
			{Isdeleting ? 
			<div className="flex fixed top-0 left-0 justify-center items-center w-full h-full bg-gray-600 bg-opacity-50">
				<div className="bg-white rounded shadow-lg p-[2rem] h-[30%] w-[35%] border">
					<p className="font-semibold">Are Sure you want to delete this subcategory ?</p>
					<div className="mt-5">
						<button onClick={()=>{deleteSubcategory()}} className="bg-blue-500 mr-5 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none">Ok</button>
						<button onClick={()=>{setIsDeleting(false)}} className="bg-red-500 mr-5 hover:bg-red-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none">Cancel</button>
					</div>
				</div>
			</div>:<></>}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				    <tr>
						<th scope="col" className="px-6 py-3">
							SubCategory Id
						</th>
                        <th scope="col" className="px-6 py-3">
							Category Id
						</th>
						<th scope="col" className="px-6 py-3">
							Category Name
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
				    </tr>
				</thead>
				<tbody>
				    { subcategories.map((item, index)=>{
					return (
						<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td className="px-6 py-4 text-black">
								{item.id}
							</td>
                            <td className="px-6 py-4 text-black">
								{item.categoryID}
							</td>
							<td className="px-6 py-4 text-black">
								{item.name}
							</td>
							<td className="px-6 py-4">
								<button onClick={()=>activateSubCategory(item)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"><HiPencil/></button>
								<button onClick={()=>handleDelete(item.id)} className="font-medium text-red-600 dark:text-blue-500 hover:underline" ><IoTrashOutline/></button>
							</td>
				        </tr>
					)
				    })} 
				</tbody>
			    </table>
				{updateSubCategory && <UpdateSubcategoryModal handleSubcatclose={closeUpdateSubCategory} subcategory={subcategory}/>}
        </div>
    )
};

export default SubCategoriesTable;