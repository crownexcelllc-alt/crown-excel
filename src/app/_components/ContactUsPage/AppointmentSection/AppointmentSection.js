'use client';

import { FiCalendar, FiArrowRight, FiExternalLink } from 'react-icons/fi';

export default function AppointmentSection({ links = [] }) {
  // Only show links that are active
  const activeLinks = links.filter(l => l.active !== false);
  if (!activeLinks || activeLinks.length === 0) return null;


  return (
    <section className="w-full px-4 mt-14 mb-6">
      {/* Section Header */}
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#084032] text-white mb-4 shadow-md">
            <FiCalendar size={22} />
          </div>
          <h2 className="text-[26px] font-[700] font-montserrat text-black leading-tight">
            Book an Appointment
          </h2>
          <p className="text-[14px] text-gray-500 mt-2 max-w-md">
            Prefer to schedule a meeting? Choose a slot directly through Google Calendar — fast, easy, and instant.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-16 bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-[#084032]" />
            <div className="h-px w-16 bg-gray-200" />
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className={`grid gap-4 ${
            activeLinks.length === 1
              ? 'grid-cols-1 max-w-sm mx-auto'
              : activeLinks.length === 2
              ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {activeLinks.map((link, idx) => (
            <a
              key={link.id || idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-[#084032] transition-all duration-300 overflow-hidden"
            >
              {/* Left green accent bar */}
              <div className="absolute left-0 top-0 w-1 h-full bg-[#084032] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#084032]/10 flex items-center justify-center text-[#084032] group-hover:bg-[#084032] group-hover:text-white transition-all duration-300 shadow-sm">
                <FiCalendar size={20} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-[600] text-gray-800 group-hover:text-[#084032] transition-colors leading-snug truncate">
                  {link.name}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5 flex items-center gap-1">
                  <span>Schedule via Google Calendar</span>
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 flex items-center gap-1 text-[#084032]">
                <FiArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
                <FiExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[11px] text-gray-400 mt-5 flex items-center justify-center gap-1.5">
          <FiCalendar size={11} />
          <span>You will be redirected to Google Calendar to complete your booking.</span>
        </p>
      </div>
    </section>
  );
}
