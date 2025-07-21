import React from 'react'

const AccessoriesWhyFromUs = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-between mt-10 px-20 py-10 bg-[#f1f1f1] ' style={{
        background: 'linear-gradient(135deg, #3d3f3f 30%, #232323 100%)',
        padding: '60px 15px 60px 15px'
      }}>
      <div className="fromus-left w-full lg:w-[607px]">
        <h1 className='text-[30px] lg:text-[45px] font-[600] leading-[35px] lg:leading-[60px] font-montserrat'>Why Buy <br /> <span className='text-[#0f7459] font-[900]'>Accessories</span> From Us?</h1>
        <p className='text-[16px] mt-5 w-full lg:w-[425px] leading-[27px]'>Our accessories are specifically curated to enhance <br/> your devices, ensuring seamless integration for <br/> users like professionals, students, or gamers. Here’s <br/> why choosing accessories from Crown Excel is your <br/> best decision:</p>
      </div>
      <div className="fromus flex flex-col gap-5 mt-5 lg:mt-0">
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5  lg:pt-6 lg:px-10 lg:pb-5" >
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>World&apos;s Best Brands</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>We bring you trusted names worldwide, providing high-quality accessories that are both reliable and efficient, giving you peace of mind.</p>
        </div>
         <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5 lg:pt-6 lg:px-10 lg:pb-5" >
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>Competitive Pricing</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>Get the best deals on premium accessories without compromising on performance or durability.</p>
        </div>
         <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5 lg:pt-6 lg:px-10 lg:pb-5" >
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>Warranty & Support</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>All our accessories come with a manufacturer’s warranty, and we provide full support to ensure your devices remain operational and well-maintained.</p>
        </div>
         <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5 lg:pt-6 lg:px-10 lg:pb-5">
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>Expert Guidance</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>Our team helps you select the right accessories tailored to your specific requirements, offering expert recommendations for functionality, design, and value.</p>
        </div>
      </div>
    </div>
  )
}

export default AccessoriesWhyFromUs
