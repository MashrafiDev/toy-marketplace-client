import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <div className="">
            Loading
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;