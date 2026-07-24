import SoftwareBanner from '@/app/_components/OurServicesPages/SoftwareAMC/SoftwareBanner/SoftwareBanner'
import SoftwareSmart from '@/app/_components/OurServicesPages/SoftwareAMC/SoftwareSmart/SoftwareSmart'
import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/our-services/software-solutions', {
    title: 'Software Solutions & Maintenance | Crown Excel',
    description: 'Corporate software maintenance, license management, and software support solutions in Dubai.',
  });
}

const SoftwareAMC = () => {
  return (
    <div>
      <SoftwareBanner/>
      <SoftwareSmart/>
      {/* <SoftwareEmpowering/>
      <SoftwareCoreAreas/>
      <SoftwareCabling/>
      <SoftwareWeAreBest/>
      <SoftwareFaq/> */}
    </div>
  )
}

export default SoftwareAMC
