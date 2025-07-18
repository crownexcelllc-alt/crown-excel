import RouterLatestProducts from '@/app/_components/Products/Routers/RouterLatestProducts/RouterLatestProducts'
import RoutersBanner from '@/app/_components/Products/Routers/RoutersBanner/RoutersBanner'
import RoutersBrandWeDeal from '@/app/_components/Products/Routers/RoutersBrandWeDeal/RoutersBrandWeDeal'
import RoutersHighPerformance from '@/app/_components/Products/Routers/RoutersHighPerformance/RoutersHighPerformance'
import RoutersSeamlessConnectivity from '@/app/_components/Products/Routers/RoutersSeamlessConnectivity/RoutersSeamlessConnectivity'
import RoutersUnlease from '@/app/_components/Products/Routers/RoutersUnlease/RoutersUnlease'
import RoutersWhyBuyFromUs from '@/app/_components/Products/Routers/RoutersWhyBuyFromUs/RoutersWhyBuyFromUs'
import TopRouters from '@/app/_components/Products/Routers/TopRouters/TopRouters'
import React from 'react'

const RoutersAccessPoints = () => {
  return (
    <div>
      <RoutersBanner/>
      <RouterLatestProducts/>
      <RoutersUnlease/>
      <RoutersHighPerformance/>
      <RoutersSeamlessConnectivity/>
      <TopRouters/>
      <RoutersWhyBuyFromUs/>
      <RoutersBrandWeDeal/>
    </div>
  )
}

export default RoutersAccessPoints
