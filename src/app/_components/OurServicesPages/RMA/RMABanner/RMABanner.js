import React from 'react';
import icon1 from '../../../../../Components/Images/networkingbannericon.png';
import icon2 from '../../../../../Components/Images/networkingbannericon2.png';
import BannerImage from '../../../../../Components/Images/clouds1.png';
import Image from 'next/image';

const RMABanner = () => {
  return (
    <div className="relative w-full h-[350px] lg:h-[500px] px-6 md:px-10 overflow-hidden flex items-center">
      {/* Background as next/image fill - prevents stretching and keeps aspect ratio (object-cover) */}
      <Image
        src={BannerImage}
        alt="Cloud background"
        fill
        priority
        className="object-cover w-full h-full"
      />

      {/* Optional overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0b2540]/50 to-transparent" /> */}

      {/* Left Text and Icons */}
      <div className="relative z-10 w-full max-w-4xl text-white font-montserrat py-8">
        <Image
          src={icon2}
          alt="cloud icon"
          width={40}
          height={40}
          className="absolute -top-6 left-6"
        />
        <h1 className="text-[28px] md:text-[48px] lg:text-[76px] font-bold leading-[34px] md:leading-[52px] lg:leading-[76px] drop-shadow-lg">
          Cloud <br className="block md:block" /> Computing<br className="block md:block" /> Solutions
        </h1>
        <p className="mt-4 max-w-lg text-[14px] md:text-[16px] lg:text-[18px] text-white">
          Modernize your infrastructure, secure your data, and scale on demand with Crown Excel’s cloud expertise.
        </p>

        {/* Small slogan
        <div className="mt-6 text-[16px] md:text-[20px] font-semibold text-[#16CA9A]">
          Empower your business with secure, reliable, and scalable cloud solutions.
        </div> */}

        {/* <Image
          src={icon1}
          alt="decorative icon"
          width={40}
          height={40}
          className="absolute -bottom-6 right-6"
        /> */}
      </div>
    </div>
  );
};

export default RMABanner;
