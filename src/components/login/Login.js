import React, { useEffect, useState } from "react";
import "./Login.css";
import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const REDIRECT_URI = "https://superiorspotify.netlify.app/";
  const CLIENT_ID = "b96da533c0594f8f8f3c622613e70b64";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

     
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

 

  const handleLogin = () => {
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  };

  return (
    <div className="btn-container">
      {!token ? (
        <button onClick={handleLogin}>Login to Spotify</button>
      ) : (
        <Navigate to="/home"/>
      )}
    </div>
  );
};

export default Login;
