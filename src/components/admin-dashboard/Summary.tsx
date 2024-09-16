import {  useContext, useState, useEffect } from "react";
import { IoStatsChartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiClock1 } from "react-icons/ci";

import { categoriesContext } from "../../context/CategoriesContext";
import GettingStarted from "./GettingStarted";

import axios from "axios";



interface Order {
	id: number;
	customerName: string;
	date: string;
	totalAmount: number;
	shippingAddress: string;
	paymentMethod: string;
	status: string;
  }

  interface Customer {
	id: number;
	name: string;
	email: string;
	totalOrders: number;
  }

  interface Product {
  id: number;
  productName: string;
  productQuantity: number;
  productColor: string;
}
const orders:Order[] = []


const Summary = ()=>{

	const [customers, setCustomers] = useState([])
	const [products, setProducts]= useState([])
	const [activeTab, setActiveTab] = useState(0);

	// function to fetch customers
	const fetchCustomers =async ()=>{
		try {
			const response = await axios.get("https://api.wemitraders.co.ke/clients");
			
			 setCustomers(response.data);
			
		} catch (error) {
			console.error("Error fetching customers:", error);
			
		}

	};


	const fetchProducts = async ()=>{
		try {
			const response = await axios.get("https://api.wemitraders.co.ke/products");
			
			 setProducts(response.data);
			
		} catch (error) {
			console.error("Error fetching products:", error);
			
		}
	}

	useEffect(()=>{
		fetchCustomers()
	}, [])

	fetchProducts()

 
	const {categories} = useContext(categoriesContext)
	if (!categories) {
		return <div>Loading...</div>;  // Handle the case where categories are not yet loaded
	  }

	// total products
	const getTotalProducts = () => {
		let totalProducts = 0;
		categories.forEach((category) => {
		  totalProducts += category.products.length;
		});
		return totalProducts;
	  };
	
	// call the function to get total products 
	const totalProducts = getTotalProducts()

	const tabs = [
		{ name: 'Getting Started', content: <GettingStarted/> },
		{ name: 'Recent Updates', content:"No updates yet." }
	  ];
	
	
	
	return (
		<><div className="w-full mt-4">
			<div className="grid grid-cols-4 gap-4">
				<div className="bg-sky-200 shadow-lg rounded-lg border min-h-[15vh] flex flex-col justify-around p-1 text-sky-900">
					<div className="flex justify-between p-5 ml-1">
						<div>
							<h1 className="font-semibold text-xl">Total Customers</h1>
							<p className="text-left font-semibold text-lg">{customers.length}</p>
						</div>
						<div>
							<IoStatsChartSharp className="w-[30px] h-[30px]"/>
						</div>
					</div>
					<hr className="font-semibold mb-2"/>
					<p className="text-xs ml-1 flex font-normal">
					<span><CiClock1 className="font-normal h-[15px] w-[15px] mr-2"/></span> Last Update: 8:03AM
					</p>
				</div>
				<div className="bg-green-200 text-sky-900 shadow-lg rounded-lg border min-h-[15vh] flex flex-col justify-center p-1">
				<div className="flex justify-between p-5 ml-1">
						<div>
							<h1 className="font-semibold text-xl">Total Products</h1>
							<p className="text-lg text-left font-semibold">{totalProducts}</p>
						</div>
						<div>
							<IoStatsChartSharp className="w-[30px] h-[30px]"/>
						</div>
					</div>
					<hr className="font-semibold mb-2"/>
					<p className="text-xs ml-1 flex font-normal">
						<span><CiClock1 className="font-normal h-[15px] w-[15px] mr-2"/></span> Last Update: 8:03AM
					</p>
				</div>
				<div className="bg-yellow-200 shadow-lg rounded-lg border min-h-[15vh] text-sky-900 flex flex-col justify-center p-1">
				<div className="flex justify-between p-5 ml-1">
						<div>
							<h1 className="font-semibold text-xl">Weekly Orders</h1>
							<p className="text-lg text-left font-semibold">0</p>
						</div>
						<div>
							<IoStatsChartSharp className="w-[30px] h-[30px]"/>
						</div>
					</div>
					<hr className="font-semibold mb-2"/>
					<p className="text-xs ml-1 flex font-normal">
					<span><CiClock1 className="font-normal h-[15px] w-[15px] mr-2"/></span> Last Update: 8:03AM
					</p>
				</div>
				<div className="bg-orange-200 text-sky-900 shadow-lg rounded-lg border min-h-[15vh] flex flex-col justify-center p-1">
				<div className="flex justify-between p-5 ml-1">
						<div>
							<h1 className="font-semibold text-xl">Annual Sales</h1>
							<p className="text-lg text-left font-semibold">0</p>
						</div>
						<div>
							<IoStatsChartSharp className="w-[30px] h-[30px]"/>
						</div>
					</div>
					<hr className="font-semibold mb-2"/>
					<p className="text-xs ml-1 flex font-normal">
						<span><CiClock1 className="font-normal h-[15px] w-[15px] mr-2"/></span> Last Update: 8:03AM
					</p>
				</div>
			</div>
			<div className="min-h-[40vh] bg-white mt-5 flex">
				{/* Create Tabs */}
				<div className="flex flex-col justify-between w-[60%]">
					<div className="w-full p-4">
					<div className="flex space-x-4 border-gray-300">
						{tabs.map((tab, index) => (
						<button
							key={index}
							className={`text-sm py-3 px-4 font-semibold 
								transition outline-none duration-300 ${
							index === activeTab
								? 'border-b-2 border-green-500 bg-white text-black'
								: 'text-black'
							}`}
							onClick={() => setActiveTab(index)}
						>
							{tab.name}
						</button>
						))}
					</div>
					<div className="p-4 bg-white">
						{tabs[activeTab].content}
					</div>
					</div>
				</div>
			</div>
			<div className="flex mt-5">
				<div className="w-[55%] mr-2 shadow-lg rounded-lg border min-h-[60vh] bg-white p-3">
					<div className="flex justify-between mb-3">
						<div>
							<h1 className="font-semibold">Stock Levels</h1>
						</div>
						<div>
							<Link to="/admin/dashboard/products" className="text-xs text-blue-500 font-semibold">View All</Link>
						</div>
					</div>
					<div>
						<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-white bg-blue-900">
								<tr>
									<th scope="col" className="px-6 py-3">
										Id
									</th>
									<th scope="col" className="px-6 py-3">
										Product Name
									</th>
									<th scope="col" className="px-6 py-3">
										Quantity
									</th>
									<th scope="col" className="px-6 py-3">
										Color
									</th>
								</tr>
							</thead>
							<tbody>
								{products.slice(0, 5).map((product:Product, index) => (
									<tr key={index} className="bg-white border-b">
										<td className="px-6 py-4 text-black">{product.id}</td>
										<td className="px-6 py-4 text-black">{product.productName}</td>
										<td className="px-6 py-4 text-black">{product.productQuantity}</td>
										<td className="px-6 py-4 text-black">{product.productColor}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="w-[45%] shadow-lg rounded-lg border bg-white p-3">
					<div className="flex justify-between">
							<div>
								<h1 className="font-semibold mb-3">My Customers</h1>
							</div>
							<div>
								<Link to="/admin/dashboard/users" className="text-sm text-blue-500 font-semibold">View All</Link>
							</div>
					</div>
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        			<thead className="text-xs text-white bg-green-900">
						<tr>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Total Orders
							</th>
						</tr>
					</thead>
				<tbody>
					{customers.slice(1).map((customer:Customer, index) => (
						<tr key={index} className="bg-white border-b">
							<td className="px-6 py-4 text-black">{customer.name}</td>
							<td className="px-6 py-4 text-black">{customer.email}</td>
							<td className="px-6 py-4 text-black">0</td>
						</tr>
					))}
				</tbody>
      		</table>
				</div>
			</div>
			<div className="mt-5">
				<div className="min-h-[60vh] bg-white rounded-lg border p-5">
					<div className="flex justify-between">
						<div>
							<h1 className="font-semibold">My Orders</h1>
						</div>
						<div>
							<Link to="/admin/dashboard/orders" className="text-xs text-blue-500 font-semibold">View All</Link>
						</div>
					</div>
					<div className="relative overflow-x-auto shadow-md">
						<table className="table-auto min-w-full">
							<thead className="bg-green-900 font-semibold">
							<tr>
								<th className="px-6 py-3 text-left text-sm text-white tracking-wider">Order ID</th>
								<th className="px-6 py-3 text-left text-sm text-white tracking-wider">Customer Name</th>
								<th className="px-6 py-3 text-left text-sm text-white tracking-wider">Date</th>
								<th className="px-6 py-3 text-left text-sm text-white tracking-wider">Total Amount</th>
								<th className="px-6 py-3 text-left text-sm text-white tracking-wider">Shipping Address</th>
								<th className="px-6 py-3 text-left text-sm text-white tracking-wider">Payment Method</th>
								<th className="px-6 py-3 text-left text-sm text-white tracking-wider">Status</th>
								<th className="px-6 py-3 text-left text-sm text-white tracking-wider">Actions</th>
							</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
							{orders.map((order, index) => (
								<tr key={index}>
								<td className="px-6 py-4 whitespace-nowrap text-sm">{order.id}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">{order.customerName}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">{order.date}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">{order.totalAmount}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">{order.shippingAddress}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">{order.paymentMethod}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">{order.status}</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm">
									<button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded">
									View
									</button>
								</td>
								</tr>
							))}
							</tbody>
						</table>
					</div>

				</div>
			</div>
			<div className="fixed bottom-4 right-4">
				
    		</div>
			
		</div></>
	)
}


export default Summary;