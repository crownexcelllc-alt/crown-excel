import NetworkCoreAreas from '@/app/_components/OurServicesPages/Networking/NetworkCoreAreas/NetworkCoreAreas'
import NetworkEmpowering from '@/app/_components/OurServicesPages/Networking/NetworkEmpowering/NetworkEmpowering'
import NetworkingBanner from '@/app/_components/OurServicesPages/Networking/NetworkingBanner/NetworkingBanner'
import NetworkingCabling from '@/app/_components/OurServicesPages/Networking/NetworkingCabling/NetworkingCabling'
import NetworkingFirewall from '@/app/_components/OurServicesPages/Networking/NetworkingFirewall/NetworkingFirewall'
import NetworkingSmart from '@/app/_components/OurServicesPages/Networking/NetworkingSmart/NetworkingSmart'
import React from 'react'

const Networking = () => {
  return (
    <div>
      <NetworkingBanner/>
      <NetworkingSmart/>
      <NetworkEmpowering/>
      <NetworkCoreAreas/>
      <NetworkingCabling/>
      <NetworkingFirewall/>
    </div>
  )
}

export default Networking
