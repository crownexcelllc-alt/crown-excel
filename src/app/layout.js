import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/Components/Layout/LayoutShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Crown Excel | IT Hardware and Solutions in Dubai",
    template: "%s | Crown Excel",
  },
  description:
    "Crown Excel provides IT hardware, infrastructure, networking, and managed technology solutions for businesses in Dubai and the UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "white" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
