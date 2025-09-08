"use client";
import { useEffect, useState } from "react";
import AdminLayout from '@/Components/Admin/AdminLayout';
import './admin.css';
import LogoutButton from "./components/LogoutButton";
import LoginPage from "./login/page";

export default function Layout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;
      setIsAuthenticated(!!token);
    };
    checkAuth();

    // Listen for JWT changes (login/logout) from anywhere in the app
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div>
      <header>
        <LogoutButton />
      </header>
      <AdminLayout>
        {children}
      </AdminLayout>
    </div>
  );
}
