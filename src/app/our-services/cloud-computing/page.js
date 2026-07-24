import RMABanner from '@/app/_components/OurServicesPages/RMA/RMABanner/RMABanner'
import RMAEmpowering from '@/app/_components/OurServicesPages/RMA/RMAEmpowering/RMAEmpowering'
import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/our-services/cloud-computing', {
    title: 'Cloud Computing Services | Crown Excel',
    description: 'Scalable cloud computing, cloud storage, and virtual infrastructure solutions in Dubai.',
  });
}

const RMAfacility = () => {
  return (
    <div>
      <RMABanner/>
      {/* <RMASmart/> */}
      <RMAEmpowering/>
      {/* <RMACoreAreas/> */}
      {/* <RMACabling/> */}
      {/* <RMAFirewall/> */}
      {/* <RMAFaq/> */}
    </div>
  )
}

export default RMAfacility
