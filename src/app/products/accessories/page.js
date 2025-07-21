import AccessoriesAllinOne from '@/app/_components/Products/Accessories/AccessoriesAllinOne/AccessoriesAllinOne'
import AccessoriesBanner from '@/app/_components/Products/Accessories/AccessoriesBanner/AccessoriesBanner'
import AccessoriesBestSelling from '@/app/_components/Products/Accessories/AccessoriesBestSelling/AccessoriesBestSelling'
import AccessoriesBrandWeDeal from '@/app/_components/Products/Accessories/AccessoriesBrandWeDeal/AccessoriesBrandWeDeal'
import AccessoriesUltimateSolution from '@/app/_components/Products/Accessories/AccessoriesUltimateSolution/AccessoriesUltimateSolution'
import AccessoriesWhyFromUs from '@/app/_components/Products/Accessories/AccessoriesWhyFromUs/AccessoriesWhyFromUs'
import React from 'react'

const Accessories = () => {
  return (
    <div>
      <AccessoriesBanner/>
      <AccessoriesBestSelling/>
      <AccessoriesUltimateSolution/>
      <AccessoriesAllinOne/>
      <AccessoriesWhyFromUs/>
      <AccessoriesBrandWeDeal/>
    </div>
  )
}

export default Accessories
