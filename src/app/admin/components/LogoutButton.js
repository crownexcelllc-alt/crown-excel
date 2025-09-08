"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  function handleLogout() {
    localStorage.removeItem("jwt");
    window.location.reload(); // Instantly updates layout and shows login page
  }
  return (
    <button onClick={handleLogout} style={{ padding: "8px 16px", background: "#084032", color: "#fff", borderRadius: 4 }}>
      Logout
    </button>
  );
}