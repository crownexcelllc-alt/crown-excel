import React from 'react'
import DesktopBanner from '../../_components/Products/Desktop/DesktopBanner/DesktopBanner'
import DesktopLatestProduct from '@/app/_components/Products/Desktop/LatestProduct/DesktopLatestProduct'
import DesktopBestSelling from '@/app/_components/Products/Desktop/BestSelling/DesktopBestSelling'
import UnleasePowerDesktop from '@/app/_components/Products/Desktop/UnleasePowerDesktop/UnleasePowerDesktop'
import HighPerformance from '@/app/_components/Products/Desktop/HighPerformance/HighPerformance'
import HeavyComputing from '@/app/_components/Products/Desktop/HeavyComputing/HeavyComputing'
import AllinOneDesktops from '@/app/_components/Products/Desktop/AllinOneDesktops/AllinOneDesktops'
import WhyBuyFromUs from '@/app/_components/Products/Desktop/WhyBuyFromUs/WhyBuyFromUs'
import DesktopBrands from '@/app/_components/Products/Desktop/DesktopBrandsWeDeal/DesktopBrands'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/products/pc', {
    title: 'Desktops & PCs | Crown Excel',
    description: 'Business PCs, desktop computers, and customized workstations at Crown Excel Dubai.',
  });
}

const page = () => {
  return (
    <div>
      <DesktopBanner/>
      {/* <DesktopLatestProduct/> */}
      <DesktopBestSelling/>
      <UnleasePowerDesktop/>
      <HighPerformance/>
      <HeavyComputing/>
      <AllinOneDesktops/>
      <WhyBuyFromUs/>
      <DesktopBrands/>
    </div>
  )
}

export default page
