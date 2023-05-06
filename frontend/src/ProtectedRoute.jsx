import { React, useEffect } from "react";
import { useNavigate } from "react-router";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("token");
    let role = localStorage.getItem("role");
    console.log("This is loccal token for login", login);
    console.log("This is loccal token for login", role);
    if (login && role) {
      navigate("/login");
    }
  });
  return <Component />;
};

export default ProtectedRoute;
