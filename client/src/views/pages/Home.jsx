import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const role = useSelector((store) => store.auth.role);
  if (role === "admin") return <Navigate to="/admin/dashboard" replace />;
  else if (role === "seller")
    return <Navigate to="/seller/dashboard" replace />;
  else return <Navigate to="/login" replace />;
};

export default Home;
