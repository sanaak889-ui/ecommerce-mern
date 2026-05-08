import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");
  const adminUser = JSON.parse(localStorage.getItem("adminUser"));

  // 🔥 ONLY ADMIN DATA CONTROLS ADMIN ROUTE
  if (!adminToken || !adminUser?.isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;