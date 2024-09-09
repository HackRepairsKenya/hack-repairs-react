
import Header from "../components/admin-dashboard/Header";
import Customers from "../components/admin-dashboard/customers/Customers";

const Users =()=> {
	return (
		<>
			<div className="flex bg-slate-200">
				<div className="w-full min-h-[100vh] bg-slate-200 p-2 flex flex-col">
					<Header/>
					<Customers />	
				</div>
			</div>
	
		</>
	)
}


export default Users;