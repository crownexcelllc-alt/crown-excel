import React from 'react'
import Intel from '../../../Components/Images/intel.png'
import Dell from '../../../Components/Images/dell.png'
import Acer from '../../../Components/Images/acer.png'
import Amd from '../../../Components/Images/amd.png'
import Hp from '../../../Components/Images/hp.png'
import Dragon from '../../../Components/Images/dragon.png'
import Asus from '../../../Components/Images/asus.png'
import Noc from '../../../Components/Images/noc.png'
import Samsung from '../../../Components/Images/samsung.png'
import Image from 'next/image'

const Brands = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#e6f0ee]'>
      <h1 className='text-[32px] mt-10 font-montserrat leading-[32px] font-[700] text-black'>BRANDS WE DEAL </h1>
      <div className="companies grid grid-cols-3 lg:w-[732px] lg:pl-[90px] h-[470px]  items-center justify-center">
        <Image className='lg:w-[136px] lg:h-[136px]' src={Intel} width={136} height={136} alt=''/>
        <Image src={Dell} width={136} height={136} alt=''/>
        <Image src={Acer} width={136} height={136} alt=''/>
        <Image src={Amd} width={136} height={136} alt=''/>
        <Image src={Hp} width={136} height={136} alt=''/>
        <Image src={Dragon} width={136} height={136} alt=''/>
        <Image src={Asus} width={136} height={136} alt=''/>
        <Image src={Noc} width={136} height={136} alt=''/>
        <Image src={Samsung} width={136} height={136} alt=''/>
      </div>
    </div>
  )
}

export default Brands
