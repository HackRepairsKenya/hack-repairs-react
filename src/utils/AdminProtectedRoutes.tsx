import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const AdminProtectedRoutes = ()=> {
	const getAdminToken = () => {
		var token = sessionStorage.getItem('admin_token')
		return token
	}

    const token = getAdminToken()

	return (
		token ? <Outlet/> : <Navigate to="/admin/dashboard/login"/>	
	)
}

export default AdminProtectedRoutes;