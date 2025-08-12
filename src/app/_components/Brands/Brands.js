import React from 'react'
import Dragon from '../../../Components/Images/dragon.png'
import Noc from '../../../Components/Images/noc.png'
import Image from 'next/image'
import Intel from '@/Components/Images/intell.png'
import Dell from '@/Components/Images/dell (1).png'
import Acer from '@/Components/Images/acer (2).png'
import Xerox from '@/Components/Images/Xerox.png'
import Amd from '@/Components/Images/amdd.png'
import Hp from '@/Components/Images/hp (1).png'
import ViewSonic from '@/Components/Images/view sonic.png'
import Optoma from '@/Components/Images/optoma.png'
import ricoh from '@/Components/Images/ricoh.png'
import meetion from '@/Components/Images/meetion.png'
import logitech from '@/Components/Images/logitech.png'
import lexar from '@/Components/Images/lexar.png'
import Kingston from '@/Components/Images/Kingston.png'
import epson from '@/Components/Images/epson.png'
import crucial from '@/Components/Images/crucial.png'
import canon from '@/Components/Images/canon.png'
import brother from '@/Components/Images/brother.png'
import benq from '@/Components/Images/benq.png'
import aoc from '@/Components/Images/aoc.png'
import alienware from '@/Components/Images/alienware.png'
import adhua from '@/Components/Images/alienware.png'
import tplink from '@/Components/Images/tp link.png'
import samsung from '@/Components/Images/samsung (1).png'
import msi from '@/Components/Images/msi (1).png'
import razor from '@/Components/Images/razor.png'
import microsof from '@/Components/Images/microsof.png'
import lg from '@/Components/Images/lg.png'
import intell from '@/Components/Images/intell.png'
import lenovo from '@/Components/Images/lenovo (1).png'
import Asus from '@/Components/Images/asus (1).png'
import apple from '@/Components/Images/apple (1).png'

const brands = [
  Intel, Dell, Acer, Amd, Hp, Dragon, Asus, Noc, Xerox, ViewSonic, Optoma, ricoh, meetion, logitech, lexar, Kingston, epson, crucial, canon, brother, benq, aoc, alienware, adhua, tplink, samsung, msi, razor, microsof, lg, intell, lenovo, apple
]

const Brands = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#e6f0ee] py-10'>
      <h1 className='text-[32px] mb-10 font-montserrat leading-[32px] font-[700] text-black'>BRANDS WE DEAL</h1>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 lg:grid-cols-11 xl:grid-cols-11  w-full max-w-7xl px-4">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center transition">
              <Image src={brand} width={120} height={120} alt="Brand Logo" className="object-contain w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands



























// import React from 'react'
// import Dragon from '../../../Components/Images/dragon.png'
// import Noc from '../../../Components/Images/noc.png'
// import Image from 'next/image'
// import Intel from '@/Components/Images/intell.png'
// import Dell from '@/Components/Images/dell (1).png'
// import Acer from '@/Components/Images/acer (2).png'
// import Xerox from '@/Components/Images/Xerox.png'
// import Amd from '@/Components/Images/amdd.png'
// import Hp from '@/Components/Images/hp (1).png'
// import ViewSonic from '@/Components/Images/view sonic.png'
// import Optoma from '@/Components/Images/optoma.png'
// import ricoh from '@/Components/Images/ricoh.png'
// import meetion from '@/Components/Images/meetion.png'
// import logitech from '@/Components/Images/logitech.png'
// import lexar from '@/Components/Images/lexar.png'
// import Kingston from '@/Components/Images/Kingston.png'
// import epson from '@/Components/Images/epson.png'
// import crucial from '@/Components/Images/crucial.png'
// import canon from '@/Components/Images/canon.png'
// import brother from '@/Components/Images/brother.png'
// import benq from '@/Components/Images/benq.png'
// import aoc from '@/Components/Images/aoc.png'
// import alienware from '@/Components/Images/alienware.png'
// import adhua from '@/Components/Images/alienware.png'
// import tplink from '@/Components/Images/tp link.png'
// import samsung from '@/Components/Images/samsung (1).png'
// import msi from '@/Components/Images/msi (1).png'
// import razor from '@/Components/Images/razor.png'
// import microsof from '@/Components/Images/microsof.png'
// import lg from '@/Components/Images/lg.png'
// import intell from '@/Components/Images/intell.png'
// import lenovo from '@/Components/Images/lenovo (1).png'
// import Asus from '@/Components/Images/asus (1).png'
// import apple from '@/Components/Images/apple (1).png'




// const Brands = () => {
//   return (
//     <div className='flex flex-col items-center justify-center bg-[#e6f0ee]'>
//       <h1 className='text-[32px] mt-10 font-montserrat leading-[32px] font-[700] text-black'>BRANDS WE DEAL </h1>
//       <div className="companies grid grid-cols-3 lg:w-[732px] lg:pl-[90px] h-[470px]  items-center justify-center">
//         <Image className='lg:w-[136px] lg:h-[136px]' src={Intel} width={136} height={136} alt=''/>
//         <Image src={Dell} width={136} height={136} alt=''/>
//         <Image src={Acer} width={136} height={136} alt=''/>
//         <Image src={Amd} width={136} height={136} alt=''/>
//         <Image src={Hp} width={136} height={136} alt=''/>
//         <Image src={Dragon} width={136} height={136} alt=''/>
//         <Image src={Asus} width={136} height={136} alt=''/>
//         <Image src={Noc} width={136} height={136} alt=''/>
//         <Image src={Xerox} width={136} height={136} alt=''/>
//         <Image src={ViewSonic} width={136} height={136} alt=''/>
//         <Image src={Optoma} width={136} height={136} alt=''/>
//         <Image src={ricoh} width={136} height={136} alt=''/>
//         <Image src={meetion} width={136} height={136} alt=''/>
//         <Image src={logitech} width={136} height={136} alt=''/>
//         <Image src={lexar} width={136} height={136} alt=''/>
//         <Image src={Kingston} width={136} height={136} alt=''/>
//         <Image src={epson} width={136} height={136} alt=''/>
//         <Image src={crucial} width={136} height={136} alt=''/>
//         <Image src={canon} width={136} height={136} alt=''/>
//         <Image src={brother} width={136} height={136} alt=''/>
//         <Image src={benq} width={136} height={136} alt=''/>
//         <Image src={aoc} width={136} height={136} alt=''/>
//         <Image src={alienware} width={136} height={136} alt=''/>
//         <Image src={adhua} width={136} height={136} alt=''/>
//         <Image src={tplink} width={136} height={136} alt=''/>
//         <Image src={samsung} width={136} height={136} alt=''/>
//         <Image src={msi} width={136} height={136} alt=''/>
//         <Image src={razor} width={136} height={136} alt=''/>
//         <Image src={microsof} width={136} height={136} alt=''/>
//         <Image src={lg} width={136} height={136} alt=''/>
//         <Image src={intell} width={136} height={136} alt=''/>
//         <Image src={lenovo} width={136} height={136} alt=''/>
//         <Image src={apple} width={136} height={136} alt=''/>

//       </div>
//     </div>
//   )
// }

// export default Brands
