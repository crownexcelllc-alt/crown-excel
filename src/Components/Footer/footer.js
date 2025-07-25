'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Partner from '../Images/footerpartner.png'
import Coorporate from '../Images/footercoorporates.png'
import Wholesale from '../Images/footerwholesale.png'
import FooterLogo from '../Images/footerlogo.png'
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  PaperPlaneRight,
} from 'phosphor-react';

const Footer = () => {
  const topButtons = [
    {
      title: 'Become Our Partner',
      imgSrc: Partner,
      href: '/contact-us',
    },
    {
      title: 'For Corporates Content',
      imgSrc: Coorporate,
      href: '/contact-us',
    },
    {
      title: 'Wholesale Inquiries',
      imgSrc: Wholesale,
      href: '/contact-us',
    },
  ];

  return (
    <footer className="bg-[#084032] text-white">
      {/* Top Buttons Section */}
      <div className="px-4 md:px-6 py-4 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center relative">
            {topButtons.map((item, index) => (
              <div key={index} className="text-center relative">
                {/* Green divider line - only show after first two items */}
                {index < 2 && (
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-0.5 h-55 bg-[#4ade80]"></div>
                )}

                <div className="w-[103px] h-[103px] mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={103}
                    height={103}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[19px] font-[600] mb-4 text-white leading-[19px] mt-10">
                  {item.title}
                </h3>
                <Link href={item.href}>
                  <button className="px-6 py-2 cursor-pointer w-[132px] h-[40px] text-white text-[15px] font-montserrat rounded-full transition duration-300 border border-[#61ce70] hover:brightness-110 shadow-md" style={{backgroundImage: 'linear-gradient(180deg, #084032 0%, #61ce70 100%)'}}>
                    Apply Now
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet View */}
          <div className="w-full bg-[#084032]  py-0 flex lg:hidden justify-center gap-0">
            {topButtons.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col px-5 items-center justify-center  bg-transparent  py-4 w-full h-[330px] ${index !== topButtons.length - 1 ? 'border-r border-[#61ce70]' : ''
                  }`}
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-white text-[14px] md:text-[18px] text-center font-semibold leading-snug mb-6">
                  {item.title}
                </h3>

                <Link href={item.href}>
                  <button className="w-[80px] h-[30px] md:w-[100px] border border-[#61ce70] text-white text-[12px] font-medium rounded-md transition duration-300 hover:brightness-110 shadow-md" style={{backgroundImage: 'linear-gradient(180deg, #084032 0%, #61ce70 100%)'}}>
                    Apply Now
                  </button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#003b2f] px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 text-sm">
            {/* Logo and Contact */}
            <div>
              <div className="flex items-center mb-4">
                <div>
                  <Image src={FooterLogo} alt="Logo" width={150} height={80} />
                </div>
              </div>
              <p className="mb-6 text-gray-300 text-lg">Your desire is our Expertise</p>
              <div className="flex gap-3 mb-6">
                <div className="w-15 h-15 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <FacebookLogo size={40} className="text-white" />
                </div>
                <div className="w-15 h-15 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <TwitterLogo size={40} className="text-white" />
                </div>
                <div className="w-15 h-15 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <InstagramLogo size={40} className="text-white" />
                </div>
              </div>
              <p className="text-gray-300 text-lg">Phone: +971 4-354 0566</p>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/our-services/hardware-amc" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Hardware
                  </Link>
                </li>
                <li>
                  <Link href="/our-services/software-amc" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Software
                  </Link>
                </li>
                <li>
                  <Link href="/our-services/managed-it" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Managed It
                  </Link>
                </li>
                <li>
                  <Link href="/our-services/server-support" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Server Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors text-lg">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/our-management" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Our Management
                  </Link>
                </li>
                <li>
                  <Link href="/company-us/events" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/company-us/career" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Subscription */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
              <p className="mb-6 text-gray-300 leading-relaxed text-sm font-bold">
                Address: Al Jahra Building, 2nd floor, 18th St – Al Raffa – Dubai
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="w-full bg-white rounded-full px-4 py-3 pr-12 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#4ade80]"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#003b2f] rounded-full flex items-center justify-center hover:bg-[#004d3f] transition-colors">
                  <PaperPlaneRight size={16} className="text-white" />
                </button>
              </div>
              <p className="text-lg mt-3 text-gray-400">{"We don't send you any spam"}</p>
            </div>
          </div>

          {/* Mobile & Tablet View */}
          <div className="md:hidden space-y-8">
            {/* Logo and Tagline */}
            <div className="text-center">
              <div className="mb-4">
                <Image src={FooterLogo} alt="Logo" width={120} height={60} className="mx-auto" />
              </div>
              <p className="text-gray-300 text-base">Your desire is our Expertise</p>
            </div>

            {/* Services and Links in Two Columns */}
            <div className="grid grid-cols-2 gap-6">
              {/* Our Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/hardware" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Hardware
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/software" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-it" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Managed It
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/server" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Server Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/management" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Our Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="text-gray-300 hover:text-white transition-colors text-sm">
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <p className="mb-4 text-gray-300 leading-relaxed text-sm">
                Address: Al Jahra Building, 2nd floor, 18th St – Al Raffa – Dubai
              </p>
              <p className="mb-4 text-gray-300 text-sm">Phone: +971 4-354 0566</p>

              {/* Email Subscription */}
              <div className="relative mb-4">
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="w-full bg-white rounded-full px-4 py-3 pr-12 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#4ade80] text-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#003b2f] rounded-full flex items-center justify-center hover:bg-[#004d3f] transition-colors">
                  <PaperPlaneRight size={14} className="text-white" />
                </button>
              </div>
              <p className="text-sm text-gray-400 mb-6">{"We don't send you any spam"}</p>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <FacebookLogo size={20} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <TwitterLogo size={20} className="text-white" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <InstagramLogo size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-[#003b2f] border-t border-[#4ade80] py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm md:text-lg text-white">
          <p className="mb-2 md:mb-0 text-center md:text-left">Copyright © Crown Excel | All Right Reserved</p>
          <p className="text-center md:text-right">
            Made with <span className="text-red-500">❤️</span> by{' '}
            <span className="text-[#4ade80] font-medium">Tech Solutionor</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;