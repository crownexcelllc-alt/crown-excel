import React from 'react'

const WhyBuyKeyboardFromUs = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-between mt-10 px-20 py-10 bg-[#f1f1f1] ' style={{
        background: 'linear-gradient(135deg, #3d3f3f 30%, #232323 100%)',
        padding: '60px 15px 60px 15px'
      }}>
      <div className="fromus-left w-full lg:w-[607px]">
        <h1 className='text-[30px] lg:text-[45px] font-[600] leading-[35px] lg:leading-[60px] font-montserrat'>Why Buy <br /> <span className='text-[#0f7459] font-[900]'>Keyboards and Mice</span> From <br /> Us?</h1>
        <p className='text-[16px] mt-5 w-full lg:w-[425px] leading-[27px]'>Our keyboards and mice are carefully selected to <br /> cater to a variety of users, whether for professional <br /> productivity, gaming, or everyday tasks. Here’s why <br /> choosing keyboards and mice from Crown Excel is <br /> your best option:</p>
      </div>
      <div className="fromus flex flex-col gap-5 mt-5 lg:mt-0">
        <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5  lg:pt-6 lg:px-10 lg:pb-5" >
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>World&apos;s Best Brands</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>We source products from globally trusted brands, ensuring top-notch quality and innovative designs that provide a seamless experience.</p>
        </div>
         <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5 lg:pt-6 lg:px-10 lg:pb-5" >
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>Competitive Pricing</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>Get the best value for your money with our affordable yet high-performance keyboards and mice.</p>
        </div>
         <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5 lg:pt-6 lg:px-10 lg:pb-5" >
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>Warranty & Support</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>All our keyboards and mice come with a manufacturer’s warranty and our comprehensive after-sales support to ensure satisfaction.</p>
        </div>
         <div className="fromus-right-text text-black w-full h-auto lg:w-[607px] lg:h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition px-3 py-5 lg:pt-6 lg:px-10 lg:pb-5">
            <h1 className='text-left text-[24px] lg:text-[32px] font-[600] leading-[32px]'>Expert Guidance</h1>
            <p className='text-[14px] lg:text-[16px] leading-[20px] lg:leading-[27px]'>Our team offers expert recommendations to help you choose the right peripherals based on your requirements for comfort, performance, and design.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyBuyKeyboardFromUs
