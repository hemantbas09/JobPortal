import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component: Component, requiredRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!loginToken || !userRole || userRole !== requiredRole) {
      navigate("/login");
    }
  }, [navigate, requiredRole]);

  return <Component />;
};

export default ProtectedRoute;
