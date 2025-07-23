import React from 'react'

const SoftwareFaq = () => {
  return (
    <div className='my-20 mt-20 mx-4 md:mx-0 lg:mx-0'>
      <h1 className='text-[26px] md:text-[34px] lg:text-[40px] leading-[24px] lg:leading-[40px] font-[600] text-[#0e5d48] text-center'>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>
      <div className="faqs flex items-center justify-center flex-wrap gap-10  mt-5">
        <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[281.2px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]'>What software does Crown Excel support under AMC?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>We support a wide range of software, including ERP, CRM, accounting systems, database management software, cloud applications, and custom business tools. Our plans are tailored to meet your specific requirements.</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[281.2px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]' >How often are updates and maintenance performed?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Maintenance frequency depends on your business needs. Typically, we provide monthly or quarterly updates and regular performance checks to ensure your software stays secure and efficient.
</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[281.2px]  rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px] ' >What happens if a software issue occurs outside regular maintenance?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Our team is available 24/7 to provide immediate support for any software-related issues. We prioritize quick resolutions to minimize downtime and keep your business running smoothly.
</p>
        </div>
         <div className="faqs-divs flex flex-col text-black w-full md:w-[422px] bg-[#eaeaea] lg:w-[555px] lg:h-[281.2px] rounded-b-[20px]" style={{boxShadow: '0px 6px 5px 0px rgba(0, 0, 0, 0.5)'}}>
            <h1 className='bg-[#ffd900] text-[20px] lg:text-[25px] font-[600] leading-[28.6px] p-[15px]' >Why should I choose Crown Excel for Software AMC?</h1>
            <p className='p-[29px] bg-[#eaeaea] text-[16px] leading-[27.2px] rounded-b-[20px]'>Crown Excel offers customized AMC plans, experienced software specialists, and a proven track record of delivering reliable maintenance services. Our proactive approach ensures your software remains secure, up-to-date, and optimized for long-term success.
</p>
        </div>
      </div>
    </div>
  )
}

export default SoftwareFaq
