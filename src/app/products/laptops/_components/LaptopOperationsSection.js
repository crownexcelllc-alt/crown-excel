import React from 'react';
import { ShieldCheck, Truck, Headphones, CheckCircle2 } from 'lucide-react';
import { safeRender } from '@/lib/safe-html';

export default function LaptopOperationsSection({ cmsData }) {
  const fields = cmsData?.fields || cmsData || {};
  const headingVal = fields.heading;
  const paragraphVal = fields.paragraph;

  const defaultHeading = (
    <>
      <span className="block not-italic">Laptop Handling, Delivery &amp;</span>
      <span className="block text-[#147A5F] italic mt-1">
        Support Expertise
      </span>
    </>
  );

  let renderedHeading = headingVal;
  if (typeof renderedHeading === 'object' && renderedHeading?.value !== undefined) {
    renderedHeading = renderedHeading.value;
  }
  if (typeof renderedHeading === 'string' && renderedHeading.replace(/\s+/g, ' ').trim() === 'Laptop Handling, Delivery & Support Expertise') {
    renderedHeading = defaultHeading;
  }
  const operationalPillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#147A5F]" />,
      badge: safeRender(fields.pillar_1_badge, 'Step 1: Verification'),
      title: safeRender(fields.pillar_1_title, 'Laptop Handling & Quality Checks'),
      subtitle: safeRender(fields.pillar_1_subtitle, 'Zero Compromise on Factory Authenticity'),
      points: [
        {
          heading: safeRender(fields.pillar_1_pt_1_heading, 'Tamper-Evident Factory Seal Audit'),
          detail: safeRender(
            fields.pillar_1_pt_1_detail,
            'Every laptop master carton and individual packaging box is audited upon intake to guarantee untouched, 100% factory-sealed integrity.'
          ),
        },
        {
          heading: safeRender(fields.pillar_1_pt_2_heading, 'Serial Number & Barcode Serialization'),
          detail: safeRender(
            fields.pillar_1_pt_2_detail,
            'Every unit is scanned into our enterprise ERP with manufacturer serial tracking, preventing grey-market cross-contamination.'
          ),
        },
        {
          heading: safeRender(fields.pillar_1_pt_3_heading, 'ESD-Safe Climate-Controlled Storage'),
          detail: safeRender(
            fields.pillar_1_pt_3_detail,
            'Warehoused in humidity-regulated, anti-static facility in Dubai, protecting sensitive high-refresh screens and microprocessors.'
          ),
        },
      ],
    },
    {
      icon: <Truck className="w-8 h-8 text-[#147A5F]" />,
      badge: safeRender(fields.pillar_2_badge, 'Step 2: Fulfillment'),
      title: safeRender(fields.pillar_2_title, 'Order Processing & Express Delivery'),
      subtitle: safeRender(fields.pillar_2_subtitle, 'Fast Turnaround Across UAE & Regional Hubs'),
      points: [
        {
          heading: safeRender(fields.pillar_2_pt_1_heading, 'Same-Day Dispatch in Central UAE'),
          detail: safeRender(
            fields.pillar_2_pt_1_detail,
            'Orders confirmed before 1:00 PM are dispatched same-day via Crown Excel’s dedicated delivery fleet across Dubai, Sharjah & Ajman.'
          ),
        },
        {
          heading: safeRender(fields.pillar_2_pt_2_heading, 'Next-Day Delivery Across All Emirates'),
          detail: safeRender(
            fields.pillar_2_pt_2_detail,
            'Overnight ground fulfillment servicing Abu Dhabi, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain.'
          ),
        },
        {
          heading: safeRender(fields.pillar_2_pt_3_heading, 'Cross-Border GCC & Cargo Logistical Links'),
          detail: safeRender(
            fields.pillar_2_pt_3_detail,
            'Daily road and air cargo shipments to Saudi Arabia, Oman, Qatar, Bahrain, Kuwait, Africa, and Central Asia with full customs clearance support.'
          ),
        },
      ],
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#147A5F]" />,
      badge: safeRender(fields.pillar_3_badge, 'Step 3: Post-Sales'),
      title: safeRender(fields.pillar_3_title, 'Customer Support & Warranty Assistance'),
      subtitle: safeRender(fields.pillar_3_subtitle, 'Dedicated Partnership Beyond the Sale'),
      points: [
        {
          heading: safeRender(fields.pillar_3_pt_1_heading, 'Direct Manufacturer Warranty Liaison'),
          detail: safeRender(
            fields.pillar_3_pt_1_detail,
            'We coordinate authorized brand warranty assistance for Lenovo, HP, Dell, ASUS, and Acer, eliminating administrative friction for clients.'
          ),
        },
        {
          heading: safeRender(fields.pillar_3_pt_2_heading, 'Dead-On-Arrival (DOA) Rapid Protocol'),
          detail: safeRender(
            fields.pillar_3_pt_2_detail,
            'Expedited replacement procedures for any verified defective hardware on initial unboxing to protect business continuity.'
          ),
        },
        {
          heading: safeRender(fields.pillar_3_pt_3_heading, 'Dedicated B2B Account Representatives'),
          detail: safeRender(
            fields.pillar_3_pt_3_detail,
            'Direct phone, email, and WhatsApp line with a named logistics executive for stock reservations, invoices, and tracking updates.'
          ),
        },
      ],
    },
  ];

  return (
    <div className="relative w-full bg-[#FFFFFF] overflow-hidden">
      <section id="laptop-operations" className="relative w-full max-w-[1536px] mx-auto overflow-hidden bg-[#F8FAFC] py-12 sm:py-16 lg:py-18 xl:py-20 px-5 sm:px-8 md:px-[53px] lg:px-[53px] xl:px-16">
        <div className="relative z-10 w-full">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl xl:max-w-5xl mx-auto mb-10 sm:mb-12 xl:mb-14">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-2 sm:mb-2.5 block font-montserrat">
              {safeRender(fields.badge, "RELIABLE END-TO-END SUPPLY CHAIN EXECUTION")}
            </span>

            <h2
              className="font-anton uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] tracking-[-0.03em] leading-[1.08] text-[#171717]"
              style={{ fontFamily: "'Anton', Impact, sans-serif" }}
            >
              {safeRender(renderedHeading, defaultHeading) || 'Laptop Handling, Delivery & Support Expertise'}
            </h2>

            <p className="font-jakarta text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-2xl sm:max-w-3xl mx-auto font-normal text-pretty">
              {safeRender(paragraphVal, 'Wholesale IT procurement demands precision, integrity, and swift logistical delivery. Here is how Crown Excel safeguards your orders from dock intake to customer handoff.')}
            </p>
          </div>

          {/* 3 Process Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {operationalPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-[#147A5F]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Header Icon + Step Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#147A5F] transition-all duration-300 [&>svg]:group-hover:text-white">
                      {React.cloneElement(pillar.icon, { className: 'w-6 h-6 text-[#147A5F]' })}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 font-montserrat uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-anton uppercase text-xl sm:text-2xl text-[#171717] tracking-tight leading-tight mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-[#147A5F] font-jakarta block mb-5">
                    {pillar.subtitle}
                  </span>

                  {/* Points List */}
                  <div className="space-y-3 font-jakarta">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="p-3 rounded-xl bg-gray-50/70 border border-gray-100">
                        <h4 className="font-bold text-xs sm:text-sm text-gray-900 mb-0.5 flex items-center gap-1.5">
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
    </div>
  );
}
