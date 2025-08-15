"use client";
import React, { useState, useRef, useEffect } from 'react';
import Logo from '../Images/cleaned_file.svg';
import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';
import './Navbar.css';
import { FaSortDown, FaChevronDown } from "react-icons/fa";
// import { RiMenu3Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import mobileLogo from '../Images/Mobile-logo.png'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaLaptop, FaDesktop, FaPrint, FaNetworkWired, FaMouse, FaTools, FaMobileAlt, FaServer, FaUserTie, FaCogs, FaUsers, FaHistory, FaCommentDots, FaQuestionCircle } from "react-icons/fa";
import { MdDevicesOther, MdRouter, MdSecurity } from "react-icons/md";

function Navbar() {
  const [logoUrl, setLogoUrl] = useState(Logo);
  const navLinks = [
    { label: 'Home', href: '/' },

    {
      label: 'Company',
      // href: '',
      icon: <FaSortDown className='icon' />,
      hasDropdown: true,
      dropdown: [
        { label: 'About Us', href: '/company/about-us' },
        { label: 'Company History', href: '/company/company-history' },
        { label: 'Crown Excel Family', href: '/company/crown-excel-family' },
        { label: 'Director Message', href: '/company/director-message' },
        { label: 'Events', href: '/company/events' },
        { label: 'Career', href: '/company/career' },
        { label: 'FAQ', href: '/company/faq' },

        // { label: 'Leader Team', href: '/company/leader-team' },
      ],
    },

    {
      label: 'Products',
      // href: '',
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
        { label: 'Biometric', href: '/products/biometrics' },
        { label: 'Phones and CCTV', href: '/products/phones-cctv' },
      ],
    },

    {
      label: 'Services',
      href: '/our-services',
      icon: <FaSortDown className='icon' />,
      hasDropdown: true,
      dropdown: [

        { label: 'Networking', href: '/our-services/networking' },
        { label: 'RMA Facility', href: '/our-services/rma-facility' },
        { label: 'Managed IT', href: '/our-services/managed-it' },
        { label: 'IT Consultancy', href: '/our-services/it-consultancy' },
        { label: 'Hardware AMC', href: '/our-services/hardware-amc' },
        { label: 'Software AMC', href: '/our-services/software-amc' },
        { label: 'Hardware Repair', href: '/our-services/hardware-repair' },
        { label: 'Server Support', href: '/our-services/server-support' },
      ],
    },

    { label: 'Our Management', href: '/our-management' },
    { label: 'Contact Us', href: '/contact-us' },
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
    async function fetchLogo() {
      try {
        const res = await fetch('/api/logo');
        const data = await res.json();
        console.log('Fetched logo data:', data);

        if (data.logo) setLogoUrl(data.logo);
      } catch {
        setLogoUrl('/file.svg');
      }
    }
    fetchLogo();
  }, []);



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
    <div className="navbar font-muli px-20 py-2 overflow-x-hidden md:overflow-x-visible lg:overflow-x-visible absolute w-full flex items-center justify-between z-50">
      <div className="logo hidden md:flex">
        <Link href="/">
          <img
            src={logoUrl}
            alt="Logo"
            height={50}
            width={150}
            className="h-auto w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 fill-current"
          />
        </Link>
      </div>
      <div className="logo flex md:hidden">
        <Link href="/">
          <Image
            src={mobileLogo}
            alt="Mobile Logo"
            height={50}
            width={150}
            className="h-auto w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52"
          />
        </Link>
      </div>
      {/* Desktop NavLinks & Button */}
      <div className="hidden md:flex lg:hidden justify-center flex-1">
        <button
          className="text-white text-2xl focus:outline-none transition-all ease-in-out"
          onClick={() => setMedNav(!medNav)}
          aria-label="Toggle medium navbar"
        >
          <FiMenu className="w-8 h-8" />
        </button>
      </div>
      {/* Medium Screen NavLinks (Dropdown) */}
      {/* Medium Screen NavLinks (Dropdown) */}
      {/* Animated Medium Screen Nav */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-700 ease-in-out overflow-hidden z-40 md:flex lg:hidden flex-col ${medNav ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{ transitionDelay: medNav ? '0.2s' : '0s' }}
      >
        <ul className="flex flex-col ">
          {navLinks.map((item, i) => (
            <li key={i}>
              <div className="flex items-center justify-between px-0 py-0 hover:bg-gray-50">
                <a
                  href={item.href}
                  className={`text-base font-medium flex-1 transition-colors duration-300 ${pathname === item.href ? 'text-white bg-green-900 px-3 py-1 rounded' : 'text-gray-800'}`}
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
                    className="ml-2 text-gray-600 focus:outline-none"
                    onClick={() => setOpenDropdownIndex(openDropdownIndex === i ? null : i)}
                    aria-label={`Toggle ${item.label} dropdown`}
                    type="button"
                  >
                    <FaSortDown className={`transition-transform duration-300 ${openDropdownIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* Dropdown Items */}
              {item.hasDropdown && (
                <ul className={`overflow-hidden transition-all duration-500 ease-in-out bg-white px-6 ${openDropdownIndex === i ? 'max-h-[1000px] py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                  {item.dropdown.map((subItem, j) => (
                    <li key={j}>
                      <a
                        href={subItem.href}
                        className={`block py-2 text-sm pl-2 pr-4 transition-colors duration-200 rounded-md ${pathname === subItem.href ? 'bg-[#084032] text-[#fffff]' : 'text-black hover:bg-gray-100'}`}
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
      </div>



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
              {item.hasDropdown && <FaSortDown className="text-sm -mt-1" />}
            </a>
            {Array.isArray(item.dropdown) && hoveredIndex === i && (
              <div
                className="fixed left-0 right-0 mt-4 bg-white text-black shadow-lg z-50 border-t border-gray-100"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                style={{ borderBottom: '1px solid #e5e7eb', top: '76px' , width: '57%' , margin: 'auto' }}
              >
                <div className="container mx-auto p-4 max-w-6xl">
                  <ul
                    ref={item.label === 'Products' ? productsDropdownRef : null}
                    className={`max-h-[460px] overflow-y-auto hide-scrollbar grid grid-cols-3 gap-6`}
                    style={{ transition: 'opacity 0.5s' }}
                  >
                    {item.dropdown.map((subItem, j) => {
                      // Icon mapping by label with descriptions
                      const menuItems = {
                        'Laptop': {
                          icon: <FaLaptop size={24} className="text-green-900" />,
                          desc: "Portable computing solutions"
                        },
                        'Desktop': {
                          icon: <FaDesktop size={24} className="text-green-900" />,
                          desc: "Powerful desktop systems"
                        },
                        'All in One': {
                          icon: <MdDevicesOther size={24} className="text-green-900" />,
                          desc: "Integrated computer solutions"
                        },
                        'Printers': {
                          icon: <FaPrint size={24} className="text-green-900" />,
                          desc: "Professional printing devices"
                        },
                        'Routers': {
                          icon: <MdRouter size={24} className="text-green-900" />,
                          desc: "Network connectivity devices"
                        },
                        'Switching': {
                          icon: <FaNetworkWired size={24} className="text-green-900" />,
                          desc: "Network switching solutions"
                        },
                        'Scanners and Copier': {
                          icon: <FaPrint size={24} className="text-green-900" />,
                          desc: "Document processing systems"
                        },
                        'Keyboard & Mouse': {
                          icon: <FaMouse size={24} className="text-green-900" />,
                          desc: "Input peripherals"
                        },
                        'Accessories': {
                          icon: <FaTools size={24} className="text-green-900" />,
                          desc: "Computer peripherals & add-ons"
                        },
                        'Biometric': {
                          icon: <MdSecurity size={24} className="text-green-900" />,
                          desc: "Security authentication systems"
                        },
                        'Phones and CCTV': {
                          icon: <FaMobileAlt size={24} className="text-green-900" />,
                          desc: "Communication & surveillance"
                        },
                        'Networking': {
                          icon: <FaNetworkWired size={24} className="text-green-900" />,
                          desc: "Complete networking solutions"
                        },
                        'RMA Facility': {
                          icon: <FaTools size={24} className="text-green-900" />,
                          desc: "Return merchandise services"
                        },
                        'Managed IT': {
                          icon: <FaServer size={24} className="text-green-900" />,
                          desc: "Comprehensive IT management"
                        },
                        'IT Consultancy': {
                          icon: <FaUserTie size={24} className="text-green-900" />,
                          desc: "Expert technology guidance"
                        },
                        'Hardware AMC': {
                          icon: <FaCogs size={24} className="text-green-900" />,
                          desc: "Hardware maintenance contracts"
                        },
                        'Software AMC': {
                          icon: <FaCogs size={24} className="text-green-900" />,
                          desc: "Software support agreements"
                        },
                        'Hardware Repair': {
                          icon: <FaTools size={24} className="text-green-900" />,
                          desc: "Device repair & maintenance"
                        },
                        'Server Support': {
                          icon: <FaServer size={24} className="text-green-900" />,
                          desc: "Server maintenance solutions"
                        },
                        'About Us': {
                          icon: <FaUsers size={24} className="text-green-900" />,
                          desc: "Learn about our company"
                        },
                        'Company History': {
                          icon: <FaHistory size={24} className="text-green-900" />,
                          desc: "Our journey through time"
                        },
                        'Crown Excel Family': {
                          icon: <FaUsers size={24} className="text-green-900" />,
                          desc: "Meet our team members"
                        },
                        'Director Message': {
                          icon: <FaCommentDots size={24} className="text-green-900" />,
                          desc: "A message from leadership"
                        },
                        'Events': {
                          icon: <FaCommentDots size={24} className="text-green-900" />,
                          desc: "Recent company activities"
                        },
                        'Career': {
                          icon: <FaUserTie size={24} className="text-green-900" />,
                          desc: "Join our growing team"
                        },
                        'FAQ': {
                          icon: <FaQuestionCircle size={24} className="text-green-900" />,
                          desc: "Frequently asked questions"
                        },
                        'Our Management': {
                          icon: <FaUserTie size={24} className="text-green-900" />,
                          desc: "Leadership team profiles"
                        },
                        'Contact Us': {
                          icon: <FaCommentDots size={24} className="text-green-900" />,
                          desc: "Get in touch with us"
                        },
                      };

                      const menuItem = menuItems[subItem.label] || {
                        icon: <FaChevronDown size={24} className="text-green-900" />,
                        desc: "More information"
                      };

                      return (
                        <li key={j} className="rounded-lg transition-colors hover:bg-gray-50">
                          <a
                            href={subItem.href}
                            className={`flex items-start p-4 ${pathname === subItem.href ? 'bg-gray-50' : ''}`}
                          >
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 flex items-center justify-center bg-[#f1f5f9] text-green-800 rounded-lg">
                                {menuItem.icon}
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-medium text-gray-900">{subItem.label}</span>
                              <span className="text-xs text-gray-500 mt-1">{menuItem.desc}</span>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {item.label === 'Products' && !atBottom && (
                  <div className={`flex justify-center py-1 text-black font-[700] text-[20px] transition-opacity duration-300 ${showProductsScroll && !atBottom ? 'opacity-100' : 'opacity-0'}`}>
                    <FaAngleDown className={`${showProductsScroll && !atBottom ? '' : ''}`} />
                  </div>
                )}
              </div>
            )}

          </li>
        ))}
      </ul>
      <div className="nav-button hidden md:block">
        <button
          onClick={() => window.open("https://grabatoz.ae", "_blank")}
          className="bg-gray-200 text-black w-36 h-11 text-base rounded-full shadow-md font-muli"
        >
          Our Retail Store
        </button>

      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden  flex items-center text-2xl font-extrabold focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Open mobile menu"
      >
        <FaBarsStaggered className='font-extrabold text-[30px] text-green-950' />
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
                <Link href='/'><Image className='text-green-900' onClick={() => setMobileMenuOpen(false)} width={100} height={100} src={mobileLogo} alt="Mobile Logo" /></Link>
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
            <button onClick={() => {
              setMobileMenuOpen(false); // optional: close the menu
              window.location.href = "https://grabatoz.ae";
            }} className="mt-8 bg-green-900 text-white w-full h-11 text-base rounded-full shadow-md font-montserrat">Our Retail Store</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
