import React from 'react';
import icon1 from '../../../../../Components/Images/networkingbannericon.png';
import icon2 from '../../../../../Components/Images/networkingbannericon2.png';
import BannerImage from '../../../../../Components/Images/itconsultancy.png';
import Image from 'next/image';

const ITConsultancyBanner = () => {
  return (
    <div className="relative w-full h-[350px] lg:h-[500px] px-6 md:px-10 overflow-hidden flex items-center">
      {/* Background using next/image fill + object-cover to avoid stretching */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BannerImage}
          alt="IT Consultancy background"
          fill
          priority
          className="object-cover w-full h-full"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#031d26]/60 to-transparent" /> */}
      </div>

      {/* Left Text and Icons */}
      <div className="relative z-10 w-full max-w-4xl text-white font-montserrat py-8">
        <Image
          src={icon2}
          alt="icon2"
          width={40}
          height={40}
          className="absolute -top-10 left-6 md:left-0"
        />
        <h1 className="text-[30px] md:text-[76px] font-bold leading-[36px] md:leading-[76px]">
          IT Consultancy
        </h1>

        {/* New paragraph about IT consultancy */}
        <p className="mt-4 max-w-lg text-[14px] md:text-[18px] text-white">
          We align your IT strategy with business goals — optimizing systems,
          improving security, and delivering scalable solutions for measurable
          growth.
        </p>

        <Image
          src={icon1}
          alt="icon1"
          width={40}
          height={40}
          className="absolute -bottom-6 right-6"
        />
      </div>
    </div>
  );
};

export default ITConsultancyBanner;
