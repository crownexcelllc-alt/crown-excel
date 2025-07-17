import Image from 'next/image'
import React from 'react'
import Banner from '../../Components/Images/banner.png'

function SmartSolutions() {
  return (
    <div className="relative w-full min-h-[180px] sm:min-h-[180px] md:min-h-[250px] lg:min-h-[320px] xl:min-h-[600px]  overflow-hidden">
      <Image
        src={Banner}
        alt="img"
        fill
        className="object-cover w-full h-full"
        priority
        sizes="100vw"
      />
    </div>
  )
}

export default SmartSolutions