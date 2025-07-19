import BestNetworkSwitches from '@/app/_components/Products/Switching/BestNetworkSwitches/BestNetworkSwitches'
import SwitchingBanner from '@/app/_components/Products/Switching/SwitchingBanner/SwitchingBanner'
import SwitchingBrandsWeDeal from '@/app/_components/Products/Switching/SwitchingBrandsWeDeal/SwitchingBrandsWeDeal'
import SwitchingHeavyComputing from '@/app/_components/Products/Switching/SwitchingHeavyComputing/SwitchingHeavyComputing'
import SwitchingHighPerformance from '@/app/_components/Products/Switching/SwitchingHighPerformance/SwitchingHighPerformance'
import SwitchingLatestProduct from '@/app/_components/Products/Switching/SwitchingLatestProduct/SwitchingLatestProduct'
import SwitchingUnlease from '@/app/_components/Products/Switching/SwitchingUnlease/SwitchingUnlease'
import SwitchingWhyBuyFromUs from '@/app/_components/Products/Switching/SwitchingWhyBuyFromUs/SwitchingWhyBuyFromUs'
import React from 'react'

const Switching = () => {
  return (
    <div>
      <SwitchingBanner/>
      <SwitchingLatestProduct/>
      <SwitchingUnlease/>
      <SwitchingHighPerformance/>
      <SwitchingHeavyComputing/>
      <BestNetworkSwitches/>
      <SwitchingWhyBuyFromUs/>
      <SwitchingBrandsWeDeal/>
    </div>
  )
}

export default Switching
