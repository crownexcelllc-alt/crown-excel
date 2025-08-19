import React from 'react'

const NetworkingCabling = () => {
  return (
    <div className='mt-12 relative overflow-hidden lg:h-auto px-5 lg:px-0 font-montserrat'>
      <h1 className='font-montserrat text-[24px] lg:text-[42px] font-[600] leading-[24px] lg:leading-[42px] text-black text-center'>CLOUD CONNECTIVITY & SECURITY</h1>
      <div className="cabling-parts flex flex-col md:flex-row lg:flex-row items-center justify-center mt-6 gap-6 lg:gap-6">
        <div className="cabling-left flex flex-col items-center justify-center rounded-[20px] p-5 w-full lg:w-[460px] lg:min-h-[360px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[20px] lg:text-[26px] leading-[24px] lg:leading-[30px] font-[700] text-white'>RELIABLE CLOUD CONNECTIVITY</h1>
            <div className='text-center my-3 text-[15px] leading-[22px] text-white/90 max-w-[36rem]'>
              Ensure low-latency, high-throughput connections between on-prem systems and cloud workloads. We design hybrid connectivity (VPNs, Direct Connect), SD-WAN optimizations, and dedicated private links to deliver consistent performance and predictable costs.
            </div>
            <p className='text-center text-sm text-white/80 mb-3 px-4'>Monitoring, failover planning, and bandwidth shaping are included to maintain SLAs for mission-critical services.</p>
            <button className='bg-[#fdd900] rounded-[20px] text-[14px] px-[18px] py-[10px] text-black font-semibold mt-3'>Build hybrid & direct connect solutions</button>
        </div>

        <div className="cabling-right flex flex-col items-center justify-center rounded-[20px] p-5 w-full lg:w-[460px] lg:min-h-[360px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[20px] lg:text-[26px] leading-[24px] lg:leading-[30px] font-[700] text-white'>SECURE NETWORK ARCHITECTURE</h1>
            <div className='text-center my-3 text-[15px] leading-[22px] text-white/90 max-w-[36rem]'>
              Protect data in transit and enforce network segmentation using cloud-native firewalls, micro-segmentation, and Zero Trust access controls. We implement identity-aware proxies and private endpoint strategies to reduce attack surface.
            </div>
            <p className='text-center text-sm text-white/80 mb-3 px-4'>Our designs include automated policy enforcement, encrypted backhauls, and continuous vulnerability scanning to keep your cloud network resilient.</p>
            <button className='bg-[#fdd900] rounded-[20px] text-[14px] px-[18px] py-[10px] text-black font-semibold mt-3'>Design secure cloud networks</button>
        </div>
      </div>
    </div>
  )
}

export default NetworkingCabling
