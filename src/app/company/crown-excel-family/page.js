'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import FamilyPhoto from '@/Components/Images/familyphoto.png';

// Import Value Components
import ValueTrust from './components/ValueTrust';
import ValueCompanyFirst from './components/ValueCompanyFirst';
import ValueExcellence from './components/ValueExcellence';
import ValueInternalMatters from './components/ValueInternalMatters';
import ValueContinuousGrowth from './components/ValueContinuousGrowth';
import ValueSustainability from './components/ValueSustainability';

// Import Member Components
import MemberIlyas from './components/MemberIlyas';
import MemberWais from './components/MemberWais';
import MemberSaqib from './components/MemberSaqib';
import MemberVishal from './components/MemberVishal';
import MemberKhurram from './components/MemberKhurram';
import MemberJunaidS from './components/MemberJunaidS';
import MemberTarun from './components/MemberTarun';
import MemberIbad from './components/MemberIbad';
import MemberLavina from './components/MemberLavina';
import MemberJubair from './components/MemberJubair';
import MemberFazal from './components/MemberFazal';
import MemberAslam from './components/MemberAslam';
import MemberSajan from './components/MemberSajan';
import MemberSaeed from './components/MemberSaeed';
import MemberShammry from './components/MemberShammry';
import MemberNabiha from './components/MemberNabiha';
import MemberFarooq from './components/MemberFarooq';
import MemberAbdullah from './components/MemberAbdullah';
import MemberAshiq from './components/MemberAshiq';
import MemberNadeem from './components/MemberNadeem';
import MemberRauf from './components/MemberRauf';
import MemberJunaidA from './components/MemberJunaidA';
import MemberBrian from './components/MemberBrian';
import MemberFidelis from './components/MemberFidelis';

function CrownExcelFamily() {
  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[280px] sm:h-[180px] md:h-[260px] lg:h-[540px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${FamilyPhoto.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right'
          }}
        />
        <div className="absolute" />
        <div className="pointer-events-none absolute -left-24 w-[340px] h-[340px]" />
        <div className="relative h-full flex items-center justify-start">
          <div className="w-full max-w-5xl px-6 sm:px-8 md:px-12">
            <div className="max-w-2xl ml-0 text-left">
              <h1 className="font-montserrat text-white text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-tight mb-4 drop-shadow-lg tracking-tight text-left">
                CROWN EXCEL <span className="block text-[#61ce70]">FAMILY</span>
              </h1>
              <p className="font-muli text-white/90 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed max-w-xl mb-2 text-left">
                More than just a company, we are a family united by values,<br className="hidden sm:block" /> driven by excellence, and committed to serving our customers with integrity and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Values Section */}
          <div className="mb-16 mt-3">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">
                Our Values
              </h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueTrust />
              <ValueCompanyFirst />
              <ValueExcellence />
              <ValueInternalMatters />
              <ValueContinuousGrowth />
              <ValueSustainability />
            </div>
          </div>

          {/* Family Members Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">
                Our Family
              </h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 font-muli max-w-2xl mx-auto">
                Our team represents the heart and soul of our family business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MemberIlyas />
              <MemberWais />
              <MemberSaqib />
              <MemberVishal />
              <MemberKhurram />
              <MemberJunaidS />
              <MemberTarun />
              <MemberIbad />
              <MemberLavina />
              <MemberJubair />
              <MemberFazal />
              <MemberAslam />
              <MemberSajan />
              <MemberSaeed />
              <MemberShammry />
              <MemberNabiha />
              <MemberFarooq />
              <MemberAbdullah />
              <MemberAshiq />
              <MemberNadeem />
              <MemberRauf />
              <MemberJunaidA />
              <MemberBrian />
              <MemberFidelis />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-10">
            <div className="bg-gradient-to-r from-[#084032] to-[#16806b] rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                Join Our Family
              </h2>
              <p className="text-xl font-muli mb-8 opacity-90">
                Be part of a family that values excellence, integrity, and community service
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/company/career">
                  <button className="bg-[#61ce70] text-white px-8 py-3 rounded-lg font-montserrat font-medium hover:bg-[#4ade80] transition-colors">
                    Join Our Family
                  </button>
                </Link>
                <Link href="/company/career">
                  <button className="bg-transparent text-white border-2 border-white px-8 py-2 rounded-lg font-montserrat font-medium hover:bg-white hover:text-[#16806b] transition-colors">
                   Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrownExcelFamily;
