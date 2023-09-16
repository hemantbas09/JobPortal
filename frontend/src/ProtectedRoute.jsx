import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component, requiredRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!loginToken || !userRole || userRole !== requiredRole) {
      navigate("/login");
    }
  }, [navigate, requiredRole]);

  const isLoggedIn = localStorage.getItem("token") && localStorage.getItem("role") === requiredRole;

  return isLoggedIn ? <Component /> : null; // Or render a fallback UI if needed
};

export default ProtectedRoute;
