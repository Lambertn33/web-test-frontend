import React from "react";
import { Navigate } from "react-router-dom";

export function CheckAuth({ children }) {
  const user = localStorage.getItem("currentUser");
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
