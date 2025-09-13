// /admin/components/LogoutButton.tsx
'use client';

export default function LogoutButton({ children }) {
  const handleLogout = async () => {
    // your logout logic
  };

  return (
    <button onClick={handleLogout}>
      {children}
    </button>
  );
}
