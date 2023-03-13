import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const UserGaurd = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return 
            isAuthenticated?<Outlet/>:<Navigate to="/logout"/>
     
    
}

export default UserGaurd