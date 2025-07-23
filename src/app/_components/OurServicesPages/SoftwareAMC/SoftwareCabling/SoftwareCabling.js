import React from 'react'

const SoftwareCabling = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0'>
      <h1 className='font-montserrat text-[24px] md:text-[40px] lg:text-[50px] font-[700] leading-[24px] md:leading-[40px] lg:leading-[50px] text-black text-center'>CABLING & NETWORKING SECURITY</h1>
      <div className="cabling-parts flex flex-col md:flex-row md:flex-wrap lg:flex-row items-cetner justify-around mt-10  gap-5 lg:gap-0">
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[522.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[20px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Regular Software Updates and Patches</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We ensure your software remains secure and up-to-date by applying regular patches, updates, and hotfixes. This prevents vulnerabilities and enhances the performance of your applications.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[522.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[20px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Troubleshooting and Bug Fixes</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Our team provides 24/7 support for software troubleshooting and bug resolution, minimizing downtime and keeping your business processes uninterrupted.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[522.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[20px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Performance Optimization</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Through regular performance checks, we identify and resolve inefficiencies in your software to ensure it runs at optimal speed and functionality, enhancing productivity across your business.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[522.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[20px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Integration and Compatibility Management</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We ensure that all software components work together seamlessly, resolving any integration issues and managing compatibility across different platforms, devices, and systems.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
      </div>
      {/* Yellow Glowing Circle */}
          {/* <div className="hidden md:block absolute w-[150px] h-[150px] bg-yellow-400 rounded-full blur-2xl opacity-100 left-[-60px] bottom-[60px] z-10" /> */}
    </div>
  )
}

export default SoftwareCabling
