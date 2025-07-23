import React from 'react'

const ManagedITFaq = () => {
  return (
    <div className='my-20 mt-20 mx-4 md:mx-0 lg:mx-0'>
      <h1 className='text-[26px] md:text-[34px] lg:text-[40px] leading-[24px] lg:leading-[40px] font-[600] text-[#0e5d48] text-center'>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
      <div className="faqs flex items-center justify-center flex-wrap gap-10  mt-5">
        <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px]'>What are Managed IT Services, and how can Crown Excel help my business?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Managed IT Services involve outsourcing your IT operations to a specialized team like Crown Excel. We handle everything from system monitoring and maintenance to cybersecurity and cloud solutions. This allows your business to operate seamlessly while reducing downtime and IT-related stress.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px]' >How does Crown Excel ensure the security of my IT systems?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>At Crown Excel, we implement advanced security measures, including firewalls, threat detection, data encryption, and regular security audits. Our proactive approach ensures your IT infrastructure remains protected from cyber threats, minimizing risks to your sensitive data.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px] ' >Can Crown Excel’s Managed IT Services scale with my growing business?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Yes, our Managed IT Services are designed to scale with your business. Whether you’re adding users, expanding locations, or adopting new technologies, we provide flexible IT solutions to meet your evolving needs without compromising quality or performance.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px]' >What kind of support can I expect from Crown Excel’s IT team?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Our dedicated team offers 24/7 support, including real-time monitoring, troubleshooting, and issue resolution. Whether you need assistance with system upgrades, IT emergencies, or strategic planning, we are here to provide prompt and reliable service.</p>
        </div>
      </div>
    </div>
  )
}

export default ManagedITFaq
