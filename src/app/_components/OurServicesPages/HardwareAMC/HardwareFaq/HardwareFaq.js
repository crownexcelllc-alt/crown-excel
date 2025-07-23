import React from 'react'

const HardwareFaq = () => {
  return (
    <div className='my-20 mt-20 mx-4 md:mx-0 lg:mx-0'>
      <h1 className='text-[26px] md:text-[34px] lg:text-[40px] leading-[24px] lg:leading-[40px] font-[600] text-[#0e5d48] text-center'>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
      <div className="faqs flex items-center justify-center flex-wrap gap-10  mt-5">
        <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]'>What does Hardware AMC cover?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Our Hardware AMC services cover preventive maintenance, troubleshooting, repairs, spare parts replacement, and performance optimization for all your IT hardware, including servers, desktops, laptops, printers, and networking equipment.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]' >How often is maintenance performed under AMC?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Maintenance schedules are customized based on your business needs. Typically, we conduct monthly or quarterly check-ups to ensure your hardware stays in optimal working condition.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px] ' >What if hardware breaks down outside of regular maintenance?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>In the event of a hardware failure, our team provides prompt on-site support to troubleshoot and repair the issue. We prioritize minimizing downtime and ensuring your business operations continue smoothly.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]' >Why should I choose Crown Excel for Hardware AMC?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Crown Excel offers tailored AMC plans, experienced technicians, and fast response times. Our focus is on reducing downtime, extending the life of your hardware, and providing cost-effective solutions that add value to your business.</p>
        </div>
      </div>
    </div>
  )
}

export default HardwareFaq
