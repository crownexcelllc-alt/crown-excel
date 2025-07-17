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
