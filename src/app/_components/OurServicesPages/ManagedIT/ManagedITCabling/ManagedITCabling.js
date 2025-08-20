import React from 'react'

const ManagedITCabling = () => {
  return (
    <div className='mt-20 relative overflow-hidden lg:h-[800px] px-5 lg:px-0'>
      <h1 className='font-montserrat text-[24px] lg:text-[42px] font-[600] leading-[24px] lg:leading-[42px] text-black text-center'>Services Include</h1>
      <div className="cabling-parts flex flex-col md:flex-row md:flex-wrap lg:flex-row items-cetner justify-around mt-10  gap-5 lg:gap-0">
    <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[680px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
      <h1 className='text-center text-[22px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>STRUCTURED CABLING & RACK INSTALLATION</h1>
      <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>We provide professional structured cabling, rack & power planning to ensure efficient, safe and maintainable server rooms and IT closets. Proper cabling reduces noise, improves airflow and simplifies future expansions.</p>
      <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Request a Cabling Plan</button>
    </div>
    <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[680px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
      <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>SECURITY & FIREWALL ARCHITECTURE</h1>
      <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Design and deployment of layered security — firewalls, segmentation, IDS/IPS and secure access controls to protect your core infrastructure and sensitive systems.</p>
      <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Talk Security</button>
    </div>
    <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[680px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
      <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>SERVER VIRTUALIZATION & BACKUP</h1>
      <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Design and implement virtualization platforms with integrated backup & disaster recovery to keep services available and recoverable.</p>
      <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Request Backup Plan</button>
    </div>
    <div className="cabling-left flex flex-col items-center justify-around rounded-[40px] p-[30px] w-full md:w-[400px] lg:w-[299px] lg:h-[680px]" style={{backgroundImage: 'linear-gradient(180deg, #16CA9A 0%, #084032 100%)'}}>
      <h1 className='text-center text-[24px] leading-[24px] lg:text-[30px] lg:leading-[30px] font-[600] font-montserrat'>24/7 Monitoring & IT Support</h1>
      <p className='text-center my-5 lg:my-0 text-[16px] leading-[27.2px] font-montserrat'>Continuous monitoring and a dedicated support team ensure fast incident response and minimal disruption. We proactively maintain systems and apply updates to keep your environment secure.</p>
      <button className='bg-[#fdd900] rounded-[30px] text-[15px] px-[24px] py-[12px] text-black'>Get Support</button>
    </div>
      </div>
      {/* Yellow Glowing Circle */}
          {/* <div className="hidden md:block absolute w-[150px] h-[150px] bg-yellow-400 rounded-full blur-2xl opacity-100 left-[-60px] bottom-[60px] z-10" /> */}
    </div>
  )
}

export default ManagedITCabling
