import React from 'react';
import CCTVProductImg from '@/Components/Images/allinonephones3.png';
import Image from 'next/image';

const UltimateCCTV = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-auto px-1 mt-20'>
            <h2 className='text-[#147d61] text-[20px] md:text-[45px] lg:text-[45px] font-[700] font-montserrat text-center'>
                THE ULTIMATE SOLUTION FOR <br /> <span className='text-black bg-[#ffd900]' style={{ padding: '5px 15px' }}>CCTV & SURVEILLANCE SYSTEMS</span>
            </h2>
            <div className="heavycomputing-bottom flex flex-col items-center justify-center w-full h-auto mt-10 md:mt-20 lg:mt-10">
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50">
                    <div className="left-part text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h3 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>High-Definition Clarity & Night Vision</h3>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Safeguard your commercial properties, offices, and warehouses with industry-leading CCTV security cameras. Featuring 4K resolution, ultra-low-light night vision, smart motion detection, and wide-angle surveillance.</p>
                    </div>
                    <div className="right-part -mt-20 text-black bg-[#e9e9e9] rounded-[20px] p-[20px] lg:p-[32px]">
                        <h3 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>IP67 Weatherproof Durability</h3>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Engineered specifically to endure extreme desert heat, humidity, and outdoor dust in Dubai and across the UAE. Rugged metal housing guarantees 24/7 continuous operation in challenging environments.</p>
                    </div>
                </div>
                <div className="heavycomputing-bottom-divs my-20 md:my-10">
                    <Image alt='CCTV surveillance system kit' src={CCTVProductImg} width={622} height={326} className='lg:w-[622px] rounded-[30px] lg:h-[326px] md:w-[406px] md:h-[250px] object-contain bg-[#f3f4f6] p-4' priority />
                </div>
                <div className="heavycomputing-bottom-divs flex flex-col md:flex-row lg:flex-row items-center justify-between w-full h-auto lg:h-[400px] px-2 lg:px-5 gap-30 lg:gap-50 mt-0 md:mt-10 lg:mt-0">
                    <div className="right-part text-black bg-[#e9e9e9] rounded-[20px] p-[20px] lg:p-[32px]">
                        <h3 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Scalable NVR & Cloud Integration</h3>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>Easily expand your security infrastructure from standalone cameras to 32-channel enterprise NVR systems with remote cloud viewing, secure local backup, and encrypted mobile access.</p>
                    </div>
                    <div className="left-part -mt-20 text-white rounded-[20px] p-[20px] lg:p-[32px]" style={{ backgroundImage: 'linear-gradient(300deg, #084032 0%, #118264 60%)' }}>
                        <h3 className='text-[24px] lg:text-[28px] font-montserrat font-[600] leading-[25px] lg:leading-[33px]'>Wholesale Supply & SIRA-Compliant Tech</h3>
                        <p className='mt-4 text-[14px] lg:text-[16px] font-montserrat leading-[27px]'>We provide wholesale bulk pricing for security integrators, contractors, and businesses seeking approved, certified CCTV hardware with complete manufacturer guarantees.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UltimateCCTV;
