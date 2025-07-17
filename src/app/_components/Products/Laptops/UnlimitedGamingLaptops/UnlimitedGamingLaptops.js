import React from 'react'
import GamingLaptop1 from '../../../../../Components/Images/GamingLaptop1.png'
import GamingLaptop2 from '../../../../../Components/Images/GamingLaptop2.png'
import Eclipse from '../../../../../Components/Images/ecclipse.png'
import Stars from '../../../../../Components/Images/stars.png'
import Image from 'next/image'
const UnlimitedGamingLaptops = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className="gaming-left relative w-[797px]  h-[590px] rounded-[30px]" style={{
        padding: '60px 40px 200px 40px',
        background: 'linear-gradient(135deg, #3d3f3f 30%, #232323 100%)'
      }}>
        <Image alt='' width={50} height={50} src={Stars} className='absolute top-10 right-50 '/>
        <h1 className='text-[#ffd900] font-montserrat text-[34px] font-[700] leading-[40px]'>UNLIMITED GAMING LAPTOPS <br /> FOR UNMATCHED <br /> PERFORMANCE</h1>
        <p className='text-[16px] leading-[27px] font-montserrat mt-5'>HP Omen laptops are crafted to deliver exceptional gaming performance on the go. Equipped with the latest powerful processors, advanced NVIDIA GeForce RTX or AMD Radeon graphics, and high-refresh-rate displays, these laptops provide an immersive and fluid gaming experience and fluid gaming experience. With customizable RGB lighting, efficient cooling systems, and a sleek durable design, HP Omen Laptops are built to handle even the most demanding games, offering ultimate portability and power in one package.</p>
        <div className="eclipse absolute bottom-0 left-0">
            <Image alt='' width={323} height={180} src={Eclipse}/>
            <Image alt='' width={50} height={50} src={Stars} className='absolute top-0 right-0 '/>
        </div>
      </div>
      <div className="gaming-right flex flex-col gap-10">
        <Image src={GamingLaptop1} alt="Gaming Laptop 1" width={467} height={338} className="object-cover rounded-[30px] w-[467px] h-full" />
        <Image src={GamingLaptop2} alt="Gaming Laptop 2" width={400} height={300} className="object-cover rounded-[30px] w-full h-full mt-4" />
      </div>
    </div>
  )
}

export default UnlimitedGamingLaptops
