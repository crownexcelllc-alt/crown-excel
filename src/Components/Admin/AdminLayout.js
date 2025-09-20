'use client';

import React from 'react';
import Link from 'next/link';
import LogoutButton from '@/app/admin/components/LogoutButton';
import { usePathname } from 'next/navigation';
import Logo from "../../Components/Images/Mobile-logo.png"
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi';
import { IoIosLogOut } from "react-icons/io";

export default function AdminLayout({ children, title = '' }) {
  
  const pathname = usePathname();

  const navLinks = [
    { href: "/admin/applications", label: "Job Applications" },
    { href: "/admin/contact-submissions", label: "Inquiry Form" },
    { href: "/admin/reviews", label: "Reviews" },
    { href: "/admin/settings", label: "Business Settings" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white text-black relative">

      {/* Top-right Logout */}
      <div className="absolute top-4 right-4 z-50 ">
        <LogoutButton>
          <div className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#084032] text-white text-sm rounded hover:bg-[#0a5c48] transition-colors duration-200">
            <IoIosLogOut />
            <span>Logout</span>
          </div>
        </LogoutButton>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 p-6 pt-16 md:pt-6">
        <div className="mb-6">
          <Link href="/admin">
            <Image alt='Crown Excel Logo' width={200} height={200} src={Logo} />
          </Link>
        </div>
        <hr className='bg-gray-400 text-gray-400 w-full h-[2px] mb-7' />
        <nav className="flex flex-col gap-2 text-sm">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <p
                  className={`px-3 py-2 rounded ${
                    isActive
                      ? "bg-[#084032] text-white font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                  style={isActive ? { cursor: "default" } : {}}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-x-hidden">
        <header className="mb-6 mt-10 md:mt-0">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </header>
        <section>
          {children}
        </section>
      </main>
    </div>
  );
}
