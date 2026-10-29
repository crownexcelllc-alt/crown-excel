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
    <div className="relative w-full bg-[#FFFFFF] overflow-hidden">
      <section className="relative w-full max-w-[1536px] mx-auto overflow-hidden bg-gradient-to-b from-[#0b241c] via-[#103e30] to-[#0d2e24] text-white pt-10 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 xl:pt-28 xl:pb-32 2xl:pt-32 2xl:pb-36 px-5 sm:px-8 md:px-[53px] lg:px-[53px] xl:px-16">
        {/* Ambient Radial Lighting Effects scaled across screen sizes */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] h-[300px] sm:h-[450px] lg:h-[550px] xl:h-[650px] bg-emerald-400/15 blur-[100px] sm:blur-[140px] xl:blur-[180px] rounded-full pointer-events-none -z-0"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[280px] sm:w-[480px] xl:w-[640px] h-[280px] sm:h-[480px] xl:h-[640px] bg-[#ffd900]/10 blur-[120px] xl:blur-[160px] rounded-full pointer-events-none -z-0"
        />

        <div className="relative z-10 w-full">
          {/* Hero Headline & Value Proposition */}
          <div className="text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mb-8 sm:mb-10 xl:mb-12">
            <h1 className="font-anton uppercase tracking-[-0.03em] leading-[1.08] sm:leading-[1.02] xl:leading-[1.0] text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] 2xl:text-[88px] mb-4 sm:mb-5 xl:mb-6">
              <span className="block text-white">Direct Wholesale &amp; Bulk</span>
              <span className="block text-[#ffd900] italic">
                Laptops &amp; Workstations
              </span>
              <span className="block text-white text-2xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] 2xl:text-[62px] mt-2 sm:mt-3 font-montserrat font-bold tracking-normal uppercase">
                For Resellers, Corporates &amp; Global Export
              </span>
            </h1>

            <p className="font-jakarta text-gray-200 text-sm sm:text-base md:text-lg xl:text-xl leading-relaxed max-w-2xl sm:max-w-3xl xl:max-w-4xl mx-auto font-light text-pretty">
              Crown Excel delivers authentic factory-sealed laptops from <span className="text-white font-medium">Lenovo, HP, Dell, ASUS, Acer &amp; Apple</span>. 
              Enjoy competitive bulk margins, massive ready warehouse stock in Dubai, and reliable same-day UAE &amp; GCC express delivery.
            </p>
          </div>

          {/* Action Buttons: Request Quote + WhatsApp Direct */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 xl:gap-5 max-w-3xl xl:max-w-4xl mx-auto font-jakarta px-2">
            {/* 1. Request Wholesale Quote (Primary CTA) */}
            <button
              type="button"
              onClick={openGeneralInquiryModal}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 xl:px-8 py-3.5 xl:py-4 rounded-xl xl:rounded-2xl bg-[#ffd900] hover:bg-[#ffe833] text-gray-950 font-bold text-sm sm:text-[15px] xl:text-base whitespace-nowrap shadow-md hover:shadow-xl hover:shadow-amber-500/20 border border-[#e6c400] transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Send className="w-4 h-4 xl:w-5 xl:h-5 text-gray-950 transition-transform duration-200 group-hover:translate-x-0.5" />
              <span>Request Wholesale Quote</span>
            </button>

            {/* 2. WhatsApp Instant Inquiries (Secondary Glass CTA) */}
            <a
              href={getWhatsAppUrl('Hello Crown Excel, I am looking for wholesale laptops availability and pricing.')}
              onClick={(e) => handleWhatsAppRedirect(e, 'Hello Crown Excel, I am looking for wholesale laptops availability and pricing.')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 xl:px-8 py-3.5 xl:py-4 rounded-xl xl:rounded-2xl bg-white/10 hover:bg-emerald-500/20 border border-emerald-400/30 hover:border-emerald-400/60 text-white font-semibold text-sm sm:text-[15px] xl:text-base whitespace-nowrap backdrop-blur-md shadow-sm hover:shadow-lg hover:shadow-emerald-950/40 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <FaWhatsapp className="w-5 h-5 xl:w-6 xl:h-6 text-[#25D366] group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
              <span>WhatsApp Instant Inquiries</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
