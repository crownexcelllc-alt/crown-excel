'use client';

import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'; // ✅ Correct client-side motion import
import Link from 'next/link';

const AnimatedText = ({ text, delayStart = 0 }) => {
  return (
    <div className="flex flex-wrap">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delayStart + i * 0.03,
            duration: 0.4,
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-[#13745a] py-20 px-4 md:px-12 xl:px-32 sm:block lg:block md:hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="bg-[#e6eeff] text-green-900 px-4 py-1 font-montserrat rounded-full text-xs font-semibold tracking-wider mb-3 w-max shadow-sm">
              How We Add Value
            </p>
            <div className="flex flex-col font-montserrat items-center md:items-start heading text-2xl md:text-4xl font-extrabold leading-tight text-white text-center md:text-start">
              <AnimatedText text="We bring fresh prespectives and tailored " />
              <AnimatedText text="Services to meet your needs" />
            </div>
          </div>
          <Link href="/our-services">
            <button className="flex items-center justify-center gap-2 w-[150px] bg-white text-[#084032] font-semibold rounded-full px-6 py-3 shadow-lg hover:bg-[#e6eeff] transition">
              View All
              <FaArrowRight className="w-6 h-6 border-2 rounded-full p-1" />
            </button>
          </Link>
        </div>

        {/* Cards Section */}
        <div className="flex gap-2 lg:gap-10">
          {/* Hardware Services */}
          <div className="card bg-white text-black w-[350px] font-montserrat lg:w-[550px] py-[40px] px-[10px] lg:py-[50px] lg:px-[30px] text-center lg:text-start transition-transform duration-500 origin-bottom-left hover:-translate-x-4 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] animate-cardFadeIn" style={{ animationDelay: '0.1s' }}>
            <h1 className="font-semibold text-[16px] lg:text-[24px] font-montserrat">Cloud Computing</h1>
            <p className="mt-2 text-[10px] lg:text-[16px] font-montserrat">We offer expert cloud computing services, helping businesses seamlessly migrate legacy systems to the cloud with minimal disruption and a clear rollback strategy. Our cloud modernization solutions enhance application architecture, reduce IT costs, and boost business agility.</p>
          </div>

          {/* Software Services */}
          <div className="card bg-black text-white w-[350px] lg:w-[550px] py-[40px] px-[10px] lg:py-[50px] lg:px-[30px] text-center lg:text-start transition-transform duration-500 origin-center hover:-translate-y-2 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] animate-cardFadeIn" style={{ animationDelay: '0.3s' }}>
            <h1 className="font-semibold text-[16px] lg:text-[24px] font-montserrat">Software Solutions</h1>
            <p className="mt-2 text-[10px] lg:text-[16px] font-montserrat">We deliver custom software solutions designed to meet your unique business needs. From application development to system integration, our services enhance operational efficiency and align technology with your strategic goals.</p>
          </div>

          {/* IT Services */}
          <div className="card bg-[#0e4637] text-white w-[350px] lg:w-[550px] py-[40px] px-[10px] lg:py-[50px] lg:px-[30px] text-center lg:text-start transition-transform duration-500 origin-top-right hover:translate-x-4 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] animate-cardFadeIn" style={{ animationDelay: '0.5s' }}>
            <h1 className="font-semibold text-[16px] lg:text-[24px] font-montserrat">IT Infrastructure</h1>
            <p className="mt-2 text-[10px] lg:text-[16px] font-montserrat">Our comprehensive IT infrastructure management services include proactive monitoring, network optimization, and reliable technical support. We ensure smooth business operations and scalable infrastructure tailored to your growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
