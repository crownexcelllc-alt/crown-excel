import React from 'react'

const RMAFaq = () => {
  return (
    <div className='my-20 mt-20 mx-4 md:mx-0 lg:mx-0'>
      <h1 className='text-[26px] md:text-[34px] lg:text-[40px] leading-[24px] lg:leading-[40px] font-[600] text-[#0e5d48] text-center'>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
      <div className="faqs flex items-center justify-center flex-wrap gap-10  mt-5">
        <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[25px] font-[600] leading-[25px] p-[15px]'>What cloud providers do you support?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We work with AWS, Azure, and Google Cloud Platform and can help you choose the best fit based on requirements and budget.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[25px] font-[600] leading-[25px] p-[15px]' >How long does a cloud migration take?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Timeline depends on the complexity of your environment; typical migrations take from a few weeks to several months. We provide a detailed plan and phased approach to minimize downtime.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[25px] font-[600] leading-[25px] p-[15px] ' >Is my data secure in the cloud?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Yes. We implement encryption at rest and in transit, IAM best practices, monitoring, and logging to keep your data secure and compliant.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[25px] font-[600] leading-[25px] p-[15px]' >How do you control cloud costs?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We use cost governance, tagging, reserved instances, and monitoring to optimize cloud spend and avoid surprises.</p>
        </div>
      </div>
    </div>
  )
}

export default RMAFaq
