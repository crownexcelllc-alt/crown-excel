'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Partner from '../Images/footerpartner.png'
import Coorporate from '../Images/footercoorporates.png'
import Wholesale from '../Images/footerwholesale.png'
import FooterLogo from '../Images/footerlogo.png'
import logo from "../Images/logos.png"

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneRight,
} from 'phosphor-react';
import { XLogoIcon } from '@phosphor-icons/react';

const Footer = () => {
  const [emailInput, setEmailInput] = useState('');
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');
  const [logoUrl, setLogoUrl] = useState(FooterLogo);
  const [settings, setSettings] = useState({
    phone: '+971 4-354 0566',
    email: 'contact@crownexcel.com',
    address: 'Al Jahra Building, 2nd floor, 18th St – Al Raffa – Dubai',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  });
  console.log('logo', settings?.logo)

  useEffect(() => {
    // Fetch settings from API
    fetch('/api/settings/public')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data === 'object') {
          setSettings(prev => ({ ...prev, ...data }));
        }
      })
      .catch(err => {
        console.warn('Could not load settings:', err);
      });
  }, []);

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

  async function submitSubscription(e) {
    e?.preventDefault?.();
    if (!emailInput || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      setEmailMessage('Please enter a valid email');
      return;
    }
    setLoadingEmail(true);
    setEmailMessage('');
    try {
      const payload = {
        name: 'Website Subscriber',
        email: emailInput,
        phone: '',
        subject: 'Footer Subscription',
        service: 'subscription',
        comments: 'Subscribed via footer email input',
      };
      const res = await fetch('/api/contact-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.error || 'Failed to submit');
      }
      setEmailMessage('Thanks — we saved your email and notified the team.');
      setEmailInput('');
    } catch (err) {
      console.error(err);
      setEmailMessage('Failed to submit — please try again later.');
    } finally {
      setLoadingEmail(false);
      setTimeout(() => setEmailMessage(''), 6000);
    }
  }

  return (
    <footer className="bg-[#084032] text-white">
      {/* Partnership & Business Section */}
      <div className="border-b border-[#4ade80]/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Desktop View */}
          <div className="hidden lg:flex justify-between items-stretch">
            {topButtons.map((item, index) => (
              <div key={index} className="flex-1 text-center relative group">
                {/* Divider */}
                {index < topButtons.length - 1 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-32 bg-[#4ade80]/30"></div>
                )}

                <div className="px-8 py-6">
                  <div className="w-24 h-24 mx-auto mb-6 p-3 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-6 text-white leading-tight">
                    {item.title}
                  </h3>

                  <Link href={item.href}>
                    <button className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet View */}
          <div className="lg:hidden">
            <div className="flex justify-between items-stretch min-h-[280px] px-2">
              {topButtons.map((item, index) => (
                <div key={index} className="flex-1 text-center relative group max-w-[33%]">
                  {/* Divider */}
                  {index < topButtons.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-40 bg-[#4ade80]/30"></div>
                  )}

                  <div className="px-1 py-8 flex flex-col justify-center items-center h-full">
                    <div className="w-16 h-16 mx-auto mb-4 p-2 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>

                    <h3 className="text-xs font-semibold mb-4 text-white leading-tight text-center">
                      {item.title}
                    </h3>

                    <Link href={item.href}>
                      <button className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-white font-medium px-2 py-1.5 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg text-xs whitespace-nowrap">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#003b2f]">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-12 gap-8">

              {/* Company Info - Takes 4 columns */}
              <div className="col-span-4">
                <div className="mb-8">
                  <Image
                    src={logo}
                    alt="Crown Excel Logo"
                    width={180}
                    height={90}
                    className="object-contain mb-6"
                  />
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Let&apos;s Embrace Technology
                  </p>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {settings.facebook && (
                      <Link href={settings.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group">
                        <FacebookLogo size={24} className="text-white group-hover:scale-110 transition-transform" />
                      </Link>
                    )}
                    {settings.twitter && (
                      <Link href={settings.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group">
                        <XLogoIcon size={24} className="text-white group-hover:scale-110 transition-transform" />
                      </Link>
                    )}
                    {settings.instagram && (
                      <Link href={settings.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group">
                        <InstagramLogo size={24} className="text-white group-hover:scale-110 transition-transform" />
                      </Link>
                    )}
                    {settings.linkedin && (
                      <Link href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group">
                        <LinkedinLogo size={24} className="text-white group-hover:scale-110 transition-transform" />
                      </Link>
                    )}
                    {/* Default icons if no settings */}
                    {!settings.facebook && !settings.twitter && !settings.instagram && !settings.linkedin && (
                      <>
                        <div className="w-12 h-12 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer">
                          <FacebookLogo size={24} className="text-white group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="w-12 h-12 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer">
                          <XLogoIcon size={24} className="text-white group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="w-12 h-12 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer">
                          <InstagramLogo size={24} className="text-white group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="w-12 h-12 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer">
                          <LinkedinLogo size={24} className="text-white group-hover:scale-110 transition-transform" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Our Services - Takes 3 columns */}
              <div className="col-span-3">
                <h3 className="text-white text-xl font-bold mb-8 pb-2 border-b border-[#4ade80]/30">Our Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/our-services/software-solutions" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Software Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/long/short-term-amc" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Long/Short Term AMC
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/it-consultancy" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      IT Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/networking" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Networking Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/storage&virtualization" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Storage & Virtualization
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Sitemaps
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Links - Takes 2 columns */}
              <div className="col-span-2">
                <h3 className="text-white text-xl font-bold mb-8 pb-2 border-b border-[#4ade80]/30">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/company/about-us" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/career" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/company-history" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Our History
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/leader-team" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link href="https://blog.grabatoz.ae/" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/faq" className="text-gray-300 hover:text-[#4ade80] transition-colors duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact & Newsletter - Takes 3 columns */}
              <div className="col-span-3">
                <h3 className="text-white text-xl font-bold mb-8 pb-2 border-b border-[#4ade80]/30">Get In Touch</h3>

                <div className="mb-8">
                  <div className="mb-4">
                    <p className="text-gray-300 mb-2">
                      <span className="font-semibold text-white">Phone:</span> {settings.phone}
                    </p>
                    <p className="text-gray-300 mb-4">
                      <span className="font-semibold text-white">Email:</span> {settings.email}
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    <span className=" block"> <span className='font-semibold text-white '>Address:</span> {settings.address}</span>
                  </p>
                </div>

                {/* Newsletter Subscription */}
                <div>
                  {/* <h4 className="text-white font-semibold mb-4">Newsletter</h4> */}
                  <p className="text-gray-300 mb-4 text-sm">Stay updated with our latest news and offers</p>
                  <div className="flex">
                    <input
                      type="email"
                      value={emailInput}
                      onChange={e => setEmailInput(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#4ade80] transition-colors"
                    />
                    <button
                      onClick={submitSubscription}
                      className={`bg-[#4ade80] hover:bg-[#22c55e] px-6 py-3 rounded-r-lg transition-colors duration-300 ${loadingEmail ? 'opacity-60 pointer-events-none' : ''}`}
                    >
                      <PaperPlaneRight size={20} className="text-white" />
                    </button>
                  </div>
                  {emailMessage && (
                    <p className="text-sm mt-3 text-gray-400">{emailMessage}</p>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Logo and Company Info */}
            <div className="text-center mb-12">
              <Image
                src={logo}
                alt="Crown Excel Logo"
                width={140}
                height={70}
                className="mx-auto object-contain mb-4"
              />
              <p className="text-gray-300 text-base mb-6">Let&apos;s Embrace Technology</p>
            </div>

            {/* Services and Company Links */}
            <div className="grid grid-cols-2 gap-8 mb-12">

              {/* Our Services */}
              <div>
                <h3 className="text-white text-lg font-bold mb-6 pb-2 border-b border-[#4ade80]/30">Our Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/our-services/software-solutions" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Software Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/long/short-term-amc" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Long/Short Term AMC
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/it-consultancy" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      IT Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services/networking" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Networking
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Sitemaps
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white text-lg font-bold mb-6 pb-2 border-b border-[#4ade80]/30">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/company/about-us" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/career" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/company-history" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Our History
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/leader-team" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link  href="https://blog.grabatoz.ae/" className="text-gray-300 hover:text-[#4ade80] transition-colors text-sm flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            {/* Contact Info */}
            <div className="text-center mb-8">
              <h3 className="text-white text-lg font-bold mb-6 pb-2 border-b border-[#4ade80]/30 inline-block">Contact Address</h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                {settings.address}
              </p>
                <div className="space-y-2 text-sm text-gray-300">
                <p><span className="font-semibold text-white">Phone:</span> {settings.phone}</p>
                <p><span className="font-semibold text-white">Email:</span> {settings.email}</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mb-12">
              <h4 className="text-white font-semibold mb-4 text-center">Stay Updated</h4>
              <div className="flex max-w-sm mx-auto">
                <input
                  type="email"
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#4ade80] transition-colors text-sm"
                />
                <button
                  onClick={submitSubscription}
                  className={`bg-[#4ade80] hover:bg-[#22c55e] px-4 py-3 rounded-r-lg transition-colors duration-300 ${loadingEmail ? 'opacity-60 pointer-events-none' : ''}`}
                >
                  <PaperPlaneRight size={18} className="text-white" />
                </button>
              </div>
              {emailMessage && (
                <p className="text-xs mt-3 text-gray-400 text-center">{emailMessage}</p>
              )}
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex justify-center gap-4">
                {settings.facebook && (
                  <Link href={settings.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <FacebookLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
                  </Link>
                )}
                {settings.twitter && (
                  <Link href={settings.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <XLogoIcon size={20} className="text-white group-hover:scale-110 transition-transform" />
                  </Link>
                )}
                {settings.instagram && (
                  <Link href={settings.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <InstagramLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
                  </Link>
                )}
                {settings.linkedin && (
                  <Link href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group">
                    <LinkedinLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
                  </Link>
                )}
                {/* Default icons if no settings */}
                {!settings.facebook && !settings.twitter && !settings.instagram && !settings.linkedin && (
                  <>
                    <div className="w-10 h-10 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer">
                      <FacebookLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="w-10 h-10 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer">
                      <XLogoIcon size={20} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="w-10 h-10 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer">
                      <InstagramLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="w-10 h-10 bg-white/10 hover:bg-[#4ade80] rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer">
                      <LinkedinLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#003b2f] border-t border-[#4ade80]/30 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Crown Excel. All Rights Reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <p className="text-gray-300">
                Developed
                by{' '}
                <span className="text-[#4ade80] font-semibold hover:text-[#22c55e] transition-colors">
                  Tech Solutionor
                </span>
              </p>
              
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
// export default Footer;
