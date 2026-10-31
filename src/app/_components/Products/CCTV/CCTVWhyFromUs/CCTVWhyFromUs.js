import React from 'react';

const CCTVWhyFromUs = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-between mt-10 px-6 lg:px-20 py-10 bg-[#f1f1f1]' style={{
        background: 'linear-gradient(135deg, #1b2826 30%, #084032 100%)',
        padding: '60px 20px',
      }}>
      <div className="fromus-left w-full lg:w-[607px] text-white">
        <h2 className='text-[30px] lg:text-[45px] font-[600] leading-[35px] lg:leading-[60px] font-montserrat'>
          Why Buy <br /> <span className='text-[#ffd900] font-[900]'>CCTV Systems in Wholesale</span> From Us?
        </h2>
        <p className='text-[16px] mt-5 w-full lg:w-[425px] leading-[27px] font-montserrat text-gray-300'>
          Crown Excel is a leading supplier of professional video surveillance equipment in Dubai. We supply security contractors, system integrators, and businesses across the UAE:
        </p>
      </div>
      <div className="fromus flex flex-col gap-5 mt-8 lg:mt-0">
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[160px] bg-[#f1f1f1] rounded-[20px] flex flex-col text-left justify-center gap-2 hover:bg-yellow-300 transition px-6 py-5">
            <h3 className='text-left text-[20px] lg:text-[26px] font-[700] leading-[28px] font-montserrat'>High-Definition IP Security</h3>
            <p className='text-[14px] lg:text-[15px] leading-[22px] font-montserrat text-gray-700'>Access crystal-clear 2MP, 4MP, and 4K cameras with advanced night vision, wide dynamic range, and smart AI tracking.</p>
        </div>
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[160px] bg-[#f1f1f1] rounded-[20px] flex flex-col text-left justify-center gap-2 hover:bg-yellow-300 transition px-6 py-5">
            <h3 className='text-left text-[20px] lg:text-[26px] font-[700] leading-[28px] font-montserrat'>Official Brand Warranty</h3>
            <p className='text-[14px] lg:text-[15px] leading-[22px] font-montserrat text-gray-700'>All surveillance cameras, NVRs, and accessories are backed by direct manufacturer warranty and local technical assistance.</p>
        </div>
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[160px] bg-[#f1f1f1] rounded-[20px] flex flex-col text-left justify-center gap-2 hover:bg-yellow-300 transition px-6 py-5">
            <h3 className='text-left text-[20px] lg:text-[26px] font-[700] leading-[28px] font-montserrat'>Bulk Wholesale Pricing</h3>
            <p className='text-[14px] lg:text-[15px] leading-[22px] font-montserrat text-gray-700'>Get unmatched tiered distributor pricing on bulk orders for Hikvision and Dahua security equipment in Dubai and the UAE.</p>
        </div>
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[160px] bg-[#f1f1f1] rounded-[20px] flex flex-col text-left justify-center gap-2 hover:bg-yellow-300 transition px-6 py-5">
            <h3 className='text-left text-[20px] lg:text-[26px] font-[700] leading-[28px] font-montserrat'>Pre-Sales Technical Consultation</h3>
            <p className='text-[14px] lg:text-[15px] leading-[22px] font-montserrat text-gray-700'>Our certified CCTV engineers assist you in specifying cameras, lenses, storage calculations, and network requirements for any project.</p>
        </div>
      </div>
    </div>
  );
};

export default CCTVWhyFromUs;
