'use client'
import React from 'react'
import Background from '@/Components/Images/company-history.jpg'

const CompanyHistoryBanner = () => {
  return (
    <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[430px] overflow-hidden rounded-b-[70px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right'
        }}
      />
      <div className="absolute inset-0 banner-gradient" />
      <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#147D61]/30 blur-[120px]" />
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-6xl px-5 sm:px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-jakarta text-white text-[28px] sm:text-[36px] lg:text-[46px] font-[700] leading-[1.1] mb-3 sm:mb-4">
              Company History
            </h1>
            <p className="font-montserrat text-white/85 text-[13.5px] sm:text-[15px] md:text-[16px] leading-[1.55] max-w-[520px]">
{`              Founded in 2009, Crown Excel began as a small family-run business with big dreams. What started as a modest venture has grown into one of the UAE's most trusted wholesale and retail providers of tech products and services, all while staying true to our founding values.`}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#147D61] via-[#32a987] to-transparent opacity-70" />
      <style jsx>{`
        .banner-gradient {
          background: linear-gradient(
            to right,
            rgba(17,24,20,0.93) 0%,
            rgba(17,24,20,0.90) 12%,
            rgba(17,24,20,0.85) 22%,
            rgba(20,125,97,0.70) 34%,
            rgba(20,125,97,0.55) 44%,
            rgba(20,125,97,0.35) 52%,
            rgba(20,125,97,0.18) 58%,
            rgba(20,125,97,0.05) 62%,
            rgba(20,125,97,0) 100%
          );
        }
        @media (max-width:640px) {
          .banner-gradient {
            background: linear-gradient(
              to right,
              rgba(17,24,20,0.97) 0%,
              rgba(17,24,20,0.94) 22%,
              rgba(17,24,20,0.90) 36%,
              rgba(24,90,72,0.70) 48%,
              rgba(24,110,85,0.42) 58%,
              rgba(24,110,85,0.20) 66%,
              rgba(24,110,85,0.08) 72%,
              rgba(24,110,85,0) 82%
            );
          }
        }
      `}</style>
    </section>
  )
}

export default CompanyHistoryBanner
