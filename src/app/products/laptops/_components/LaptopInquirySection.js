'use client';

import React, { useState } from 'react';
import { Send, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function LaptopInquirySection({
  openGeneralInquiryModal,
  getWhatsAppUrl,
  handleWhatsAppRedirect,
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for wholesale laptop pricing?',
      a: 'Our standard wholesale pricing tier starts at 5 to 10 units for mixed commercial models. For volume pallet or container consignments (50 to 500+ units), we provide customized volume tier discounts tailored to your procurement schedule.',
    },
    {
      q: 'Are all laptops factory-sealed with authentic manufacturer warranties?',
      a: 'Yes. 100% of our laptop inventory is brand-new, factory-sealed in original manufacturer packaging with valid brand warranty. We do not sell grey-market or unverified stock. Serial numbers are logged upon dock intake.',
    },
    {
      q: 'How fast can Crown Excel deliver laptops across Dubai and the UAE?',
      a: 'Orders confirmed before 1:00 PM are dispatched same-day within Dubai, Sharjah, and Ajman. Deliveries to Abu Dhabi, Al Ain, Ras Al Khaimah, and Fujairah are completed next business day via our insured logistics fleet.',
    },
    {
      q: 'Do you support international export to Saudi Arabia and other GCC countries?',
      a: 'Yes. We provide comprehensive export services including daily road and air cargo dispatch to Saudi Arabia (Riyadh, Jeddah, Dammam), Oman, Qatar, Bahrain, Kuwait, and African markets with complete customs documentation, COO, and export packing.',
    },
    {
      q: 'What payment terms are available for corporate and reseller accounts?',
      a: 'We accept wire transfers (AED/USD), corporate cheques (PDC), company credit cards, and cash on delivery for established clients. Formal corporate credit facilities (30-day billing) are available for verified businesses subject to credit assessment.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main High-Impact CTA Banner */}
        <div className="bg-gradient-to-br from-[#0c2a20] via-[#103e30] to-[#0a231b] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden mb-16 sm:mb-20">
          {/* Subtle Ambient Lighting */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#ffd900]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="text-[#ffd900] text-xs sm:text-sm font-extrabold uppercase tracking-wider font-montserrat block mb-3">
              START YOUR WHOLESALE PARTNERSHIP TODAY
            </span>

            <h2
              className="font-anton uppercase text-3xl sm:text-5xl lg:text-[56px] tracking-tight leading-[1.05] mb-4 text-white"
              style={{ fontFamily: "'Anton', Impact, sans-serif" }}
            >
              Ready to Order or Request <br className="hidden sm:inline" />
              <span className="text-[#ffd900] italic">Wholesale Laptop Pricing?</span>
            </h2>

            <p className="font-jakarta text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-light">
              Contact our sales desk now to check real-time stock availability, request official quotation manifests, or discuss customized fleet configurations. We respond within 2 business hours.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 font-jakarta">
              <button
                type="button"
                onClick={openGeneralInquiryModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#ffd900] hover:bg-[#e6c400] text-gray-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Send className="w-4 h-4 text-gray-950" />
                <span>Submit Inquiry Form</span>
              </button>

              <a
                href={getWhatsAppUrl('Hello Crown Excel, I would like to request wholesale laptop availability and the latest price sheet.')}
                onClick={(e) =>
                  handleWhatsAppRedirect(
                    e,
                    'Hello Crown Excel, I would like to request wholesale laptop availability and the latest price sheet.'
                  )
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                <span>Chat on WhatsApp (+971 50 503 3860)</span>
              </a>
            </div>

            {/* Fast Response Perks */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 pt-8 border-t border-emerald-800/40 text-xs text-emerald-200 font-jakarta">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffd900]" /> Quotes in 2 Hours
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffd900]" /> Full VAT Invoices
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffd900]" /> Bonded Export Ready
              </span>
            </div>
          </div>
        </div>



        {/* Wholesale FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#147A5F] font-montserrat block mb-2">
              GOT QUESTIONS?
            </span>
            <h3 className="font-anton uppercase text-2xl sm:text-3xl text-gray-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3 font-jakarta">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-gray-900 hover:text-[#147A5F] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#147A5F] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
