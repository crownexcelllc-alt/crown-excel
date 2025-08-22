// import ServerEmpowering from '@/app/_components/OurServicesPages/ServerSupport/ServerEmpowering/ServerEmpowering'
// import ServerFaq from '@/app/_components/OurServicesPages/ServerSupport/ServerFaq/ServerFaq'
// import ServerServices from '@/app/_components/OurServicesPages/ServerSupport/ServerServices/ServerServices'
import ServerSmart from '@/app/_components/OurServicesPages/ServerSupport/ServerSmart/ServerSmart'
import ServerSupportBanner from '@/app/_components/OurServicesPages/ServerSupport/ServerSupportBanner/ServerSupportBanner'
// import ServerWeAreBest from '@/app/_components/OurServicesPages/ServerSupport/ServerWeAreBest/ServerWeAreBest'
// import ServerWhyChooseUs from '@/app/_components/OurServicesPages/ServerSupport/ServerWhyChooseUs/ServerWhyChooseUs'
import React from 'react'

const ServerSupport = () => {
  return (
    <div>
        <ServerSupportBanner/>
        <ServerSmart/>
        {/* <ServerEmpowering/>
        <ServerWhyChooseUs/>
        <ServerServices/>
        <ServerWeAreBest/>
        <ServerFaq/> */}
    </div>
  )
}

export default ServerSupport
