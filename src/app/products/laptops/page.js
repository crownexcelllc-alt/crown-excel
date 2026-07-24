import BestSelling from '@/app/_components/Products/Laptops/BestSelling/BestSelling'
import LaptopBanner from '@/app/_components/Products/Laptops/Laptop Banner/LaptopBanner'
import LatestProduct from '@/app/_components/Products/Laptops/Latest Product/LatestProduct'
import Performance from '@/app/_components/Products/Laptops/Performance/Performance'
import UnleashPower from '@/app/_components/Products/Laptops/UnleashPower/UnleashPower'
import UnlimitedGamingLaptops from '@/app/_components/Products/Laptops/UnlimitedGamingLaptops/UnlimitedGamingLaptops'
import React from 'react'
import BestLaptops from '../../_components/Products/Laptops/Best Laptops/BestLaptops'
import AllInOne from '@/app/_components/Products/Laptops/All In One/AllInOne'
import WhyFromUs from '@/app/_components/Products/Laptops/WhyFromUs/WhyFromUs'
import ProductsBrands from '@/app/_components/Products/Laptops/ProductsBrand/ProductsBrands'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/products/laptops', {
    title: 'Laptops & Workstations | Crown Excel',
    description: 'Corporate laptops, gaming laptops, and high-performance mobile workstations at Crown Excel Dubai.',
  });
}

const Laptops = () => {
  return (
    <div>
      <LaptopBanner/>
      <BestSelling/>
      <UnleashPower/>
      <Performance/>
      <LatestProduct/>
      <UnlimitedGamingLaptops/>
      <BestLaptops/>
      <AllInOne/>
      <WhyFromUs/>
      <ProductsBrands/>
    </div>
  )
}

export default Laptops
