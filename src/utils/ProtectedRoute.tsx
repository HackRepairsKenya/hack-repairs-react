// ProtectedRoute.tsx

import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { token } = useAuth();
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" state={{ path: location.pathname }} replace />;
  }

  return <Outlet />; // Render child routes if authenticated
};

export default ProtectedRoute;
