import RMABanner from '@/app/_components/OurServicesPages/RMA/RMABanner/RMABanner'
import RMACabling from '@/app/_components/OurServicesPages/RMA/RMACabling/RMACabling'
import RMACoreAreas from '@/app/_components/OurServicesPages/RMA/RMACoreAreas/RMACoreAreas'
import RMAEmpowering from '@/app/_components/OurServicesPages/RMA/RMAEmpowering/RMAEmpowering'
import RMAFaq from '@/app/_components/OurServicesPages/RMA/RMAFaq/RMAFaq'
import RMAFirewall from '@/app/_components/OurServicesPages/RMA/RMAFirewall/RMAFirewall'
import RMASmart from '@/app/_components/OurServicesPages/RMA/RMASmart/RMASmart'
import React from 'react'

const RMAfacility = () => {
  return (
    <div>
      <RMABanner/>
      <RMASmart/>
      <RMAEmpowering/>
      <RMACoreAreas/>
      <RMACabling/>
      <RMAFirewall/>
      <RMAFaq/>
    </div>
  )
}

export default RMAfacility
