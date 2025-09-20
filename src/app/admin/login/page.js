"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem("jwt", token);
      window.location.href = "/admin"; // Force reload and navigate to admin
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    //   background: "linear-gradient(135deg, #084032 0%, #0e6b50 100%)"
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          background: "#fff",
          padding: "40px 32px",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          minWidth: 340,
          display: "flex",
          flexDirection: "column",
          gap: 18
        }}
      >
        <h2 style={{ textAlign: "center", color: "#084032", marginBottom: 8 }}>Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            color:'black'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            color:'black'
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "8px",
            background: "#084032",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            marginTop: "8px"
          }}
        >
          Login
        </button>
        {error && (
          <div style={{ color: "red", textAlign: "center", marginTop: "4px" }}>
            {error}
          </div>
        )}
        {/* <div style={{ textAlign: "center", color: "#888", fontSize: "13px", marginTop: "10px" }}>
          <span>Demo: admin@crownexcel.com / admin123</span>
        </div> */}
      </form>
    </div>
  );
}