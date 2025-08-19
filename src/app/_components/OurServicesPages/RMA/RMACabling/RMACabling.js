import React from 'react'

const NetworkingCabling = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0'>
      <h1 className='font-montserrat text-[24px] lg:text-[42px] font-[600] leading-[24px] lg:leading-[42px] text-black text-center'>CLOUD CONNECTIVITY & SECURITY</h1>
      <div className="cabling-parts flex flex-col md:flex-row lg:flex-row items-cetner justify-around mt-10  gap-5 lg:gap-0">
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full lg:w-[542.5px] lg:h-[582.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[22px] leading-[24px] lg:text-[34px] lg:leading-[34px] font-[600] font-montserrat'>RELIABLE CLOUD CONNECTIVITY</h1>
            <p className='text-center my-5 text-[16px] leading-[27.2px] font-montserrat'>Ensure low-latency, high-throughput connections between your on-prem systems and cloud workloads. We design secure networking patterns, hybrid connectivity, VPNs, and dedicated links to provide consistent performance.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Build hybrid & direct connect solutions</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full lg:w-[542.5px] lg:h-[582.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[34px] lg:leading-[34px] font-[600] font-montserrat'>SECURE NETWORK ARCHITECTURE</h1>
            <p className='text-center my-5 text-[16px] leading-[27.2px] font-montserrat'>Protect data in transit and enforce network segmentation using cloud-native firewalls, micro-segmentation, and secure access gateways.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Design secure cloud networks</button>
        </div>
      </div>
    </div>
  )
}

export default NetworkingCabling
