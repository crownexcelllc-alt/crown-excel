'use client';

import React from 'react';
import { Boxes, Store, Building2, CheckCircle2, ArrowRight, ShieldCheck, DollarSign, Clock, FileText } from 'lucide-react';

export default function LaptopSolutionsSection({ openGeneralInquiryModal }) {
  const segments = [
    {
      id: 'wholesale',
      title: 'Wholesale & Volume Traders',
      badge: 'High Volume / Export',
      icon: <Boxes className="w-7 h-7 text-[#147A5F]" />,
      summary:
        'Engineered for large-scale IT importers, cross-border traders, and GCC regional distributors requiring continuous pallet and container volumes.',
      features: [
        'Aggressive tiered discounts on 20, 50, 100+ unit consignments',
        'Direct factory allocations from Lenovo, HP, Dell, ASUS & Acer',
        'Customs-ready export packing & airway/sea cargo manifests',
        'Bonded warehouse transit across JAFZA, DAFZA & Dubai Cargo Village',
        'Multi-currency invoicing with verified certificate of origin (COO)',
      ],
      idealFor: 'Regional distributors, national wholesalers, export-import companies in GCC, Africa & CIS.',
    },
    {
      id: 'retailers',
      title: 'Retailers & Computer Resellers',
      badge: 'High Margins / Fast Turnaround',
      icon: <Store className="w-7 h-7 text-[#147A5F]" />,
      summary:
        'Designed to help brick-and-mortar computer shops, showroom owners, and e-commerce merchants maintain healthy profitability and fast stock turnover.',
      features: [
        'Flexible Low MOQs (from 5–10 units per order)',
        'Immediate same-day pickup from Dubai central showroom/warehouse',
        'High-demand consumer & gaming laptops that sell fast',
        'Price drop buffer protections on recurring wholesale accounts',
        'Official brand promotional materials and digital collateral',
      ],
      idealFor: 'Computer retail shops, electronics showroom chains, online market merchants, IT boutique vendors.',
    },
    {
      id: 'corporate',
      title: 'B2B Clients & Enterprise Procurement',
      badge: 'Turnkey IT Fleet Deployment',
      icon: <Building2 className="w-7 h-7 text-[#147A5F]" />,
      summary:
        'Comprehensive computing solutions for corporate offices, financial institutions, educational academies, and healthcare networks.',
      features: [
        'Standardized multi-tier laptop fleets (Executive, Staff & Technical)',
        'Custom OS staging, BIOS configurations, and corporate asset tagging',
        'Flexible credit terms (PDC, LC, 30-day corporate facility upon approval)',
        'Consolidated multi-branch delivery across all 7 UAE Emirates',
        'Post-procurement warranty facilitation and optional AMC maintenance',
      ],
      idealFor: 'Enterprises, banks, universities, hospitals, call centers, and expanding UAE startups.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-2 sm:mb-3 block font-montserrat">
            TAILORED PURCHASING &amp; COMMERCIAL SOLUTIONS
          </span>

          <h2
            className="font-anton uppercase text-3xl sm:text-4xl lg:text-[46px] tracking-[-0.035em] leading-[1.08] text-[#171717]"
            style={{ fontFamily: "'Anton', Impact, sans-serif" }}
          >
            <span className="block not-italic">Wholesale, Retail &amp;</span>
            <span className="block text-[#147A5F] italic mt-1">
              B2B Enterprise Solutions
            </span>
          </h2>

          <p className="font-jakarta text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-3xl mx-auto text-pretty">
            Crown Excel structures tailored commercial terms, volume discount matrices, and operational workflows matching the exact purchasing requirements of your business tier.
          </p>
        </div>

        {/* 3 Dedicated Segment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {segments.map((seg) => (
            <div
              key={seg.id}
              className="bg-[#FDFDFE] rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs hover:shadow-xl hover:border-[#147A5F]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Segment Top Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#147A5F] transition-all duration-300 [&>svg]:group-hover:text-white">
                    {seg.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 font-montserrat uppercase tracking-wide">
                    {seg.badge}
                  </span>
                </div>

                <h3 className="font-anton uppercase text-2xl text-[#171717] tracking-tight leading-tight mb-2">
                  {seg.title}
                </h3>

                <p className="font-jakarta text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {seg.summary}
                </p>

                {/* Features Checkpoints */}
                <div className="space-y-3 mb-6 font-jakarta">
                  {seg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#147A5F] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Segment Footer Note */}
              <div className="pt-4 border-t border-gray-100 font-jakarta">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  Target Audience:
                </span>
                <p className="text-xs text-gray-600 italic leading-relaxed">
                  {seg.idealFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Matrix Banner */}
        <div className="bg-gradient-to-br from-[#0c2e23] to-[#147A5F] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[#ffd900] text-xs font-bold uppercase tracking-wider font-montserrat block mb-2">
                FLEXIBLE PROCUREMENT ENGAGEMENTS
              </span>
              <h3 className="font-anton uppercase text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Need a Custom Corporate IT Procurement Plan?
              </h3>
              <p className="font-jakarta text-emerald-100 text-xs sm:text-sm md:text-base mt-3 leading-relaxed">
                Connect with our commercial sales desk to set up a credit application, review specialized batch quotations, or organize a customized pilot deployment for your company.
              </p>
            </div>

            <button
              type="button"
              onClick={openGeneralInquiryModal}
              className="px-8 py-4 rounded-xl bg-[#ffd900] hover:bg-[#e6c400] text-gray-950 font-bold text-sm sm:text-base font-jakarta shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex-shrink-0 transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Consult with B2B Sales
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
