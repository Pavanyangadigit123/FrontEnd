import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

//import AdminDashboard from "../components/Admin/AdminDashboard";
import { useAuth } from "../context/auth";
import AdminDashboard from "../Component/Admin/SideBar/AdminDashboard";

export default function AdminPrivateRoute() {
  
  const [auth] = useAuth();

  console.log("Auth Role in Private Route: ", auth?.role); // Check what's inside auth

  return auth?.role && auth.role.includes("admin") ? <AdminDashboard /> : <Navigate to="/unauthorized" />;
}