'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function AppointmentLinksView({ links = [] }) {
  // Only show active slots to clients
  const activeLinks = links.filter(l => l.active !== false);

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique departments/categories
  const categoriesSet = new Set();
  activeLinks.forEach(l => {
    if (l.category && l.category.trim()) {
      categoriesSet.add(l.category.trim());
    } else {
      categoriesSet.add('General');
    }
  });
  const categoriesList = ['All', ...Array.from(categoriesSet).sort((a, b) => a.localeCompare(b))];

  // Filter links by category
  const filteredLinks = selectedCategory === 'All'
    ? activeLinks
    : activeLinks.filter(l => {
        const cat = l.category?.trim() || 'General';
        return cat.toLowerCase() === selectedCategory.toLowerCase();
      });

  // Handle direct navigation to calendar slot
  const handleCardClick = (url) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7f4] via-white to-[#e8f5f0] py-16 px-4 text-left">
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#084032] hover:text-[#00a63e] uppercase tracking-wider transition-colors cursor-pointer"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#084032] text-white mb-6 shadow-lg">
          <FiCalendar size={28} />
        </div>
        <h1 className="text-4xl font-bold text-[#084032] mb-4 leading-tight">
          Book an Appointment
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto font-light">
          Connect directly with our departments and experts. Select a department and click a card to book a calendar slot instantly.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
          <FiClock size={14} className="text-[#084032]" />
          <span>Select slots instantly &mdash; Redirects to Google Calendar booking slots</span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      {activeLinks.length > 0 && categoriesList.length > 2 && (
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap gap-2 justify-center border-b border-gray-100 pb-5">
            {categoriesList.map(cat => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[#084032] text-white border-[#084032] shadow-xs'
                      : 'bg-white text-gray-600 border-gray-250 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Profile Directory Cards Grid */}
      <div className="max-w-4xl mx-auto">
        {activeLinks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-xs max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 text-gray-400 mb-4">
              <FiCalendar size={28} />
            </div>
            <p className="text-gray-550 font-bold">No appointment slots available.</p>
            <p className="text-gray-400 text-xs mt-1">Please check back later or contact us directly.</p>
          </div>
        ) : filteredLinks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-xs max-w-lg mx-auto">
            <p className="text-gray-500 font-bold">No slots found under this department.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-3 text-xs font-bold text-[#084032] hover:text-[#00a63e] uppercase tracking-wider cursor-pointer"
            >
              Show All Departments
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => handleCardClick(link.url)}
                className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-xs hover:shadow-md hover:border-[#084032] transition-all duration-300 relative flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[#084032] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Photo & Identity Header */}
                  <div className="flex gap-4 items-start mb-4">
                    {/* Profile Photo */}
                    <div className="shrink-0">
                      {link.profileImage ? (
                        <img
                          src={link.profileImage}
                          alt={link.name}
                          className="w-14 h-14 rounded-xl object-cover border border-gray-155 bg-gray-50 shadow-xs"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-[#084032]/10 flex items-center justify-center text-[#084032] text-xl font-bold">
                          {link.name ? link.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'AP'}
                        </div>
                      )}
                    </div>

                    {/* Name & Dept Badge */}
                    <div className="space-y-1 text-left">
                      <h2 className="text-base font-bold text-gray-800 group-hover:text-[#084032] transition-colors leading-tight">
                        {link.name}
                      </h2>
                      <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest bg-green-50 text-[#084032] border border-[#084032]/10 px-2 py-0.5 rounded">
                        {link.category || 'General'}
                      </span>
                    </div>
                  </div>

                  {/* Description / Bio */}
                  {link.description ? (
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-4 text-left">
                      {link.description}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-400 italic mb-4 text-left">
                      Schedule a direct meeting block using the booking link below.
                    </p>
                  )}
                </div>

                {/* Footer block (Socials + Button) */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
                  {/* Social Profile Shortcuts */}
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    {link.socials?.linkedin && (
                      <a
                        href={link.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-blue-50 text-[#0077b5] border border-blue-200 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] flex items-center justify-center transition-all"
                        title="LinkedIn Profile"
                      >
                        <FaLinkedinIn size={11} />
                      </a>
                    )}
                    {link.socials?.twitter && (
                      <a
                        href={link.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-sky-50 text-[#1da1f2] border border-sky-200 hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2] flex items-center justify-center transition-all"
                        title="Twitter Profile"
                      >
                        <FaTwitter size={11} />
                      </a>
                    )}
                    {link.socials?.facebook && (
                      <a
                        href={link.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-indigo-50 text-[#1877f2] border border-indigo-200 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] flex items-center justify-center transition-all"
                        title="Facebook Profile"
                      >
                        <FaFacebookF size={11} />
                      </a>
                    )}
                    {link.socials?.instagram && (
                      <a
                        href={link.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-pink-50 text-[#e1306c] border border-pink-200 hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c] flex items-center justify-center transition-all"
                        title="Instagram Profile"
                      >
                        <FaInstagram size={11} />
                      </a>
                    )}
                  </div>

                  {/* Action Link Trigger */}
                  <div className="flex items-center gap-1 text-xs font-bold text-[#084032] group-hover:text-[#00a63e] transition-colors uppercase tracking-wider">
                    <span>Book Slot</span>
                    <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer disclaimer */}
      {activeLinks.length > 0 && (
        <p className="text-center text-xs text-gray-400 mt-16">
          You will be redirected to Google Calendar to complete your booking.
        </p>
      )}
    </div>
  );
}
