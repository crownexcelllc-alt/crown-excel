"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/navbar";
import Footer from "@/Components/Footer/footer";
import { usePathname } from "next/navigation";
import ScrollToTopButton from "./_components/ScrollToTopButton/ScrollToTopButton";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Check if the route starts with /admin
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{ backgroundColor: "white" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!isAdminRoute && <Navbar />}
        {children}
         <SpeedInsights />
        {!isAdminRoute && <Footer />}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
