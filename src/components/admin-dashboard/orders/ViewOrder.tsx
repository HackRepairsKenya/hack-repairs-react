interface ViewPropTypes{
    closeOrder:()=>void
}

const ViewOrders = ({ closeOrder }:ViewPropTypes)=>{
    return (
        <div className="fixed bg-black bg-opacity-50 w-full left-0 top-0 flex justify-center h-full">
            <div className="bg-white h-[40%] w-[40%] rounded-lg p-5 mt-[5rem]">
                <div className="mt-5 flex">
							<button className='bg-red-500 hover:bg-red-600 mr-2 text-sm text-white font-bold py-2 px-4 rounded' onClick={closeOrder}>Close</button>
				</div>
            </div>
        </div>
    )
}

export default ViewOrders;