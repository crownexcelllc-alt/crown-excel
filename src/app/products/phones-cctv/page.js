import AllinOnePhones from '@/app/_components/Products/PhonesCCTV/AllinOnePhones/AllinOnePhones'
import BestSellingPhones from '@/app/_components/Products/PhonesCCTV/BestSellingPhones/BestSellingPhones'
import PhonesBanner from '@/app/_components/Products/PhonesCCTV/PhonesBanner/PhonesBanner'
import PhonesBrand from '@/app/_components/Products/PhonesCCTV/PhonesBrand/PhonesBrand'
import UltimatePhones from '@/app/_components/Products/PhonesCCTV/UltimatePhones/UltimatePhones'
import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/products/phones-cctv', {
    title: 'Phones & CCTV Surveillance | Crown Excel',
    description: 'IP phones, PBX systems, CCTV security cameras, and surveillance systems in Dubai.',
  });
}

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
