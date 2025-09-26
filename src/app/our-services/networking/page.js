import ContactUsForm from '@/app/_components/ContactUsPage/ContactUsForm/ContactUsForm'
import NetworkCoreAreas from '@/app/_components/OurServicesPages/Networking/NetworkCoreAreas/NetworkCoreAreas'
import NetworkEmpowering from '@/app/_components/OurServicesPages/Networking/NetworkEmpowering/NetworkEmpowering_new'
// import NetworkEmpowering from '@/app/_components/OurServicesPages/Networking/NetworkEmpowering/NetworkEmpowering'
import NetworkingBanner from '@/app/_components/OurServicesPages/Networking/NetworkingBanner/NetworkingBanner'
// import NetworkingCabling from '@/app/_components/OurServicesPages/Networking/NetworkingCabling/NetworkingCabling'
// import NetworkingFAQ from '@/app/_components/OurServicesPages/Networking/NetworkingFAQ/NetworkingFAQ'
// import NetworkingFirewall from '@/app/_components/OurServicesPages/Networking/NetworkingFirewall/NetworkingFirewall'
// import NetworkingSmart from '@/app/_components/OurServicesPages/Networking/NetworkingSmart/NetworkingSmart'
import React from 'react'

const Networking = () => {
  return (
    <div>
      <NetworkingBanner/>
      {/* <NetworkingSmart/> */}
      <NetworkEmpowering/>
        {/* <div className="header text-center">
        <h1 className='text-[32px] text-black -mb-10 lg:text-[32px] font-montserrat font-[600]'>Get a Quote</h1> */}
        {/* <p className='text-[14px] lg:text-[24px] font-roboto'>Reach out to us, and we’ll be happy to assist you.</p> */}
      {/* </div> */}
      {/* <ContactUsForm/>  */}
      {/* <NetworkEmpowering/> */}
      {/* <NetworkCoreAreas/>
      <NetworkingCabling/>
      <NetworkingFirewall/>
      <NetworkingFAQ/> */}
    </div>
  )
}

export default Networking
