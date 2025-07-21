import React from 'react'

const PhonesWhyFromUs = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-between mt-10 px-20 py-10 bg-[#f1f1f1] ' style={{
        background: 'linear-gradient(135deg, #3d3f3f 30%, #232323 100%)',
        padding: '60px 15px 60px 15px'
      }}>
      <div className="fromus-left w-full lg:w-[607px]">
        <h1 className='text-[30px] lg:text-[45px] font-[600] leading-[35px] lg:leading-[60px] font-montserrat'>Why Buy <br /> <span className='text-[#0f7459] font-[900]'>Phones and CCTV Systems</span> From Us?</h1>
        <p className='text-[16px] mt-5 w-full lg:w-[425px] leading-[27px]'>Our phones and CCTV systems are designed to <br /> enhance communication and security, ensuring <br /> seamless integration for homes, businesses, and <br /> organizations. Here’s why Crown Excel is your <br /> trusted provider:</p>
      </div>
      <div className="fromus flex flex-col gap-5 mt-5 lg:mt-0">
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5  lg:pt-6 lg:px-10 lg:pb-5" >
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>World&apos;s Best Brands</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>We offer phones and CCTV systems from globally recognized brands, ensuring superior quality, reliability, and cutting-edge technology for all your communication and security needs.</p>
        </div>
         <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5 lg:pt-6 lg:px-10 lg:pb-5" >
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>Competitive Pricing</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>Get the best deals on premium phones and CCTV solutions, providing unmatched performance and security without exceeding your budget.</p>
        </div>
         <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5 lg:pt-6 lg:px-10 lg:pb-5" >
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>Warranty & Support</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>All our products come with a manufacturer-backed warranty, along with full technical support to keep your devices operational and secure.</p>
        </div>
         <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5 lg:pt-6 lg:px-10 lg:pb-5">
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>Expert Guidance</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>Our team of experts helps you select the right phones and CCTV systems tailored to your specific requirements, ensuring robust performance and peace of mind.</p>
        </div>
      </div>
    </div>
  )
}

export default PhonesWhyFromUs
