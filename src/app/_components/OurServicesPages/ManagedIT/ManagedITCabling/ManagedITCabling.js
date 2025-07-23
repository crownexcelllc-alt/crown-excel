import React from 'react'

const ManagedITCabling = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0'>
      <h1 className='font-montserrat text-[24px] lg:text-[42px] font-[600] leading-[24px] lg:leading-[42px] text-black text-center'>Services Include</h1>
      <div className="cabling-parts flex flex-col md:flex-row md:flex-wrap lg:flex-row items-cetner justify-around mt-10  gap-5 lg:gap-0">
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[680px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[22px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Network Monitoring and Optimization</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We ensure your IT infrastructure operates at peak performance through constant network monitoring. Our experts identify and resolve connectivity bottlenecks, optimize bandwidth usage, and provide insights to streamline operations. This keeps your network fast, reliable, and fully optimized for business success.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[680px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Comprehensive Cybersecurity Services</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Protect your business from the increasing risks of cyber threats with our comprehensive cybersecurity solutions. We deploy firewalls, intrusion detection systems, malware protection, and encryption technologies to safeguard sensitive data and critical systems. Regular security audits ensure your defenses remain robust and up-to-date.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[680px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>Cloud Integration and Management</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Transition to the cloud with ease using our tailored cloud solutions. Whether you need hybrid, public, or private cloud platforms, we design, migrate, and manage your cloud infrastructure to enhance flexibility, collaboration, and scalability. Our services ensure secure access to data and applications anytime, anywhere.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[680px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>IT Support and Maintenance Services</h1>
            <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Our team provides end-to-end IT support, including troubleshooting hardware and software issues, implementing updates, and ensuring systems run smoothly. From routine maintenance to emergency repairs, we keep your IT environment in top shape, reducing downtime and maintaining business continuity.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get A Quote</button>
        </div>
      </div>
      {/* Yellow Glowing Circle */}
          {/* <div className="hidden md:block absolute w-[150px] h-[150px] bg-yellow-400 rounded-full blur-2xl opacity-100 left-[-60px] bottom-[60px] z-10" /> */}
    </div>
  )
}

export default ManagedITCabling
