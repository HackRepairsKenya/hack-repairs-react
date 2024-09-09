
import Header from "../components/admin-dashboard/Header";
import ProductsTable from "../components/admin-dashboard/products/ProductsTable";

const Products =()=> {
	return (
		<>
			<div className="flex bg-slate-200 w-[100%]">
				<div className="w-full min-h-[100vh] bg-slate-200 p-2 flex flex-col">
					<Header/>
					<ProductsTable/>
					
				</div>
			</div>
	
		</>
	)
}


export default Products;