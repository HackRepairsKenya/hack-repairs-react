
import {Link} from "react-router-dom"

const urls = [
	{
		path: "/admin/dashboard/home",
		name: "Home",
		img: "/assets/home.svg"
	},
	{
		path: "/admin/dashboard/products",
		name: "Products",
		img: "/assets/products.svg"
	},
	{
		path: "/admin/dashboard/services",
		name: "services",
		img: "/assets/products.svg"
	},
	{
		path: "/admin/dashboard/users",
		name: "Users",
		img: "/assets/users.svg"
	},
	{
		path: "/admin/dashboard/orders",
		name: "Orders",
		img: "/assets/orders.svg"
	},
	{
		path: "/admin/dashboard/feedback",
		name: "Feedback",
		img: "/assets/notification.svg"
	},
	{
		path: "/",
		name: "Website",
		img: "/assets/notification.svg"
	},
]

const Header = ()=>{
	const admin_token = sessionStorage.getItem("admin_token");

	return (
		<><div className="min-h-[10vh] mb-1 w-full shadow-xl bg-button text-white flex justify-between items-center rounded">
			<ul className="w-[50%] flex justify-around">
				{urls.map((item, index)=> {
					return (
						<li key={ index } className="flex w-full rounded-3xl p-4">
							<Link to={item.path} className="text-center font-semibold capitalize text-xs flex justify-evenly w-full"><span>{item.name}</span></Link></li>
					)
				})}
			</ul>
			<div className="mr-1 flex w-[5%] justify-around">
				{!admin_token ? <Link className="cursor-pointer bg-gray rounded-lg p-2 text-xs font-semibold" to="/admin/dashboard/login">
					<span>
						Login
					</span></Link>:<p className="cursor-pointer bg-gray rounded-lg p-2 text-xs font-semibold" onClick={()=>{
					sessionStorage.clear()
					location.reload()
				}}>Logout</p>}
			</div>	
		</div></>
	)
}


export default Header;