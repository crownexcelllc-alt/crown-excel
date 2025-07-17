import React from 'react'
import Popular1 from '../../../../../Components/Images/Popular1.png'
import Popular2 from '../../../../../Components/Images/Popular2.png'
import Popular3 from '../../../../../Components/Images/Popular3.png'
import Popular4 from '../../../../../Components/Images/Popular4.png'
import Popular5 from '../../../../../Components/Images/Popular5.png'
import Popular6 from '../../../../../Components/Images/Popular6.png'
import Image from 'next/image'

const Business = [
    { Image: Popular1, Title: 'ACER ASPIRE 3 A315' },
    { Image: Popular2, Title: 'ACER ASPIRE 3 A315' },
    { Image: Popular3, Title: 'ACER ASPIRE 3 A315' },
]
const Individuals = [
    { Image: Popular4, Title: 'ACER ASPIRE 3 A315' },
    { Image: Popular5, Title: 'ACER ASPIRE 3 A315' },
    { Image: Popular6, Title: 'ACER ASPIRE 3 A315' },
]

const AllInOne = () => {
    return (
        <div className='mt-5 lg:mt-10'>
            <h1 className='bg-[#ffd900] font-[700] flex items-center justify-center w-full h-[90px] text-center text-black text-[24px] lg:text-[50px] font-montserrat uppercase'>Popular all-in-one solutions</h1>
            <div className="for- mt-5 lg:mt-10">
                <div className="text-button flex lg:flex-row flex-col items-center justify-between px-20 py-7">
                    <h1 className='text-[#147d61] text-[27px] lg:text-[50px] font-[600]'>For Businesses:</h1>
                    <button className='p-[5px] lg:p-[10px] mt-5 lg:mt-0 bg-[#147d61] text-white flex items-center justify-center text-[18px] lg:text-[20px] font-[500] w-[166px] h-[40px] rounded-[10px]'>Visit Our Store</button>
                </div>
                <div className="products flex flex-col lg:flex-row items-center justify-between px-20 py-7" style={{
                    background: 'linear-gradient(to left, #000000 0%, #1a1a1a 50%, #2b2b2b 100%)'
                }}
                >
                    {Business.map((item, i) => (
                        <div className="product-item flex flex-col items-center   w-[285px] h-[297px]" key={i}>
                            {item.Image  && <Image className='w-full h-[190px]' src={item.Image} alt={item.Title} width={285} height={190} />}
                            {item.Title && <h1 className='text-[26px] font-[700] mt-5 w-[285px] text-center '>{item.Title}</h1>}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="for- mt-10">
                <div className="text-button flex lg:flex-row flex-col items-center justify-between px-20 py-7">
                    <h1 className='text-[#147d61] text-[27px] lg:text-[50px] font-[600]'>For Individuals:</h1>
                    <button className='p-[5px] lg:p-[10px] mt-5 lg:mt-0 bg-[#147d61] text-white flex items-center justify-center text-[18px] lg:text-[20px] font-[500] w-[166px] h-[40px] rounded-[10px]'>Visit Our Store</button>
                </div>
                <div className="products flex flex-col lg:flex-row items-center justify-between px-20 py-7" style={{
                    background: 'linear-gradient(to left, #000000 0%, #1a1a1a 50%, #2b2b2b 100%)'
                }}
                >
                    {Individuals.map((item, i) => (
                        <div className="product-item flex flex-col items-center   w-[285px] h-[297px]" key={i}>
                            {item.Image  && <Image className='w-full h-[190px]' src={item.Image} alt={item.Title} width={285} height={190} />}
                            {item.Title && <h1 className='text-[26px] font-[700] mt-5 w-[285px] text-center '>{item.Title}</h1>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllInOne
