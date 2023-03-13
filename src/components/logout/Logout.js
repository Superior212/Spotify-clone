import React from "react";
import { useDispatch } from "react-redux";
// import  logout  from "./logout/Logout";
import { Navigate, useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // setToken("");
    window.localStorage.removeItem("token");
    navigate("/login")
    // <Navigate to="/login"/>
    
  };

  return (
    <div className="logout">
      <h1>You have been successfully logged out.</h1>
      <button onClick={handleLogout}>Back to Login</button>
    </div>
  );
}

export default Logout;
