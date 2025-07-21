import AllinOnePhones from '@/app/_components/Products/PhonesCCTV/AllinOnePhones/AllinOnePhones'
import BestSellingPhones from '@/app/_components/Products/PhonesCCTV/BestSellingPhones/BestSellingPhones'
import PhonesBanner from '@/app/_components/Products/PhonesCCTV/PhonesBanner/PhonesBanner'
import PhonesBrand from '@/app/_components/Products/PhonesCCTV/PhonesBrand/PhonesBrand'
import UltimatePhones from '@/app/_components/Products/PhonesCCTV/UltimatePhones/UltimatePhones'
import React from 'react'

const PhonesCCTV = () => {
  return (
    <div>
      <PhonesBanner/>
      <BestSellingPhones/>
      <UltimatePhones/>
      <AllinOnePhones/>
      <PhonesBrand/>
    </div>
  )
}

export default PhonesCCTV
