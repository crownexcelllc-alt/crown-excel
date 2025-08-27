import React from 'react';
import icon1 from '../../../../../Components/Images/networkingbannericon.png';
import icon2 from '../../../../../Components/Images/networkingbannericon2.png';
// import BannerImage from '../../../../../Components/Images/networkingbanner.png';
import BannerImage from '../../../../../Components/Images/itinfastructure.png';
import Image from 'next/image';

const ManagedITBanner = () => {
  return (
    <div
      className="relative flex md:flex-row items-center justify-between w-full h-[350px] lg:h-[500px] px-6 md:px-10 overflow-hidden"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >


      {/* Left Text and Icons */}
      {/* font-montserrat */}
  <div className="relative z-10 w-full md:w-1/2 text-white ">
        <Image
          src={icon2}
          alt="icon2"
          width={40}
          height={40}
          className="absolute -top-10 left-10 md:left-0"
        />
  <h1 className="text-[28px] md:text-[48px] lg:text-[60px] font-bold leading-[34px] md:leading-[52px] lg:leading-[64px]">
          IT Infrastructure <br className="block md:block" /> & Managed Services
        </h1>
        {/* <p className="mt-4 max-w-lg text-[14px] md:text-[18px] text-white">Design, build and manage resilient IT infrastructure — from server rooms and virtualization to structured cabling and disaster recovery.</p> */}

        {/* Additional short paragraph about managed IT */}
  <p className="mt-3 text-[14px] md:text-[16px] lg:text-[17px] max-w-lg text-white">
          Our managed IT services offer 24/7 monitoring, proactive maintenance,
          patching and performance tuning to keep your systems secure and
          available, helping reduce downtime and operational risk.
        </p>
        {/* <Image
          src={icon1}
          alt="icon1"
          width={40}
          height={40}
          className="absolute -bottom-15 lg:-bottom-10 right-70 md:right-130 lg:right-220"
        /> */}
      </div>

      {/* Right Side Background */}
      {/* <div
        className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${BannerImage.src})`,
        }}
      ></div> */}

  {/* Overlay Gradient (optional for glow effect) */}
  {/* <div className="absolute inset-0 bg-gradient-to-l from-[#031d26] via-[#031d26]/80 to-transparent z-[1]" /> */}

    </div>
  );
};

export default ManagedITBanner;
