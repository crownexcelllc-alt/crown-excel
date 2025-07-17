import React from 'react'

const WhyFromUs = () => {
  return (
    <div className='flex items-center justify-between mt-10 px-20 py-10 bg-[#f1f1f1] ' style={{
        background: 'linear-gradient(135deg, #3d3f3f 30%, #232323 100%)',
        padding: '60px 15px 60px 15px'
      }}>
      <div className="fromus-left w-[607px]">
        <h1 className='text-[45px] font-[600] leading-[60px] font-montserrat'>Why Buy <br /> <span className='text-[#0f7459] font-[900]'>LAPTOPS</span> From <br /> Us?</h1>
        <p className='text-[16px] w-[425px] leading-[27px]'>Our laptop products are specifically tailored to fit the <br /> variety of types of users, such as corporate clientele, <br /> students, or even gamers. And here’s why buying <br /> laptops from Crown Excel is your best option:</p>
      </div>
      <div className="fromus flex flex-col gap-5">
        <div className="fromus-right-text text-black w-[607px] h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition" style={{ padding: '24px 40px 20px 40px' }}>
            <h1 className='text-left text-[32px] font-[600] leading-[32px]'>World&apos;s Best Brands</h1>
            <p className='text-[16px] leading-[27px]'>The greatest trusted names worldwide in crafting high-quality laptops for sure gives us and our clients peace of mind knowing that Crown Excel can be relied on for its products.</p>
        </div>
         <div className="fromus-right-text text-black w-[607px] h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition" style={{ padding: '24px 40px 20px 40px' }}>
            <h1 className='text-left text-[32px] font-[600] leading-[32px]'>Competitive Pricing</h1>
            <p className='text-[16px] leading-[27px]'>Get the best deals on top-class laptops without compromise on performance or features.</p>
        </div>
         <div className="fromus-right-text text-black w-[607px] h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition" style={{ padding: '24px 40px 20px 40px' }}>
            <h1 className='text-left text-[32px] font-[600] leading-[32px]'>Warranty & Support</h1>
            <p className='text-[16px] leading-[27px]'>All our Laptops come with manufacturer warranty & we give you full support for after-sales so as to ensure your device is working properly.</p>
        </div>
         <div className="fromus-right-text text-black w-[607px] h-[173px] bg-[#f1f1f1] rounded-[20px] flex flex-col  text-left justify-center gap-3 hover:bg-yellow-300 transition" style={{ padding: '24px 40px 20px 40px' }}>
            <h1 className='text-left text-[32px] font-[600] leading-[32px]'>Expert Guidance</h1>
            <p className='text-[16px] leading-[27px]'>Our team helps you choose the right laptop based on your specific needs, providing tailored recommendations for performance, price, and features.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyFromUs
