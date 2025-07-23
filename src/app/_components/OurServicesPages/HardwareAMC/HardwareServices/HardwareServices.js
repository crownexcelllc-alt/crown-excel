import React from 'react'

const HardwareServices = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0'>
      <h1 className='font-montserrat text-[24px] lg:text-[42px] font-[600] leading-[24px] lg:leading-[42px] text-black text-center'>Services Include</h1>
      <div className="cabling-parts flex flex-col md:flex-row md:flex-wrap lg:flex-row items-cetner justify-around mt-10  gap-5 lg:gap-0">
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[539px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[22px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Preventive Maintenance</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We conduct regular preventive maintenance to identify and address potential issues before they become major problems. This includes hardware inspections, performance optimizations, and system cleaning to ensure optimal functioning.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[539px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Troubleshooting and Repairs</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Our team is equipped to handle all kinds of hardware issues, from minor malfunctions to critical breakdowns. We ensure timely troubleshooting and repairs, minimizing the impact on your business operations.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[539px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Hardware Installation and Upgrades</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We assist in setting up new hardware and upgrading existing equipment to meet your evolving business needs. Our experts ensure a smooth and efficient transition, avoiding any disruption to your workflows.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[539px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Spare Parts Replacement</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We provide genuine spare parts and replacements as part of our AMC services, ensuring your hardware continues to perform reliably. With Crown Excel, you get access to quality components without delays.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
      </div>
      {/* Yellow Glowing Circle */}
          {/* <div className="hidden md:block absolute w-[150px] h-[150px] bg-yellow-400 rounded-full blur-2xl opacity-100 left-[-60px] bottom-[60px] z-10" /> */}
    </div>
  )
}

export default HardwareServices
