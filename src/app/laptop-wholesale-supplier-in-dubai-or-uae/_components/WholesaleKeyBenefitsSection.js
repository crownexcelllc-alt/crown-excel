import React from 'react';
import { ShieldCheck, Boxes, DollarSign, Truck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WholesaleKeyBenefitsSection({
  openGeneralInquiryModal,
  getWhatsAppUrl,
  handleWhatsAppRedirect,
}) {
  return (
    <section className="py-16 bg-white" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Curving green splash matching Screenshot 3 */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-1/2 bg-[#147A5F] rounded-tl-[160px] rounded-bl-[160px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Side Content */}
            <div className="lg:col-span-6">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-3 block font-montserrat">
                SECURE YOUR WHOLESALE DEAL FROM CROWNEXCEL
              </span>

              <h2
                className="font-anton font-normal uppercase text-2xl sm:text-3xl lg:text-[36px] tracking-[-0.035em] leading-[1.08] mb-4 text-left"
                style={{
                  fontFamily: "'Anton', Impact, sans-serif",
                  fontWeight: 400,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.08,
                  textTransform: 'uppercase',
                }}
              >
                <span className="text-[#147A5F] italic block text-xl sm:text-2xl lg:text-[26px] tracking-tight mb-1.5" style={{ fontStyle: 'italic' }}>
                  Key Benefits
                </span>
                <span className="text-[#171717] block not-italic">
                  Why Choose Us as Your Wholesale Supplier
                </span>
              </h2>

              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-inter mb-8 max-w-xl">
                Need dependable inventory for your business or retail store? Partner with Crown Excel for bulk commercial laptops, gaming rigs, and IT equipment with clear specifications and stable supply for UAE & GCC buyers.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={openGeneralInquiryModal}
                  className="bg-[#147A5F] hover:bg-[#0f604b] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow transition-all cursor-pointer uppercase tracking-wider hover:shadow-md"
                >
                  REQUEST STOCK LIST
                </button>

                <a
                  href={getWhatsAppUrl('Hello Crown Excel, I am inquiring about wholesale laptops and IT equipment.')}
                  onClick={(e) => handleWhatsAppRedirect(e, 'Hello Crown Excel, I am inquiring about wholesale laptops and IT equipment.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow transition-all cursor-pointer uppercase tracking-wider hover:shadow-md transform hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <FaWhatsapp className="w-4.5 h-4.5" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Right Side Key Benefits Display */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#147A5F]/10 text-[#147A5F] flex items-center justify-center mb-3 group-hover:bg-[#147A5F] group-hover:text-white transition-colors duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-montserrat font-bold text-gray-900 text-xs sm:text-[13.5px] leading-snug mb-1.5">
                    100% Factory-Sealed Stock
                  </h3>
                  <p className="font-inter text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                    Direct brand-authorized inventory with original serial numbers and full manufacturer warranties.
                  </p>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#147A5F]/10 text-[#147A5F] flex items-center justify-center mb-3 group-hover:bg-[#147A5F] group-hover:text-white transition-colors duration-300">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <h3 className="font-montserrat font-bold text-gray-900 text-xs sm:text-[13.5px] leading-snug mb-1.5">
                    Ready Dubai Central Inventory
                  </h3>
                  <p className="font-inter text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                    Immediate physical stock in Bur Dubai for on-site inspection, pickup, or rapid local fleet dispatch.
                  </p>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#147A5F]/10 text-[#147A5F] flex items-center justify-center mb-3 group-hover:bg-[#147A5F] group-hover:text-white transition-colors duration-300">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="font-montserrat font-bold text-gray-900 text-xs sm:text-[13.5px] leading-snug mb-1.5">
                    Tiered Reseller Wholesale Margins
                  </h3>
                  <p className="font-inter text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                    Competitive bulk pricing designed to protect margins for IT retailers, traders, and project contractors.
                  </p>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#147A5F]/10 text-[#147A5F] flex items-center justify-center mb-3 group-hover:bg-[#147A5F] group-hover:text-white transition-colors duration-300">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="font-montserrat font-bold text-gray-900 text-xs sm:text-[13.5px] leading-snug mb-1.5">
                    Express UAE Fleet & GCC Export
                  </h3>
                  <p className="font-inter text-gray-600 text-[11px] sm:text-xs leading-relaxed">
                    Door-to-door delivery across Dubai and UAE, with export packing and freight across Saudi Arabia and GCC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
