import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext"
const PrivateRoute = () => {
    //const auth = null; // determine if authorized, from context or however you're doing it
    const { currentUser } = useAuth()
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;