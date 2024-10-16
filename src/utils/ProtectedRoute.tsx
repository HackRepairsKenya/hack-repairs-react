// ProtectedRoute.tsx

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Render child routes if authenticated
};

export default ProtectedRoute;
