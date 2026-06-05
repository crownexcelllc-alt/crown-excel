import Image from 'next/image'
import React from 'react'
const Banner = { src: 'https://res.cloudinary.com/dqghun7oj/image/upload/v1780490952/cms/default/content/c4uladmenf4p8fyzruoy.webp', height: 1000, width: 1000 };

function SmartSolutions() {
  return (
    <div className="relative w-full min-h-[180px] sm:min-h-[180px] md:min-h-[250px] lg:min-h-[320px] xl:min-h-[600px]  overflow-hidden">
      <Image
        src={Banner}
        alt="Crown Excel technology solutions banner"
        fill
        className="object-cover w-full h-full"
        priority
        sizes="100vw"
      />
    </div>
  )
}

export default SmartSolutions
