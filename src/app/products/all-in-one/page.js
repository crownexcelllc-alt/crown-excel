import React from 'react'
import AllinOneBanner from '../../_components/Products/AllinOne/AllinOneBanner/AllinOneBanner'
import AllinOneLatestProduct from '@/app/_components/Products/AllinOne/AllinOneLatestProduct/AllinOneLatestProduct'
import AllinOneUnlease from '@/app/_components/Products/AllinOne/AllinOneUnlease/AllinOneUnlease'
import AllinOneHighPerformance from '@/app/_components/Products/AllinOne/AllinOneHighPerformance/AllinOneHighPerformance'
import AllinOneHeavyComputing from '@/app/_components/Products/AllinOne/AllinOneHighComputing/AllinOneHeavyComputing'
import OneinAllProducts from '@/app/_components/Products/AllinOne/OneinAllProducts/OneinAllProducts'
import AllinOneFromUs from '@/app/_components/Products/AllinOne/AllinOneFromUs/AllinOneFromUs'
import AllinOneBrandsWeDeal from '@/app/_components/Products/AllinOne/AllinOneBrandsWeDeal/AllinOneBrandsWeDeal'

const AllinOne = () => {
  return (
    <div>
      <AllinOneBanner/>
      <AllinOneLatestProduct/>
      <AllinOneUnlease/>
      <AllinOneHighPerformance/>
      <AllinOneHeavyComputing/>
      <OneinAllProducts/>
      <AllinOneFromUs/>
      <AllinOneBrandsWeDeal/>
    </div>
  )
}

export default AllinOne
