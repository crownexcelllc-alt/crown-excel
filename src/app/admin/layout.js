// src/app/admin/layout.js
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AdminLayout from '@/Components/Admin/AdminLayout';
import LoginPage from "./login/page";
import "./admin.css"

export default function Layout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;
      setIsAuthenticated(!!token);
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // Login page par sidebar nahi dikhani - seedha LoginPage render karo
  if (pathname === "/admin/login") {
    return <LoginPage />;
  }

  if (isAuthenticated === null) return null;
  if (!isAuthenticated) return <LoginPage />;

  return <AdminLayout>{children}</AdminLayout>;
}