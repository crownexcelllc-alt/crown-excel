import React from 'react'

const ServerFaq = () => {
  return (
    <div className='my-20 mt-20 mx-4 md:mx-0 lg:mx-0'>
      <h1 className='text-[26px] md:text-[34px] lg:text-[40px] leading-[24px] lg:leading-[40px] font-[600] text-[#0e5d48] text-center'>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
      <div className="faqs flex items-center justify-center flex-wrap gap-10  mt-5">
        <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]'>What types of servers do you support?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We provide support for physical servers, virtual machines (VMs), and cloud-based servers. Our expertise includes various platforms such as Windows Server, Linux, VMware, and cloud environments like AWS and Azure.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]' >Can you monitor servers 24/7?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Yes, our team offers round-the-clock server monitoring to ensure your servers remain secure and operational. We identify and address potential issues before they impact your business.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px] ' >What if my server crashes outside business hours?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We provide 24/7 support for critical server issues. Our technicians are always available to troubleshoot and resolve problems promptly, ensuring minimal downtime.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[255.6px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]' >How does Crown Excel ensure server security?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We implement advanced security measures, including firewalls, intrusion detection systems, regular updates, and vulnerability assessments. Our proactive approach protects your servers from cyber threats and unauthorized access.</p>
        </div>
      </div>
    </div>
  )
}

export default ServerFaq
