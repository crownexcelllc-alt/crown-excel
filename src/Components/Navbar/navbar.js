"use client";
import React, { useState, useRef, useEffect } from 'react';
import Logo from '../Images/logo.png';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import './Navbar.css';
import { FaSortDown, FaChevronDown } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import mobileLogo from '../Images/Mobile-logo.png'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Navbar() {
  const navLinks = [
    { label: 'Home', href: '/' },

    {
      label: 'About Us',
      href: '/about-us',
      icon: <FaSortDown className='icon' />,
      hasDropdown: true,
      dropdown: [
        { label: 'Career', href: '/about-us/career' },
        { label: 'FAQ', href: '/about-us/faq' },
      ],
    },

    {
      label: 'Products',
      href: '',
      icon: <FaSortDown className='icon' />,
      hasDropdown: true,
      dropdown: [
        { label: 'Laptop', href: '/products/laptops' },
        { label: 'Desktop', href: '/products/pc' },
        { label: 'All in One', href: '/products/all-in-one' },
        { label: 'Printers', href: '/products/printers' },
        { label: 'Routers', href: '/products/routers-access-points' },
        { label: 'Switching', href: '/products/switching' },
        { label: 'Scanners and Copier', href: '/products/scanners-copier' },
        { label: 'Keyboard & Mouse', href: '/products/keyboard-mouse' },
        { label: 'Accessories', href: '/products/accessories' },
        { label: 'Biometric', href: '/products/biometric' },
        { label: 'Phones and CCTV', href: '/products/phones-cctv' },
      ],
    },

    {
      label: 'Services',
      href: '/services',
      icon: <FaSortDown className='icon' />,
      hasDropdown: true,
      dropdown: [

        { label: 'Networking', href: '/services/networking' },
        { label: 'RMA Facility', href: '/services/rma' },
        { label: 'Managed IT', href: '/services/managed-it' },
        { label: 'IT Consultancy', href: '/services/it-consultancy' },
        { label: 'Hardware AMC', href: '/services/hardware-amc' },
        { label: 'Software AMC', href: '/services/software-amc' },
        { label: 'Hardware Repair', href: '/services/hardware-repair' },
        { label: 'Server Support', href: '/services/server-support' },
      ],
    },

    { label: 'Our Management', href: '/management' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const hoverTimeout = useRef(null);
  const productsDropdownRef = useRef(null);
  const [showProductsScroll, setShowProductsScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  // Track if products dropdown is scrolled to bottom
  const [atBottom, setAtBottom] = useState(false);
  const [medNav, setMedNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (hoveredIndex !== null && navLinks[hoveredIndex].label === 'Products') {
      const el = productsDropdownRef.current;
      if (!el) return;
      const handleScroll = () => {
        setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 2);
      };
      el.addEventListener('scroll', handleScroll);
      // Initial check
      setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 2);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredIndex]);

  const handleMouseEnter = (i) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredIndex(i);
    // Check if Products dropdown needs scroll arrow
    if (navLinks[i].label === 'Products') {
      setTimeout(() => {
        if (productsDropdownRef.current && productsDropdownRef.current.scrollHeight > 320) {
          setShowProductsScroll(true);
        } else {
          setShowProductsScroll(false);
        }
      }, 0);
    } else {
      setShowProductsScroll(false);
    }
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 500); // 0.5 seconds
  };

  return (
    <div className="navbar px-20 py-2 overflow-x-hidden md:overflow-x-visible lg:overflow-x-visible absolute w-full flex items-center justify-between z-50">
      <div className="logo hidden lg:flex">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            height={50}
            width={150}
            className="h-auto w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52"
          />
        </Link>
      </div>
      <div className="logo flex lg:hidden">
        <Image
          src={mobileLogo}
          alt="Logo"
          height={50}
          width={150}
          className="h-auto w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52"
        />
      </div>
      {/* Desktop NavLinks & Button */}
      <div className="hidden md:flex lg:hidden justify-center flex-1">
  <button
    className="text-green-900 text-2xl focus:outline-none transition-all ease-in-out"
    onClick={() => setMedNav(!medNav)}
    aria-label="Toggle medium navbar"
  >
    <FiMenu className="w-8 h-8" />
  </button>
</div>
{/* Medium Screen NavLinks (Dropdown) */}
{/* Medium Screen NavLinks (Dropdown) */}
{medNav && (
  <ul className="absolute top-20 left-0 w-full h-auto bg-white text-black shadow-md md:flex lg:hidden flex-col transition-all duration-500 ease-in-out z-50">
    {navLinks.map((item, i) => (
      <li key={i} className="border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3 hover:bg-gray-100">
          <a
            href={item.href}
            className={`flex-1 ${pathname === item.href ? 'bg-green-900 text-white' : 'text-black'} transition-colors duration-300`}
            onClick={() => {
              if (item.hasDropdown) {
                setOpenDropdownIndex(openDropdownIndex === i ? null : i);
              } else {
                setMedNav(false);
              }
            }}
          >
            {item.label}
          </a>
          {item.hasDropdown && (
            <button
              className="ml-2 text-lg focus:outline-none"
              onClick={() => setOpenDropdownIndex(openDropdownIndex === i ? null : i)}
              aria-label={`Toggle ${item.label} dropdown`}
              type="button"
            >
              <FaSortDown
                className={`transition-transform duration-300 ${openDropdownIndex === i ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>
        {/* Sublinks Dropdown */}
        {item.hasDropdown && (
          <ul
            className={`overflow-hidden transition-all duration-500 ease-in-out bg-white px-6 ${openDropdownIndex === i ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
          >
            {item.dropdown.map((subItem, j) => (
              <li key={j}>
                <a
                  href={subItem.href}
                  className={`block px-2 py-2 text-sm rounded transition-colors duration-200 w-full ${pathname === subItem.href ? 'bg-[#084032] text-white' : 'text-black hover:bg-gray-100'}`}
                  onClick={() => setMedNav(false)}
                >
                  {subItem.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)}

      <ul className="nav-links flex gap-6 items-center hidden md:flex">

        {navLinks.map((item, i) => (
          <li
            key={i}
            className="relative group list-none text-white nav-linkss"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={item.href}
              className={`flex items-center gap-1 nav-link-anchor${hoveredIndex === i ? ' nav-link-active' : ''} ${pathname === item.href ? 'text-green-700 border-b-2 border-green-700' : ''}`}
            >
              {item.label}
              {item.hasDropdown && <FaSortDown className="text-sm " />}
            </a>
            {Array.isArray(item.dropdown) && hoveredIndex === i && (
              <ul
                className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-lg tra z-50 parent-drp block"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                style={{ transition: 'opacity 0.5s' }}
              >
                {item.dropdown.map((subItem, j) => (
                  <li key={j} className="whitespace-nowrap m-0 p-0">
                    <a href={subItem.href} className={`block w-full dropdown-ach ${pathname === subItem.href ? 'bg-[#084032] text-white w-full' : 'text-black'} transition-colors duration-200 m-0 p-0 rounded-none`}>
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="nav-button hidden md:block">
        <button className="bg-gray-200 text-black w-36 h-11 text-base rounded-full shadow-md font-montserrat">Our Retail Store</button>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-green-900 flex items-center text-2xl focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Open mobile menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile NavLinks Drawer */}
      {/* Mobile NavLinks Drawer */}
      <div className="mobile-navbar fixed inset-0 z-50 flex flex-col md:hidden pointer-events-none">
        {/* Overlay to prevent scrolling behind */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
        ></div>
        {/* Slide-in menu */}
        <div
          className={`bg-white h-full w-full fixed top-0 left-0 shadow-xl transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} pointer-events-auto`}
        >
          <div className="p-6 flex flex-col gap-4 h-full">
            <div className="logo-icon-button flex justify-between">
              <div className="logo">
                <Link href='/'><Image className='text-green-900' width={100} height={100} src={mobileLogo} alt="Mobile Logo" /></Link>
              </div>
              <button
                className="self-end text-[16px] font-bold mb-4 border-2 rounded-full text-green-900 w-[30px] h-[30px]"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col gap-2 overflow-y-auto flex-1">
              {navLinks.map((item, i) => (
                <li key={i} className="text-black font-semibold">
                  <div className="flex items-center justify-between w-full">
                    <a
                      className={`block w-full px-2 py-1 text-sm rounded transition-colors duration-200 text-black hover:bg-[#084032] hover:text-white ${pathname === item.href ? 'text-white bg-green-900 border-green-700' : ''}`}
                      href={item.href}
                      onClick={() => {
                        if (item.hasDropdown) {
                          setOpenDropdownIndex(openDropdownIndex === i ? null : i);
                        } else {
                          setMobileMenuOpen(false); // close menu on normal item
                        }
                      }}
                    >
                      {item.label}
                    </a>
                    {item.hasDropdown && (
                      <button
                        className="ml-2 text-lg focus:outline-none"
                        onClick={() => setOpenDropdownIndex(openDropdownIndex === i ? null : i)}
                        aria-label={`Toggle ${item.label} dropdown`}
                        type="button"
                      >
                        <FaSortDown
                          className={`transition-transform duration-300 ${openDropdownIndex === i ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* DROPDOWN */}
                  {item.hasDropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out transform ${openDropdownIndex === i
                        ? 'max-h-auto opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-2'
                        }`}
                    >
                      <ul className="ml-0 mt-1 flex flex-col gap-0 bg-white w-full py-2 ">
                        {item.dropdown.map((subItem, j) => (
                          <li key={j}>
                            <a
                              href={subItem.href}
                              className={`block px-2 py-1 text-sm  transition-colors duration-200 w-full dropdown-ach ${pathname === subItem.href ? 'bg-[#084032] text-white w-full' : 'text-black'}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-green-900 text-white w-full h-11 text-base rounded-full shadow-md font-montserrat">Our Retail Store</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
