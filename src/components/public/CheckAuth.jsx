import React from "react";
import { Navigate } from "react-router-dom";

function CheckAuth(Component) {
  const auth = false; 
  // logic

    return auth ? <Component /> : <Navigate to="/login" />
}

export default CheckAuth;