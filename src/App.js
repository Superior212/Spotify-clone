import React from "react";
import { useSelector } from "react-redux";
import {
  Route,
  Routes,
  Router,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path=""
          children={[
            <Route path="/" element={<Login />} />,
            <Route path="/home" element={<Home />} />,
          ]}
        ></Route>

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
