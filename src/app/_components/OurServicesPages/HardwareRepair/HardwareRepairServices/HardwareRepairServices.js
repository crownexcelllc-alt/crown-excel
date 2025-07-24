import React from 'react'

const HardwareRepairServices = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0'>
      <h1 className='font-montserrat text-[24px] lg:text-[42px] font-[600] leading-[24px] lg:leading-[42px] text-black text-center'>Services Include</h1>
      <div className="cabling-parts flex flex-col md:flex-row md:flex-wrap lg:flex-row items-cetner justify-around mt-10  gap-5 lg:gap-0">
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[549px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[22px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Desktop and Laptop Repairs</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We handle all types of issues with desktops and laptops, including hardware replacements, screen repairs, battery replacements, and performance optimization. Our technicians ensure your devices are fully restored.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[549px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Server and Networking Equipment Repairs</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Our team specializes in repairing critical IT hardware such as servers, switches, and routers. From resolving connectivity issues to fixing hardware failures, we keep your network running smoothly.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[549px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Printer and Peripheral Repairs</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We provide expert repair services for printers, scanners, and other peripherals. Whether it’s a mechanical fault or connectivity problem, we ensure these devices are back in operation quickly.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[549px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Hardware Upgrades and Replacement Parts</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>If your hardware requires an upgrade or replacement, we provide genuine parts and seamless installation. From increasing memory to replacing hard drives, we enhance the performance of your devices.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
      </div>
      {/* Yellow Glowing Circle */}
          {/* <div className="hidden md:block absolute w-[150px] h-[150px] bg-yellow-400 rounded-full blur-2xl opacity-100 left-[-60px] bottom-[60px] z-10" /> */}
    </div>
  )
}

export default HardwareRepairServices
