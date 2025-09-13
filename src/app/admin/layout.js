// src/app/admin/layout.js
"use client";
import { useEffect, useState } from "react";
import AdminLayout from '@/Components/Admin/AdminLayout';
import LoginPage from "./login/page";
import "./admin.css"

export default function Layout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;
      setIsAuthenticated(!!token);
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  if (isAuthenticated === null) return null;
  if (!isAuthenticated) return <LoginPage />;

  return <AdminLayout>{children}</AdminLayout>;
}