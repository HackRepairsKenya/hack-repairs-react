import { useEffect,useState } from "react";
import axios from "axios";
import UsersTable from "./UsersTable";
import AdminModal from "./AdminModal";
import UserModal from "./CustomerModal";

const Customers = ()=>{
	const [customers, setCustomers] = useState([])
	const [admins, setAdmins] = useState([])
	const [customerModal, showCustomerModal] = useState(false);
	const [adminModal, showAdminModal] = useState(false);

	// Modal Handlers
	const activateAdmin = ()=>{
		showAdminModal(true)
	  }
	
	const closeAdmin = () =>{
		showAdminModal(false)
	}
	
	const activateUser = () => {
		showCustomerModal(true);
	};
	
	  const closeUser = () => {
		showCustomerModal(false);
	};

	// function to fetch customers
	const fetchCustomers =async ()=>{
		try {
			const response = await axios.get("https://api.hackrepairs.co.ke/clients");
			
			 setCustomers(response.data);
			
		} catch (error) {
			console.error("Error fetching customers:", error);
			
		}

	}
	const fetchAdmins =async ()=>{
		try {
			const response = await axios.get("https://api.hackrepairs.co.ke/admins");
			
			setAdmins(response.data);
			
		} catch (error) {
			console.error("Error fetching Admins:", error);
			
		}

	}

	useEffect(()=>{
		fetchCustomers();
	}, [customers])

	useEffect(()=>{
		fetchAdmins();
	}, [admins])
	
	const tabs = [
		{ name: 'Customers', content: <UsersTable users={ customers } admin={ false }/> },
		{ name: 'Adminstrator', content: <UsersTable users={ admins } admin={ true }/> },
	];

	const [activeTab, setActiveTab] = useState(0);
	
	return (
		<div className="mt-2 min-h-[85vh] p-5 bg-white">
			<div className="flex justify-between">
				<div>
					<button
					className="bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none"
					onClick={() => {
						activateUser();
					}}
					>
						Create Customer
					</button>
				</div>
				<div>
					<button
					className="bg-green-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded mb-4 outline-none"
					onClick={() => {
						activateAdmin();
					}}
					>
						Create Adminstrator
					</button>
					</div>
			</div>
			<div className="flex flex-col justify-between bg-gray-100 w-full">
				<div className="w-full">
				<div className="flex space-x-4 border-b-2 border-gray-300">
					{tabs.map((tab, index) => (
					<button
						key={index}
						className={`text-sm font-semibold py-2 px-4 transition rounded-t outline-none duration-300 ${
						index === activeTab
							? 'border-t-2 border-blue-500 bg-blue-200 text-blue-500'
							: 'text-black'
						}`}
						onClick={() => setActiveTab(index)}
					>
						{tab.name}
					</button>
					))}
				</div>
				<div className="p-4 bg-white rounded shadow">
					{tabs[activeTab].content}
				</div>
				</div>
			</div>
			{adminModal && <AdminModal handleClose={closeAdmin}/>}
			{customerModal && <UserModal handleClose={closeUser}/>}
		</div>
	)
}



export default Customers;