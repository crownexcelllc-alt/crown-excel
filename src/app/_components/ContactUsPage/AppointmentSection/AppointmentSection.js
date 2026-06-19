'use client';

import Link from 'next/link';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

export default function AppointmentSection({ links = [] }) {
  // Only render the section if there are active appointment links in the database
  const activeLinks = links.filter(l => l.active !== false);
  if (!activeLinks || activeLinks.length === 0) return null;

  return (
    <section className="w-full px-4 mt-14 mb-8 text-center">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#084032] text-white mb-4 shadow-md">
            <FiCalendar size={22} />
          </div>
          <h2 className="text-[26px] font-[700] font-montserrat text-black leading-tight">
            Book an Appointment
          </h2>
          <p className="text-[14px] text-gray-500 mt-2 max-w-md font-light">
            Ready to schedule a meeting with our team? View our calendar slots to book a session directly.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-16 bg-gray-200" />
            <div className="w-2 h-2 rounded-full bg-[#084032]" />
            <div className="h-px w-16 bg-gray-200" />
          </div>
        </div>

        {/* Premium Navigation Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/appointments"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#084032] hover:bg-[#00a63e] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm tracking-wide"
          >
            <FiCalendar size={16} />
            <span>Book an Appointment Slot</span>
            <FiArrowRight size={15} className="ml-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
