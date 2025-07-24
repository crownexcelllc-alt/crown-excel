import React from 'react'

const HardwareRepairFaq = () => {
  return (
    <div className='my-20 mt-20 mx-4 md:mx-0 lg:mx-0'>
      <h1 className='text-[26px] md:text-[34px] lg:text-[40px] leading-[24px] lg:leading-[40px] font-[600] text-[#0e5d48] text-center'>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
      <div className="faqs flex items-center justify-center flex-wrap gap-10  mt-5">
        <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]'>What types of hardware do you repair?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We repair desktops, laptops, servers, networking equipment (switches, routers, etc.), printers, scanners, and other IT peripherals. Our services cover both business and personal IT devices.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]' >How quickly can you complete repairs?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Our technicians prioritize fast repairs, and most issues are resolved within 24 to 48 hours. However, timelines may vary depending on the complexity of the problem and availability of spare parts.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px] ' >Do you provide on-site repair services?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Yes, we offer on-site repair services for businesses to ensure convenience and minimize downtime. For minor issues, we also provide remote support to resolve problems efficiently.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]' >Why should I choose Crown Excel for hardware repair?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Crown Excel offers comprehensive diagnostics, high-quality spare parts, quick turnaround times, and a commitment to customer satisfaction. With our expertise and reliable services, we ensure your hardware is repaired to perform like new.</p>
        </div>
      </div>
    </div>
  )
}

export default HardwareRepairFaq
