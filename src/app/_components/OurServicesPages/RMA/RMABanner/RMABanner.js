import React from 'react';
import icon1 from '../../../../../Components/Images/networkingbannericon.png';
import icon2 from '../../../../../Components/Images/networkingbannericon2.png';
// import BannerImage from '../../../../../Components/Images/networkingbanner.png';
import BannerImage from '../../../../../Components/Images/clouds (1).png';
import Image from 'next/image';

const RMABanner = () => {
  return (
   <div
  className="relative bg-[#031d26] flex flex- md:flex-row items-center justify-between w-full h-[350px] lg:h-[550px] px-6 md:px-10 overflow-hidden"
  style={{
    backgroundImage: `url(${BannerImage.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: 'contain', // or use 'auto 100%' for full height only
  }}
>

      
      {/* Left Text and Icons */}
      <div className="relative z-10 w-full full text-white font-montserrat">
        <Image
          src={icon2}
          alt="cloud icon"
          width={40}
          height={40}
          className="absolute -top-10 left-10 md:left-0"
        />
        <h1 className="text-[30px] md:text-[76px] font-bold leading-[30px] md:leading-[76px]">
          Cloud <br className="block md:block" /> Computing<br className="block md:block" /> Solutions
        </h1>
        <p className="mt-4 max-w-lg text-[14px] md:text-[18px] text-white">Modernize your infrastructure, secure your data, and scale on demand with Crown Excel’s cloud expertise.</p>
        <Image
          src={icon1}
          alt="icon1"
          width={40}
          height={40}
          className="absolute -bottom-15 lg:-bottom-10 right-70 md:right-130 lg:right-220"
        />
      </div>

    </div>
  );
};

export default RMABanner;
