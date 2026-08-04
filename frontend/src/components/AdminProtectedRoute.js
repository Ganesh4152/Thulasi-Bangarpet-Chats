import React from "react";
import { Navigate } from "react-router-dom";

function AdminProtectedRoute({ children }) {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  // Not logged in
  if (!user) {

    return (
      <Navigate to="/login" />
    );

  }


  // Logged in but not admin
  if (user.role !== "ADMIN") {

    return (
      <Navigate to="/" />
    );

  }


  // Admin allowed
  return children;

}

export default AdminProtectedRoute;
