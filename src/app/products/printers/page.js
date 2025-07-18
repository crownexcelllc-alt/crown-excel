import AllinOnePrinters from '@/app/_components/Products/Printers/AllinOnePrinters/AllinOnePrinters'
import BestSellingPrinters from '@/app/_components/Products/Printers/BestSellingPrinters/BestSellingPrinters'
import BrandsWeDealPrinters from '@/app/_components/Products/Printers/BrandsWeDealPrinters/BrandsWeDealPrinters'
import HighPerformancePrinters from '@/app/_components/Products/Printers/HighPerformancePrinters/HighPerformancePrinters'
import PerformancePrinters from '@/app/_components/Products/Printers/PerformancePrinters/PerformancePrinters'
import PrinterBanner from '@/app/_components/Products/Printers/PrinterBanner/PrinterBanner'
import UnleasePrinters from '@/app/_components/Products/Printers/UnleasePrinters/UnleasePrinters'
import WhyBuyFromUsPrinters from '@/app/_components/Products/Printers/WhyBuyFromUsPrinters/WhyBuyFromUsPrinters'
import React from 'react'

const Printers = () => {
  return (
    <div>
      <PrinterBanner/>
      <BestSellingPrinters/>
      <UnleasePrinters/>
      <HighPerformancePrinters/>
      <PerformancePrinters/>
      <AllinOnePrinters/>
      <WhyBuyFromUsPrinters/>
      <BrandsWeDealPrinters/>
    </div>
  )
}

export default Printers
