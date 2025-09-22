'use client'
import React from 'react';
import icon1 from '../../../../../Components/Images/networkingbannericon.png';
import icon2 from '../../../../../Components/Images/networkingbannericon2.png';
// import BannerImage from '../../../../../Components/Images/networkingbanner.png';
// import BannerImage from '../../../../../Components/Images/networkingpic.png';
import BannerImage from '../../../../../Components/Images/networkingpic.webp';
import Image from 'next/image';

const RMABanner = () => {
  return (
    <div
      className="relative flex md:flex-row items-center justify-between w-[100%] h-[350px] lg:h-[500px] px-6 md:px-10 overflow-hidden"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Text and Icons */}
      <div className="relative z-10 w-full md:w-1/2 text-white font-montserrat">
        <Image
          src={icon2}
          alt="network icon"
          width={40}
          height={40}
          className="absolute -top-10 left-10 md:left-0"
        />
  <h1 className="text-[30px] md:text-[48px] font-bold leading-[30px] md:leading-[52px]">
          Networking <br className="block md:block" /> Solutions
        </h1>
        {/* <p className="mt-4 max-w-lg text-[14px] md:text-[18px] text-white">Design, deploy and secure reliable networks that scale with your business — LAN/WAN, wireless, structured cabling, and managed network services from Crown Excel.</p> */}

        {/* Additional short paragraph about networking offerings */}
        <p className="mt-3 max-w-lg text-[14px] md:text-[16px] text-white">
          Our networking team provides end-to-end services: network design,
          implementation, performance tuning, monitoring and 24/7 support to
          ensure high availability and secure connectivity for your organization.
        </p>
        {/* <Image
          src={icon1}
          alt="network icon 2"
          width={40}
          height={40}
          className="absolute -bottom-15 lg:-bottom-10 right-70 md:right-130 lg:right-220"
        /> */}
      </div>

    </div>
  );
};

export default RMABanner;
