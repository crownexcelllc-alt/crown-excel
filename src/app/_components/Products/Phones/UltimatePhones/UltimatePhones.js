import React from 'react';
import ComputingImage from '@/Components/Images/ultimatephones.png';
import Image from 'next/image';

const UltimatePhones = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto px-1 mt-20'>
            <h2 className='text-[#147d61] text-[20px] md:text-[45px] lg:text-[45px] font-[700] font-montserrat text-center'>
                THE ULTIMATE SOLUTION FOR <br /> <span className='text-black bg-[#ffd900]' style={{ padding: '5px 15px' }}>SMARTPHONES & BUSINESS PHONES</span>
            </h2>
            <div className="heavycomputing-bottom flex flex-col items-center justify-center w-full h-auto mt-10 md:mt-20 lg:mt-10">
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50">
                    <div className="left-part text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h3 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Enterprise Reliability & Speed</h3>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Empower your workforce with top-tier smartphones and corporate communication devices. Featuring the latest iOS and Android operating systems, enterprise encryption, and dependable battery life to ensure seamless productivity anywhere.</p>
                    </div>
                    <div className="right-part -mt-20 text-black bg-[#e9e9e9] rounded-[20px] p-[20px] lg:p-[32px]">
                        <h3 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Global Compatibility</h3>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>All our phones are factory unlocked with multi-band 5G and international carrier compatibility. Ideal for international businesses, UAE corporations, and retail traders requiring versatile, high-demand devices.</p>
                    </div>
                </div>
                <div className="heavycomputing-bottom-divs my-20 md:my-10">
                    <Image alt='Phones solutions' src={ComputingImage} width={622} height={326} className='lg:w-[622px] rounded-[30px] lg:h-[326px] md:w-[406px] md:h-[250px]' priority />
                </div>
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50 mt-0 md:mt-10 lg:mt-0">
                    <div className="right-part text-black bg-[#e9e9e9] rounded-[20px] p-[20px] lg:p-[32px]">
                        <h3 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Wholesale Volume & Bulk Supply</h3>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Crown Excel specializes in wholesale smartphone distribution with competitive pricing on large volumes. Whether purchasing for corporate fleets or retail resale, we guarantee reliable inventory and fast fulfillment.</p>
                    </div>
                    <div className="left-part -mt-20 text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h3 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Authenticity & Warranty Support</h3>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Every device is 100% brand new, authentic, and supported with official manufacturer warranty. Our technical team ensures hassle-free procurement and dedicated support for every client.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UltimatePhones;
