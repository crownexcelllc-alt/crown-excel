'use client';

import React from 'react';
import { ShieldCheck, Truck, Headphones, CheckCircle2 } from 'lucide-react';

export default function LaptopOperationsSection() {
  const operationalPillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#147A5F]" />,
      badge: 'Step 1: Verification',
      title: 'Laptop Handling & Quality Checks',
      subtitle: 'Zero Compromise on Factory Authenticity',
      points: [
        {
          heading: 'Tamper-Evident Factory Seal Audit',
          detail: 'Every laptop master carton and individual packaging box is audited upon intake to guarantee untouched, 100% factory-sealed integrity.',
        },
        {
          heading: 'Serial Number & Barcode Serialization',
          detail: 'Every unit is scanned into our enterprise ERP with manufacturer serial tracking, preventing grey-market cross-contamination.',
        },
        {
          heading: 'ESD-Safe Climate-Controlled Storage',
          detail: 'Warehoused in humidity-regulated, anti-static facility in Dubai, protecting sensitive high-refresh screens and microprocessors.',
        },
      ],
    },
    {
      icon: <Truck className="w-8 h-8 text-[#147A5F]" />,
      badge: 'Step 2: Fulfillment',
      title: 'Order Processing & Express Delivery',
      subtitle: 'Fast Turnaround Across UAE & Regional Hubs',
      points: [
        {
          heading: 'Same-Day Dispatch in Central UAE',
          detail: 'Orders confirmed before 1:00 PM are dispatched same-day via Crown Excel’s dedicated delivery fleet across Dubai, Sharjah & Ajman.',
        },
        {
          heading: 'Next-Day Delivery Across All Emirates',
          detail: 'Overnight ground fulfillment servicing Abu Dhabi, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain.',
        },
        {
          heading: 'Cross-Border GCC & Cargo Logistical Links',
          detail: 'Daily road and air cargo shipments to Saudi Arabia, Oman, Qatar, Bahrain, Kuwait, Africa, and Central Asia with full customs clearance support.',
        },
      ],
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#147A5F]" />,
      badge: 'Step 3: Post-Sales',
      title: 'Customer Support & Warranty Assistance',
      subtitle: 'Dedicated Partnership Beyond the Sale',
      points: [
        {
          heading: 'Direct Manufacturer Warranty Liaison',
          detail: 'We coordinate authorized brand warranty assistance for Lenovo, HP, Dell, ASUS, and Acer, eliminating administrative friction for clients.',
        },
        {
          heading: 'Dead-On-Arrival (DOA) Rapid Protocol',
          detail: 'Expedited replacement procedures for any verified defective hardware on initial unboxing to protect business continuity.',
        },
        {
          heading: 'Dedicated B2B Account Representatives',
          detail: 'Direct phone, email, and WhatsApp line with a named logistics executive for stock reservations, invoices, and tracking updates.',
        },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-2 sm:mb-3 block font-montserrat">
            RELIABLE END-TO-END SUPPLY CHAIN EXECUTION
          </span>

          <h2
            className="font-anton uppercase text-3xl sm:text-4xl lg:text-[46px] tracking-[-0.035em] leading-[1.08] text-[#171717]"
            style={{ fontFamily: "'Anton', Impact, sans-serif" }}
          >
            <span className="block not-italic">Laptop Handling, Delivery &amp;</span>
            <span className="block text-[#147A5F] italic mt-1">
              Support Expertise
            </span>
          </h2>

          <p className="font-jakarta text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-3xl mx-auto font-normal text-pretty">
            Wholesale IT procurement demands precision, integrity, and swift logistical delivery. Here is how Crown Excel safeguards your orders from dock intake to customer handoff.
          </p>
        </div>

        {/* 3 Process Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {operationalPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#147A5F]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Step Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#147A5F] transition-all duration-300 [&>svg]:group-hover:text-white">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-montserrat uppercase tracking-wider">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-anton uppercase text-2xl text-[#171717] tracking-tight leading-tight mb-1">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold text-[#147A5F] font-jakarta block mb-6">
                  {pillar.subtitle}
                </span>

                {/* Points List */}
                <div className="space-y-4 font-jakarta">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100">
                      <h4 className="font-bold text-xs sm:text-sm text-gray-900 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#147A5F] flex-shrink-0" />
                        <span>{pt.heading}</span>
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed pl-5">
                        {pt.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
