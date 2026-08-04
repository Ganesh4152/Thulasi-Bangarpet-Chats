import React from "react";
import { Navigate } from "react-router-dom";

function CustomerProtectedRoute({ children }) {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {

    return <Navigate to="/login" replace />;

  }

  if (user.role !== "CUSTOMER") {

    return <Navigate to="/" replace />;

  }

  return children;

}

export default CustomerProtectedRoute;
