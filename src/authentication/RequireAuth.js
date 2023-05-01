import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function RequireAuth({ allowedRoles }) {
    const { auth } = useAuth();
    const location = useLocation();
  return (
    auth?.roles?.find(role => allowedRoles?.includes(role)) 
        ? <Outlet/>
        : auth?.user 
            ? <Navigate to="/unauthorized" state={{ from: location }} replace/>
            : <Navigate to="/" state={{ from: location }} replace/>
        
  );
}

export default RequireAuth