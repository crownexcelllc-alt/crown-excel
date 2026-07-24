import ManagedITBanner from '@/app/_components/OurServicesPages/ManagedIT/ManagedITBanner/ManagedITBanner'
import ManagedITCabling from '@/app/_components/OurServicesPages/ManagedIT/ManagedITCabling/ManagedITCabling'
import ManagedITEmpowering from '@/app/_components/OurServicesPages/ManagedIT/ManagedITEmpowering/ManagedITEmpowering'
import ManagedITFaq from '@/app/_components/OurServicesPages/ManagedIT/ManagedITFaq/ManagedITFaq'
import ManagedITSmart from '@/app/_components/OurServicesPages/ManagedIT/ManagedITSmart/ManagedITSmart'
import ManagedITWeareBest from '@/app/_components/OurServicesPages/ManagedIT/ManagedITWeareBest/ManagedITWeareBest'
import ManagedITWhyChooseUs from '@/app/_components/OurServicesPages/ManagedIT/ManagedITWhyChooseUs/ManagedITWhyChooseUs'
import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/our-services/it-infrastructure', {
    title: 'IT Infrastructure Management | Crown Excel',
    description: 'Managed IT infrastructure, system setup, cabling, and monitoring services in Dubai.',
  });
}

const ManagedIT = () => {
  return (
    <div>
      <ManagedITBanner/>
      <ManagedITSmart/>
      {/* <ManagedITEmpowering/>
      <ManagedITWhyChooseUs/>
      <ManagedITCabling/>
      <ManagedITWeareBest/>
      <ManagedITFaq/> */}
    </div>
  )
}

export default ManagedIT
