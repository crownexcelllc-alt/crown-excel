import HardwareRepairBanner from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairBanner/HardwareRepairBanner'
import SecuritySolutionsEmpowering from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairEmpowering/HardwareRepairEmpowering'
import HardwareRepairEmpowering from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairEmpowering/HardwareRepairEmpowering'
import HardwareRepairFaq from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairFaq/HardwareRepairFaq'
import HardwareRepairServices from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairServices/HardwareRepairServices'
import HardwareRepairSmart from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairSmart/HardwareRepairSmart'
import HardwareRepairWeAreBest from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairWeAreBest/HardwareRepairWeAreBest'
import HardwareRepairWhyChooseUs from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairWhyChooseUs/HardwareRepairWhyChooseUs'
import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/our-services/security-solutions', {
    title: 'Cybersecurity & Security Solutions | Crown Excel',
    description: 'Comprehensive cybersecurity, firewall management, antivirus, and threat monitoring in Dubai.',
  });
}

const HardwareRepair = () => {
  return (
    <div>
      <HardwareRepairBanner/>
      {/* <HardwareRepairSmart/> */}
      <SecuritySolutionsEmpowering/>
      {/* <HardwareRepairWhyChooseUs/>
      <HardwareRepairServices/>
      <HardwareRepairWeAreBest/>
      <HardwareRepairFaq/> */}
    </div>
  )
}

export default HardwareRepair
