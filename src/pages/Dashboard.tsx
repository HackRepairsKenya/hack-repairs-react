
import Summary from "../components/admin-dashboard/Summary";
import Header from "../components/admin-dashboard/Header";

function Dashboard(){
	
	return (
			<>
		<div className="flex bg-slate-200 w-full">
			<div className="w-full min-h-[100vh] bg-slate-200 p-2 flex flex-col">
				<Header/>
				<Summary/>
				
			</div>
		</div>
	   </>
	)
}


export default Dashboard;