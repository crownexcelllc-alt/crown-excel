import Image from 'next/image'
import React from 'react'
import Global from '../../../Components/Images/globeimage.png'

const Globe = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full   text-black relative overflow-hidden'>
      <div className="header h-[130px] w-full bg-[#084032] flex flex-col items-center justify-center text-white">
        <h1 className='text-[30px] text-center leading-[30px] text-[#f7a539] font-montserrat font-[600]'>We are in the Heart of Globe</h1>
        <h2 className='text-[30px] font-montserrat font-[600]'>Dubai UAE</h2>
      </div>
      <div className="globe-image mt-5">
        <Image className='w-[793px]' src={Global} alt='' width={793} height={231}/>
      </div>
    </div>
  )
}

export default Globe
