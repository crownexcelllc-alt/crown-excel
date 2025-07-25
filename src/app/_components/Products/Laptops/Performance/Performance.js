import React from 'react'
import Background from '../../../../../Components/Images/PerformanceBackground.png'
const Performance = () => {
  return (
    <div
      className="w-full h-[800px] md:h-[450px] lg:h-[600px] mt-10 font-montserrat"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className='text-center text-[26px] lg:text-[42px] leading-[35px] lg:leading-[55px] text-black font-[700] '>POWER, PORTABILITY AND <br className='lg:block hidden'/> <span className='bg-[#ffd900] text-[#147d61]'>PERFOR</span>MANCE IN ONE <span className='bg-[#ffd900]'>LAPTOP</span></h1>
      <div className="texts-area flex flex-col items-center justify-center gap-5 lg:gap-10 mt-10 lg:mt-20 px-3 lg:px-0">
        <div className="top-texts flex flex-col md:flex-row lg:flex-row gap-5 lg:gap-0  items-center justify-between w-full">
          <div className="text-area-1 bg-[#f1f1f1] rounded-[20px] text-black w-full lg:w-[582px] lg:h-[175px] flex flex-col items-center justify-center text-center px-2 py-[24px] lg:py-[24px] lg:px-[40px]">
            <h1 className='text-[25px] font-[600] text-center mb-3'>Dell Laptops</h1>
            <p className=' text-[16px] leading-[27px] font-montserrat'>Designed for durability and performance with business-oriented features suitable for professionals and enterprises.</p>
          </div>
          <div className="text-area-1 text-center bg-[#f1f1f1] rounded-[20px] text-black w-full lg:w-[582px] lg:h-[175px] flex flex-col px-2 py-[24px] lg:py-[24px] lg:px-[40px]" >
            <h1 className='text-[25px] font-[600] text-center mb-3'>HP Laptops</h1>
            <p className='text-[16px] leading-[27px] font-montserrat'>Designed to give a balance between performance, design, and innovation, HP laptops can be apt for both business and personal uses.</p>
          </div>
        </div>
        <div className="bottom-te">
          <div className="text-area-1 text-center bg-[#f1f1f1] rounded-[20px] text-black w-full lg:w-[582px] lg:h-[175px] flex flex-col px-2 py-[24px] lg:py-[24px] lg:px-[40px]" >
            <h1 className='text-[25px] font-[600] text-center mb-3'>Lenovo Laptops</h1>
            <p className='text-[16px] leading-[27px] font-montserrat'>Durable and long-lasting, with extended battery life. Ideal for business persons and students.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Performance
