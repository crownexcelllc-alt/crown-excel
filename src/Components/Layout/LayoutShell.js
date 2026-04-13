"use client";

import { usePathname } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/Components/Navbar/navbar";
import Footer from "@/Components/Footer/footer";
import ScrollToTopButton from "@/app/_components/ScrollToTopButton/ScrollToTopButton";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      <SpeedInsights />
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <ScrollToTopButton />}
    </>
  );
}
