
import ServicesTable from "@/components/admin-dashboard/services/ServicesTable";
import Header from "../components/admin-dashboard/Header";

const ServicesDashboard =()=> {
	return (
		<>
			<div className="flex bg-slate-200 w-[100%]">
				<div className="w-full min-h-[100vh] bg-slate-200 p-2 flex flex-col">
					<Header/>
					<ServicesTable/>
					
				</div>
			</div>
	
		</>
	)
}


export default ServicesDashboard;