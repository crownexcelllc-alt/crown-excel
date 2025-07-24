import HardwareRepairBanner from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairBanner/HardwareRepairBanner'
import HardwareRepairEmpowering from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairEmpowering/HardwareRepairEmpowering'
import HardwareRepairFaq from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairFaq/HardwareRepairFaq'
import HardwareRepairServices from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairServices/HardwareRepairServices'
import HardwareRepairSmart from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairSmart/HardwareRepairSmart'
import HardwareRepairWeAreBest from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairWeAreBest/HardwareRepairWeAreBest'
import HardwareRepairWhyChooseUs from '@/app/_components/OurServicesPages/HardwareRepair/HardwareRepairWhyChooseUs/HardwareRepairWhyChooseUs'
import React from 'react'

const HardwareRepair = () => {
  return (
    <div>
      <HardwareRepairBanner/>
      <HardwareRepairSmart/>
      <HardwareRepairEmpowering/>
      <HardwareRepairWhyChooseUs/>
      <HardwareRepairServices/>
      <HardwareRepairWeAreBest/>
      <HardwareRepairFaq/>
    </div>
  )
}

export default HardwareRepair
