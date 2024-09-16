import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoutes: React.FC = () => {
  const getAdminToken = (): string | null => {
    return sessionStorage.getItem('admin_token');
  };

  const token = getAdminToken();

  return (
    token ? <Outlet /> : <Navigate to="/admin/dashboard/login" />
  );
};

export default AdminProtectedRoutes;
