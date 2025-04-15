import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const user = token ? JSON.parse(atob(token.split('.')[1])) : null;

  if (!token) return <Navigate to="/login" />;

  if (role && user?.role !== role) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
