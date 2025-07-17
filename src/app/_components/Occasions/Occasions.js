import React from 'react'
import Meeting1 from '../../../Components/Images/meeting1.png'
import Meeting2 from '../../../Components/Images/meeting2.png'
import Meeting3 from '../../../Components/Images/meeting3.png'
import Meeting4 from '../../../Components/Images/meeting4.png'
import Image from 'next/image'

const Occasions = () => {
  return (
    <div className='occasion lg:h-[500px] w-full flex flex-col items-center pt-[50px] gap-5 mb-10 lg:gap-15'>
      <h1 className='text-[25px] lg:text-[47px] font-[600] text-black text-center font-sans leading-[30px] lg:leading-[47px] font-montserrat'>Transforming Occasions <br /> into Great Memories</h1>
      <div className="meeting grid grid-cols-2 lg:flex md:flex px-3 w-full gap-2 lg:gap-5 items-center justify-center">
        <Image className='rounded-[30px] md:-mt-10 lg:-mt-10' src={Meeting1} width={265} height={183} alt=''/>
        <Image className='rounded-[30px] md:mt-10 lg:mt-10' src={Meeting2} width={265} height={183} alt=''/>
        <Image className='rounded-[30px] md:-mt-10 lg:-mt-10' src={Meeting3} width={265} height={183} alt=''/>
        <Image className='rounded-[30px] md:mt-10 lg:mt-10' src={Meeting4} width={265} height={183} alt=''/>
      </div>
    </div>
  )
}

export default Occasions
