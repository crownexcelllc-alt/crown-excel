import React from 'react'

const NetworkingCabling = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0'>
      <h1 className='font-montserrat text-[35px] lg:text-[42px] font-[600] leading-[42px] text-black text-center'>CABLING & NETWORKING SECURITY</h1>
      <div className="cabling-parts flex flex-col md:flex-row lg:flex-row items-cetner justify-around mt-10  gap-5 lg:gap-0">
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full lg:w-[542.5px] lg:h-[582.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[30px] leading-[30px] lg:text-[45px] lg:leading-[45px] font-[600] font-montserrat'>CABLING INFRASTRUCTURE</h1>
            <p className='text-center my-5 text-[16px] leading-[27.2px] font-montserrat'>A solid cabling infrastructure is crucial for ensuring reliable network performance. We design and install high-quality cabling systems that provide seamless connectivity and efficient data flow across your network. This setup supports smooth communication between all connected devices, enabling your business operations to run without interruption. Our team customizes each installation to meet your specific needs, minimizing disruptions and boosting overall productivity. By using durable, professional-grade materials and expert installation techniques, we reduce the risk of network downtime caused by faulty or inadequate cabling.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Building a Strong Foundation for Seamless Connectivity</button>
        </div>
        <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full lg:w-[542.5px] lg:h-[582.5px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
            <h1 className='text-center text-[30px] leading-[30px] lg:text-[45px] lg:leading-[45px] font-[600] font-montserrat'>NETWORK SECURITY</h1>
            <p className='text-center my-5 text-[16px] leading-[27.2px] font-montserrat'>Protecting your network from unauthorized access and cyber threats is a top priority. We implement advanced security protocols, such as encryption, firewalls, and secure authentication methods, to safeguard sensitive data and ensure the integrity of your network. Our team uses professional-grade security tools and equipment to continuously monitor, detect, and address potential vulnerabilities, providing maximum protection against cyber threats. By following industry best practices and regularly updating our security measures, we offer proactive defense and ensure your network remains secure, giving you peace of mind that your business operations are protected from evolving security risks.</p>
            <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Guarding Your Network, Protecting Your Data</button>
        </div>
      </div>
      {/* Yellow Glowing Circle */}
          <div className="hidden md:block absolute w-[150px] h-[150px] bg-yellow-400 rounded-full blur-2xl opacity-100 left-[-60px] bottom-[60px] z-10" />
    </div>
  )
}

export default NetworkingCabling
