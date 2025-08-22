import HardwareAmcBanner from '@/app/_components/OurServicesPages/HardwareAMC/HardwareAmcBanner/HardwareAmcBanner'
import HardwareEmpowering from '@/app/_components/OurServicesPages/HardwareAMC/HardwareEmpowering/HardwareEmpowering_new'
import HardwareFaq from '@/app/_components/OurServicesPages/HardwareAMC/HardwareFaq/HardwareFaq'
import HardwareServices from '@/app/_components/OurServicesPages/HardwareAMC/HardwareServices/HardwareServices'
import HardwareSmart from '@/app/_components/OurServicesPages/HardwareAMC/HardwareSmart/HardwareSmart'
import HardwareWeAreBest from '@/app/_components/OurServicesPages/HardwareAMC/HardwareWeAreBest/HardwareWeAreBest'
import HardwareWhyChooseUS from '@/app/_components/OurServicesPages/HardwareAMC/HardwareWhyChooseUS/HardwareWhyChooseUS'
import React from 'react'

const HardwareAMC = () => {
  return (
    <div>
      <HardwareAmcBanner/>
      {/* <HardwareSmart/> */}
      <HardwareEmpowering/>
      {/* <HardwareWhyChooseUS/>
      <HardwareServices/>
      <HardwareWeAreBest/>
      <HardwareFaq/> */}
    </div>
  )
}

export default HardwareAMC
