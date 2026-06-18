'use client';

import { FiCalendar, FiExternalLink, FiClock, FiArrowRight } from 'react-icons/fi';

export default function AppointmentLinksView({ links = [] }) {
  // Only show active links to clients
  const activeLinks = links.filter(l => l.active !== false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7f4] via-white to-[#e8f5f0] py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#084032] text-white mb-6 shadow-lg">
          <FiCalendar size={28} />
        </div>
        <h1 className="text-4xl font-bold text-[#084032] mb-4 leading-tight">
          Book an Appointment
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Choose the type of appointment you&apos;d like to schedule. You&apos;ll be redirected to our Google Calendar booking page.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          <FiClock size={14} />
          <span>Powered by Google Calendar &mdash; Fast, easy, and secure booking</span>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-3xl mx-auto">
        {activeLinks.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
              <FiCalendar size={28} />
            </div>
            <p className="text-gray-500 text-base">No appointment slots available at the moment.</p>
            <p className="text-gray-400 text-sm mt-1">Please check back later or contact us directly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {activeLinks.map((link, idx) => (
              <a
                key={link.id || idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-6 bg-white border border-[#c5ddd7] rounded-2xl shadow-sm hover:shadow-lg hover:border-[#084032] transition-all duration-300 overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#084032] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#084032]/10 flex items-center justify-center text-[#084032] group-hover:bg-[#084032] group-hover:text-white transition-colors duration-300">
                    <FiCalendar size={20} />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-800 group-hover:text-[#084032] transition-colors leading-snug">
                      {link.name}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1 max-w-[200px]">
                      {link.url}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#084032]">
                  <span>Schedule Now</span>
                  <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  <FiExternalLink size={12} className="ml-auto text-gray-300 group-hover:text-[#084032] transition-colors" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Footer note */}
      {activeLinks.length > 0 && (
        <p className="text-center text-xs text-gray-400 mt-12">
          You will be redirected to Google Calendar to complete your booking.
        </p>
      )}
    </div>
  );
}
