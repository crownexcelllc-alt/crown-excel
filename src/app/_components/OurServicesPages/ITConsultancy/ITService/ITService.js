import React from 'react'

const ITService = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0 font-montserrat'>
  <h1 className='text-[24px] lg:text-[42px] font-[600] leading-[24px] lg:leading-[42px] text-black text-center'>Our consultancy services</h1>
  <div className="cabling-parts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
    <div className="cabling-left flex flex-col items-center text-center justify-between rounded-[24px] p-8 w-full min-h-[320px] lg:min-h-[340px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
      <h1 className='text-[22px] leading-[26px] lg:text-[28px] font-[700] text-white'>Infrastructure assessment & optimization</h1>
      <p className='my-4 text-[16px] leading-[26px] text-white'>Comprehensive reviews that uncover risks, inefficiencies and upgrade opportunities. We provide a prioritized remediation roadmap with quick wins and long-term improvements to increase performance and reduce TCO.</p>
      <button className='mt-4 bg-[#fdd900] rounded-[30px] text-[15px] px-6 py-3 text-black hover:shadow-md'>Request assessment</button>
    </div>

    <div className="cabling-left flex flex-col items-center text-center justify-between rounded-[24px] p-8 w-full min-h-[320px] lg:min-h-[340px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
      <h1 className='text-[22px] leading-[26px] lg:text-[28px] font-[700] text-white'>Digital transformation strategy</h1>
      <p className='my-4 text-[16px] leading-[26px] text-white'>Roadmaps and program plans that combine business priorities with pragmatic technology choices. We help you sequence work to minimize disruption and deliver measurable business value faster.</p>
      <button className='mt-4 bg-[#fdd900] rounded-[30px] text-[15px] px-6 py-3 text-black hover:shadow-md'>Start strategy</button>
    </div>

    <div className="cabling-left flex flex-col items-center text-center justify-between rounded-[24px] p-8 w-full min-h-[320px] lg:min-h-[340px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
      <h1 className='text-[22px] leading-[26px] lg:text-[28px] font-[700] text-white'>Cloud strategy & migration</h1>
      <p className='my-4 text-[16px] leading-[26px] text-white'>Planning and execution of cloud migrations with focus on security, cost control and operational readiness. We deliver migration runbooks, cutover plans and a handover to operations.</p>
      <button className='mt-4 bg-[#fdd900] rounded-[30px] text-[15px] px-6 py-3 text-black hover:shadow-md'>Plan migration</button>
    </div>

    <div className="cabling-left flex flex-col items-center text-center justify-between rounded-[24px] p-8 w-full min-h-[320px] lg:min-h-[340px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
      <h1 className='text-[22px] leading-[26px] lg:text-[28px] font-[700] text-white'>Cybersecurity advisory & risk management</h1>
      <p className='my-4 text-[16px] leading-[26px] text-white'>Risk assessments, controls design and remediation plans to strengthen security posture. We help you meet compliance requirements and reduce exposure with practical, prioritized actions.</p>
      <button className='mt-4 bg-[#fdd900] rounded-[30px] text-[15px] px-6 py-3 text-black hover:shadow-md'>Request security review</button>
    </div>
    </div>
      {/* Yellow Glowing Circle */}
          {/* <div className="hidden md:block absolute w-[150px] h-[150px] bg-yellow-400 rounded-full blur-2xl opacity-100 left-[-60px] bottom-[60px] z-10" /> */}
    </div>
  )
}

export default ITService
