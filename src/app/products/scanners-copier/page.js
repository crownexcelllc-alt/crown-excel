import ScannerBestSelling from '@/app/_components/Products/ScannerCopier/ScannerBestSelling/ScannerBestSelling'
import ScannerBrandsWeDeal from '@/app/_components/Products/ScannerCopier/ScannerBrandsWeDeal/ScannerBrandsWeDeal'
import ScannerCopierBanner from '@/app/_components/Products/ScannerCopier/ScannerCopierBanner/ScannerCopierBanner'
import ScannerPerformance from '@/app/_components/Products/ScannerCopier/ScannerPerformance/ScannerPerformance'
import ScannerPopular from '@/app/_components/Products/ScannerCopier/ScannerPopular/ScannerPopular'
import ScannersWhyBuyFromUs from '@/app/_components/Products/ScannerCopier/ScannersWhyBuyFromUs/ScannersWhyBuyFromUs'
import React from 'react'

const ScannersCopier = () => {
  return (
    <div>
      <ScannerCopierBanner/>
      <ScannerBestSelling/>
      <ScannerPerformance/>
      <ScannerPopular/>
      <ScannersWhyBuyFromUs/>
      <ScannerBrandsWeDeal/>
    </div>
  )
}

export default ScannersCopier
