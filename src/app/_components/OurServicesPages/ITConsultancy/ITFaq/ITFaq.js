import React from 'react'

const ITFaq = () => {
  return (
    <div className='my-20 mt-20 mx-4 md:mx-0 lg:mx-0'>
      <h1 className='text-[26px] md:text-[34px] lg:text-[40px] leading-[24px] lg:leading-[40px] font-[600] text-[#0e5d48] text-center'>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
      <div className="faqs flex items-center justify-center flex-wrap gap-10  mt-5">
        <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] bg-[#eaeaea] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px]'>What does Crown Excel’s IT consultancy process involve?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Our process begins with a detailed assessment of your current IT infrastructure and business objectives. We then create a customized strategy, implement the required solutions, and provide ongoing support to ensure long-term success.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] bg-[#eaeaea] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px]' >Can Crown Excel help with transitioning to cloud-based systems?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Yes, we specialize in cloud strategy and migration. From assessing your readiness to implementing the right platform, we ensure a seamless and secure transition to cloud-based solutions.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] bg-[#eaeaea] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px] ' >How does IT consultancy benefit my business?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>IT consultancy provides expert guidance to optimize your IT systems, reduce costs, improve efficiency, and align technology with your business goals. This helps you stay competitive and prepared for future challenges.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] bg-[#eaeaea] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px]' >Why should I choose Crown Excel for IT consultancy?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Crown Excel offers tailored solutions, experienced consultants, and a proven track record of success. We prioritize your business goals and deliver innovative strategies to ensure maximum value from your IT investments.</p>
        </div>
      </div>
    </div>
  )
}

export default ITFaq
