'use client';

import React from 'react';
import { Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function LaptopHeroSection({
  openGeneralInquiryModal,
  getWhatsAppUrl,
  handleWhatsAppRedirect,
  scrollToSection,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b241c] via-[#103e30] to-[#0d2e24] text-white pt-10 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      {/* Ambient Radial Lighting Effects */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[900px] h-[300px] sm:h-[450px] bg-emerald-400/15 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none -z-0"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-[#ffd900]/10 blur-[120px] rounded-full pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Headline & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h1 className="font-anton uppercase tracking-[-0.03em] leading-[1.08] sm:leading-[1.02] text-3xl sm:text-5xl md:text-6xl lg:text-[76px] mb-4 sm:mb-5">
            <span className="block text-white">Direct Wholesale &amp; Bulk</span>
            <span className="block text-[#ffd900] italic">
              Laptops &amp; Workstations
            </span>
            <span className="block text-white text-2xl sm:text-4xl md:text-5xl lg:text-[56px] mt-1 font-montserrat font-bold tracking-normal uppercase">
              For Resellers, Corporates &amp; Global Export
            </span>
          </h1>

          <p className="font-jakarta text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl sm:max-w-3xl mx-auto font-light text-pretty">
            Crown Excel delivers authentic factory-sealed laptops from <span className="text-white font-medium">Lenovo, HP, Dell, ASUS, Acer &amp; Apple</span>. 
            Enjoy competitive bulk margins, massive ready warehouse stock in Dubai, and reliable same-day UAE &amp; GCC express delivery.
          </p>
        </div>

        {/* Action Buttons: Request Quote + WhatsApp Direct + Explore Categories */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto font-jakarta px-2">
          {/* 1. Request Wholesale Quote (Primary CTA) */}
          <button
            type="button"
            onClick={openGeneralInquiryModal}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#ffd900] hover:bg-[#ffe833] text-gray-950 font-bold text-sm sm:text-[15px] whitespace-nowrap shadow-md hover:shadow-xl hover:shadow-amber-500/20 border border-[#e6c400] transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Send className="w-4 h-4 text-gray-950 transition-transform duration-200 group-hover:translate-x-0.5" />
            <span>Request Wholesale Quote</span>
          </button>

          {/* 2. WhatsApp Instant Inquiries (Secondary Glass CTA) */}
          <a
            href={getWhatsAppUrl('Hello Crown Excel, I am looking for wholesale laptops availability and pricing.')}
            onClick={(e) => handleWhatsAppRedirect(e, 'Hello Crown Excel, I am looking for wholesale laptops availability and pricing.')}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-white/10 hover:bg-emerald-500/20 border border-emerald-400/30 hover:border-emerald-400/60 text-white font-semibold text-sm sm:text-[15px] whitespace-nowrap backdrop-blur-md shadow-sm hover:shadow-lg hover:shadow-emerald-950/40 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <FaWhatsapp className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
            <span>WhatsApp Instant Inquiries</span>
          </a>
        </div>
      </div>
    </section>
  );
}
