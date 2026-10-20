import React from 'react';
import Image from 'next/image';
import { FileCheck2, Globe2, CheckCircle2, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const worldwideServiceMarkets = [
  { code: 'sa', name: 'Saudi Arabia', region: 'GCC Hub', hub: 'Riyadh, Jeddah, Dammam', freight: 'Daily Cargo' },
  { code: 'ae', name: 'United Arab Emirates', region: 'Domestic Hub', hub: 'Dubai, Abu Dhabi, Sharjah', freight: 'Same-Day Fleet' },
  { code: 'kw', name: 'Kuwait', region: 'GCC Hub', hub: 'Kuwait City, Hawalli', freight: 'Daily Cargo' },
  { code: 'qa', name: 'Qatar', region: 'GCC Hub', hub: 'Doha, Al Rayyan', freight: 'Daily Cargo' },
  { code: 'bh', name: 'Bahrain', region: 'GCC Hub', hub: 'Manama, Riffa', freight: 'Daily Cargo' },
  { code: 'om', name: 'Oman', region: 'GCC Hub', hub: 'Muscat, Sohar, Salalah', freight: 'Daily Cargo' },
  { code: 'iq', name: 'Iraq', region: 'Middle East', hub: 'Baghdad, Erbil, Basra', freight: 'Daily Cargo' },
  { code: 'in', name: 'India', region: 'South Asia', hub: 'Mumbai, Delhi, Bengaluru', freight: 'Daily Cargo' },
  { code: 'pk', name: 'Pakistan', region: 'South Asia', hub: 'Karachi, Lahore, Islamabad', freight: 'Daily Cargo' },
  { code: 'az', name: 'Azerbaijan', region: 'Central Asia', hub: 'Baku, Ganja, Sumqayit', freight: 'Daily Cargo' },
  { code: 'uz', name: 'Uzbekistan', region: 'Central Asia', hub: 'Tashkent, Samarkand', freight: 'Daily Cargo' },
  { code: 'kz', name: 'Kazakhstan', region: 'Central Asia', hub: 'Almaty, Astana, Shymkent', freight: 'Daily Cargo' },
  { code: 'eg', name: 'Egypt', region: 'North Africa', hub: 'Cairo, Alexandria', freight: 'Daily Cargo' },
  { code: 'ng', name: 'Nigeria', region: 'West Africa', hub: 'Lagos, Abuja, Kano', freight: 'Daily Cargo' },
  { code: 'ke', name: 'Kenya', region: 'East Africa', hub: 'Nairobi, Mombasa', freight: 'Daily Cargo' },
  { code: 'tz', name: 'Tanzania', region: 'East Africa', hub: 'Dar es Salaam, Arusha', freight: 'Daily Cargo' },
];

export default function WholesaleWorldwideAreasSection({
  openGeneralInquiryModal,
  getWhatsAppUrl,
  handleWhatsAppRedirect,
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F4F8F6] to-white border-t border-gray-200/80 relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] bg-emerald-100/35 blur-[120px] rounded-full pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-3 block font-montserrat">
            We Delivered To The Listed Countries & Beyond
          </span>

          <h2
            className="font-anton font-normal uppercase text-center text-3xl sm:text-4xl lg:text-[46px] tracking-[-0.035em] leading-[1.05]"
            style={{
              fontFamily: "'Anton', Impact, sans-serif",
              fontWeight: 400,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
            }}
          >
            <span className="text-[#171717] block not-italic">
              Worldwide Service Areas
            </span>
            <span
              className="text-[#147A5F] italic block mt-1 sm:mt-1.5"
              style={{ fontStyle: 'italic' }}
            >
              16 Most Active International Wholesale Markets
            </span>
          </h2>

          <p className="text-gray-600 font-jakarta text-xs sm:text-sm md:text-[15.5px] leading-relaxed mt-4 max-w-3xl mx-auto font-normal">
            We ship wholesale computer equipment to every corner of the world. Below are our 16 most active markets with continuous orders. Bulk export available to all destinations with VAT &amp; export invoice and full logistics support.
          </p>
        </div>

        {/* 16 Active Markets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4.5 lg:gap-5 items-stretch mb-12 sm:mb-14">
          {worldwideServiceMarkets.map((country) => (
            <div
              key={country.name}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-300 hover:border-[#147A5F] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Flag Alongside Country Name (No Badges) */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-8 h-5.5 rounded-[4px] overflow-hidden border border-gray-200/90 shadow-2xs shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={`/flags/${country.code}.svg`}
                      alt={`${country.name} flag`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <h3
                    className="font-montserrat font-bold text-gray-900 text-[14.5px] sm:text-[15px] leading-snug group-hover:text-[#147A5F] transition-colors"
                    title={country.name}
                  >
                    {country.name}
                  </h3>
                </div>

                {/* Delivery Hub Cities */}
                <p className="text-[12.5px] text-gray-500 font-inter leading-relaxed mb-3.5" title={country.hub}>
                  {country.hub}
                </p>
              </div>

              {/* Footer: Freight Route Badge (#084032) */}
              <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-end">
                <span
                  className="text-white font-medium text-[10.5px] bg-[#084032] px-2.5 py-1 rounded border border-[#084032] truncate min-w-0 text-right"
                  title={country.freight}
                >
                  {country.freight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Logistics & Export Documentation Card - Specific #084032 Container */}
        <div className="bg-[#084032] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-emerald-900/60 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center mb-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 border border-white/10 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-white text-sm sm:text-[15px] mb-1">
                  VAT &amp; Export Invoicing
                </h4>
                <p className="font-inter text-emerald-100/80 text-xs sm:text-[13px] leading-relaxed">
                  Formal commercial invoices, packing lists, and customs documentation tailored for fast cross-border logistics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 border border-white/10 flex items-center justify-center shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-white text-sm sm:text-[15px] mb-1">
                  Full Logistics Support
                </h4>
                <p className="font-inter text-emerald-100/80 text-xs sm:text-[13px] leading-relaxed">
                  Direct air freight and sea cargo coordinated from Dubai international hubs to your regional ports and warehouses.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 border border-white/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-white text-sm sm:text-[15px] mb-1">
                  Authentic Verified Hardware
                </h4>
                <p className="font-inter text-emerald-100/80 text-xs sm:text-[13px] leading-relaxed">
                  100% factory-sealed laptops, workstations, and consumer IT equipment with manufacturer serial number verification.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 relative z-10">
            <div className="text-left">
              <p className="text-white font-montserrat font-bold text-sm sm:text-[15px]">
                Need Bulk Computer Equipment Delivered To Your Country?
              </p>
              <p className="text-emerald-200/80 font-inter text-xs sm:text-[13px]">
                Our international trade desk responds within hours with wholesale FOB/CIF pricing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openGeneralInquiryModal}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-emerald-50 text-[#084032] text-xs sm:text-sm font-bold font-montserrat uppercase tracking-wider rounded-xl shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Export Quote</span>
              </button>

              <a
                href={getWhatsAppUrl('Hello Crown Excel, I am inquiring about international wholesale computer equipment export to my country.')}
                onClick={(e) => handleWhatsAppRedirect(e, 'Hello Crown Excel, I am inquiring about international wholesale computer equipment export to my country.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold font-montserrat uppercase tracking-wider rounded-xl shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Export Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
