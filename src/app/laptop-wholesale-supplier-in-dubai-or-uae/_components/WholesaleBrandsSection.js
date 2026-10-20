import React from 'react';
import Image from 'next/image';

import DellLogo from '@/Components/Images/Dell2.png';
import HPLogo from '@/Components/Images/HP2.png';
import LenovoLogo from '@/Components/Images/Lenovo.png';
import AppleLogo from '@/Components/Images/Apple.png';
import AsusLogo from '@/Components/Images/Asus2.png';
import AcerLogo from '@/Components/Images/Acer2.png';
import MsiLogo from '@/Components/Images/Msi.png';
import MicrosoftLogo from '@/Components/Images/Microsoft.png';

const brandLogos = [
  { name: 'Dell', logo: DellLogo },
  { name: 'HP', logo: HPLogo },
  { name: 'Lenovo', logo: LenovoLogo },
  { name: 'Apple', logo: AppleLogo },
  { name: 'ASUS', logo: AsusLogo },
  { name: 'Acer', logo: AcerLogo },
  { name: 'MSI', logo: MsiLogo },
  { name: 'Microsoft', logo: MicrosoftLogo },
];

export default function WholesaleBrandsSection() {
  return (
    <section className="py-14 sm:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#147A5F] mb-2 block font-montserrat">
            Authorized Distribution & Sourcing
          </span>
          <h2
            className="font-anton font-normal uppercase text-center text-2xl sm:text-3xl lg:text-[38px] tracking-[-0.035em] leading-[1.08] text-[#171717] mt-1"
            style={{
              fontFamily: "'Anton', Impact, sans-serif",
              fontWeight: 400,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              textTransform: 'uppercase',
            }}
          >
            Top Laptop Brands Distributed Across Dubai & UAE
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5 items-center justify-items-center w-full">
          {brandLogos.map((brand, i) => (
            <div
              key={i}
              className="w-full h-24 sm:h-28 lg:h-32 rounded-2xl flex items-center justify-center p-4 sm:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-emerald-600/30"
              style={{ backgroundColor: '#147A5F' }}
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} wholesale laptop supplier in UAE`}
                width={120}
                height={60}
                className="max-h-11 sm:max-h-12 lg:max-h-14 max-w-[90px] sm:max-w-[100px] lg:max-w-[110px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
