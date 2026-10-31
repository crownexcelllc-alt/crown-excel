import React from 'react';

const PhonesWhyFromUs = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-between mt-10 px-6 lg:px-20 py-10 bg-[#f1f1f1]' style={{
        background: 'linear-gradient(135deg, #3d3f3f 30%, #232323 100%)',
        padding: '60px 20px',
      }}>
      <div className="fromus-left w-full lg:w-[607px] text-white">
        <h2 className='text-[30px] lg:text-[45px] font-[600] leading-[35px] lg:leading-[60px] font-montserrat'>
          Why Buy <br /> <span className='text-[#ffd900] font-[900]'>Phones in Wholesale</span> From Us?
        </h2>
        <p className='text-[16px] mt-5 w-full lg:w-[425px] leading-[27px] font-montserrat text-gray-300'>
          Crown Excel is Dubai’s reputable supplier for wholesale smartphones and enterprise mobile communications. Here is why corporations, retailers, and traders partner with us:
        </p>
      </div>
      <div className="fromus flex flex-col gap-5 mt-8 lg:mt-0">
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[160px] bg-[#f1f1f1] rounded-[20px] flex flex-col text-left justify-center gap-2 hover:bg-yellow-300 transition px-6 py-5">
            <h3 className='text-left text-[20px] lg:text-[26px] font-[700] leading-[28px] font-montserrat'>100% Original & Brand New</h3>
            <p className='text-[14px] lg:text-[15px] leading-[22px] font-montserrat text-gray-700'>All mobile phones and accessories are factory sealed, genuine, and sourced directly from official global supply chains.</p>
        </div>
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[160px] bg-[#f1f1f1] rounded-[20px] flex flex-col text-left justify-center gap-2 hover:bg-yellow-300 transition px-6 py-5">
            <h3 className='text-left text-[20px] lg:text-[26px] font-[700] leading-[28px] font-montserrat'>Aggressive Wholesale Pricing</h3>
            <p className='text-[14px] lg:text-[15px] leading-[22px] font-montserrat text-gray-700'>Maximize your profit margins with highly competitive wholesale tier rates on top-demand Apple and Samsung smartphones.</p>
        </div>
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[160px] bg-[#f1f1f1] rounded-[20px] flex flex-col text-left justify-center gap-2 hover:bg-yellow-300 transition px-6 py-5">
            <h3 className='text-left text-[20px] lg:text-[26px] font-[700] leading-[28px] font-montserrat'>Local Warranty & Support</h3>
            <p className='text-[14px] lg:text-[15px] leading-[22px] font-montserrat text-gray-700'>Enjoy peace of mind with manufacturer-backed warranties and dedicated account managers to handle post-sales support.</p>
        </div>
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[160px] bg-[#f1f1f1] rounded-[20px] flex flex-col text-left justify-center gap-2 hover:bg-yellow-300 transition px-6 py-5">
            <h3 className='text-left text-[20px] lg:text-[26px] font-[700] leading-[28px] font-montserrat'>Fast UAE & GCC Fulfillment</h3>
            <p className='text-[14px] lg:text-[15px] leading-[22px] font-montserrat text-gray-700'>Rapid dispatch from our Dubai warehouse with same-day local UAE deliveries and efficient international GCC export logistics.</p>
        </div>
      </div>
    </div>
  );
};

export default PhonesWhyFromUs;
