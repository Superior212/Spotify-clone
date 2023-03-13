import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./Logout.css";

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
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
