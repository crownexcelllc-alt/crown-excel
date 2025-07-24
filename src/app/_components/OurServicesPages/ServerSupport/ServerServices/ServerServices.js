import React from 'react'

const ServerServices = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0'>
      <h1 className='font-montserrat text-[24px] lg:text-[42px] font-[600] leading-[24px] lg:leading-[42px] text-black text-center'>Services Include</h1>
      <div className="cabling-parts flex flex-col md:flex-row md:flex-wrap lg:flex-row items-cetner justify-around mt-10  gap-5 lg:gap-0">
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[549px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[22px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Server Installation and Configuration</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We set up and configure new servers to meet your specific business requirements. From hardware installation to operating system deployment, we ensure your server environment is fully optimized for your workloads.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[549px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Server Monitoring and Performance Optimization</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Our 24/7 monitoring services identify performance bottlenecks, potential failures, and security vulnerabilities. By optimizing server resources, we enhance speed, reliability, and overall efficiency.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[549px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Troubleshooting and Repairs</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We provide fast and effective troubleshooting for server issues, including hardware failures, software malfunctions, and network connectivity problems. Our team ensures minimal downtime and quick recovery.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[549px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Backup and Disaster Recovery Solutions</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Protect your data and ensure business continuity with our server backup and disaster recovery services. We implement robust solutions to safeguard your data and enable swift recovery in case of any disruptions.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
      </div>
      {/* Yellow Glowing Circle */}
          {/* <div className="hidden md:block absolute w-[150px] h-[150px] bg-yellow-400 rounded-full blur-2xl opacity-100 left-[-60px] bottom-[60px] z-10" /> */}
    </div>
  )
}

export default ServerServices
