import React from 'react'

const NetworkingCabling = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0'>
      <h1 className='font-montserrat text-[24px] lg:text-[42px] font-[600] leading-[24px] lg:leading-[42px] text-black text-center'>CABLING & NETWORKING SECURITY</h1>
      <div className="cabling-parts flex flex-col md:flex-row lg:flex-row items-cetner justify-around mt-10  gap-5 lg:gap-0">
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full lg:w-[542.5px] lg:h-[582.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[22px] leading-[24px] lg:text-[34px] lg:leading-[34px] font-[600] font-montserrat'>CABLING & NETWORKING SECURITY</h1>
            <p className='text-center my-5 text-[16px] leading-[27.2px] font-montserrat'>A robust product return infrastructure is essential for ensuring a smooth and hassle-free return process. We design and implement high-quality RMA systems that streamline product returns, repairs, and replacements, ensuring efficient handling and resolution. This setup fosters seamless communication between all stakeholders, including customers, suppliers, and internal teams, enabling your operations to proceed without disruption. Our team customizes each solution to meet your specific business needs, minimizing delays and maximizing efficiency. By utilizing advanced systems, professional-grade tools, and best practices, we reduce the risk of errors and ensure a consistent and reliable return management experience.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Building a Strong Foundation for Seamless Connectivity</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full lg:w-[542.5px] lg:h-[582.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[34px] lg:leading-[34px] font-[600] font-montserrat'>QUALITY ASSURANCE & RETURN SECURITY</h1>
            <p className='text-center my-5 text-[16px] leading-[27.2px] font-montserrat'>Protecting the integrity of your returned products and safeguarding customer trust are top priorities. We implement advanced quality assurance protocols, such as detailed product evaluations, defect analysis, and secure handling methods, to ensure that returned products meet the required standards. Our team uses professional-grade tools and systems to meticulously inspect, repair, or replace items, ensuring they are ready for redistribution or final resolution. By adhering to industry best practices and continuously refining our processes, we offer proactive quality management to ensure customer satisfaction and operational excellence, giving you peace of mind that your return operations are handled with precision and care.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Guarding Your Network, Protecting Your Data</button>
        </div>
      </div>
      {/* Yellow Glowing Circle */}
          {/* <div className="hidden md:block absolute w-[150px] h-[150px] bg-yellow-400 rounded-full blur-2xl opacity-100 left-[-60px] bottom-[60px] z-10" /> */}
    </div>
  )
}

export default NetworkingCabling
