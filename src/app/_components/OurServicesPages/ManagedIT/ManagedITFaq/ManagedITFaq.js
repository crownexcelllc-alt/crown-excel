import React from 'react'

const ManagedITFaq = () => {
  return (
    <div className='my-20 mt-20 mx-4 md:mx-0 lg:mx-0'>
      <h1 className='text-[26px] md:text-[34px] lg:text-[40px] leading-[24px] lg:leading-[40px] font-[600] text-[#0e5d48] text-center'>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
      <div className="faqs flex items-center justify-center flex-wrap gap-10  mt-5">
        <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px]'>What IT infrastructure services does Crown Excel provide?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We provide server & storage design, virtualization, structured cabling, backup & disaster recovery, network security and 24/7 monitoring — end-to-end infrastructure lifecycle services.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px]' >How do you protect my infrastructure from attacks or failures?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We use defense-in-depth: segmentation, firewall policies, IDS/IPS, regular patching, backups, and DR plans. Monitoring detects anomalies early so we can remediate issues before they escalate.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px] ' >Can you scale infrastructure when my business grows?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Absolutely — we plan for growth with modular architectures, capacity planning and cloud/hybrid options so you can scale compute, storage and network resources smoothly.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] lg:w-[555px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[25px] p-[15px]' >What SLAs and response times do you offer?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We offer tailored SLAs depending on your needs: options include 24/7 monitoring with 1-hour critical incident response, routine maintenance windows, and scheduled reviews to ensure uptime targets are met.</p>
        </div>
      </div>
    </div>
  )
}

export default ManagedITFaq
