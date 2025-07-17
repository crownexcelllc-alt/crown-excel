import React from 'react'
import Allinone1 from '../../../../../Components/Images/allinonedesktop1.png'
import Allinone2 from '../../../../../Components/Images/allinonedesktop2.png'
import Allinone3 from '../../../../../Components/Images/allinonedesktop3.png'
import Allinone4 from '../../../../../Components/Images/allinonedesktop4.png'
import Allinone5 from '../../../../../Components/Images/allinonedesktop5.png'
import Allinone6 from '../../../../../Components/Images/allinonedesktop6.png'
import Image from 'next/image'
const AllinOneDesktops = () => {
    const Business = [
        { Image: Allinone1, title: 'ASUS EXPERT CENTER D700 SC', desc: 'ASUS EXPERT CENTER D700 SC best for business use with optimized speed .' },
        { Image: Allinone2, title: 'Lenovo M70q G4 Tiny', desc: 'The Lenovo M70q G4 Tiny is a compact yet powerful desktop computer designed for optimal performance and space-saving efficiency.' },
        { Image: Allinone3, title: 'Acer Veriton VS', desc: 'The Acer Veriton VS2690G Desktop Tower is the perfect choice for anyone in need of a reliable and efficient computer.' },
    ]
    const Individuals = [
        { Image: Allinone4,title: 'DELL OPTIPLEX 3000', desc: 'Introducing the Dell OptiPlex 3000 MT (DTDELLOPT3000I54256GBD), a dependable desktop solution.'},
        { Image: Allinone5,title: 'HP 290 G3 Small', desc: 'Introducing the HP 290 G3 Small Form Factor PC Bundle, the perfect choice for all your computing needs.'},
        { Image: Allinone6,title: 'Dell Alienware Aurora', desc: 'The Dell Alienware Aurora R15 Gaming Desktop is the ultimate choice for any gaming enthusiast.'},
    ]
    return (
        <div className='mt-20 lg:mt-0 '>
            <h1 className='text-[24px] lg:text-[50px] leading-[30px] lg:leading-[60px] font-[700] text-black text-montserrat text-center'>The Best All-in-one Desktops <br /> For Space-Saving Power</h1>
            <div className="allinone-bottom">
                <div className="allinone-bottom-top mt-10">
                    <div className="title-button flex flex-col lg:flex-row items-center justify-between px-5 mt-10">
                        <h1 className='text-[30px] lg:text-[50px] leading-[30px] lg:leading-[50px] font-[600] font-montserrat text-[#147d61]'>For Businesses:</h1>
                        <button className='bg-[#ffd900] mt-5 lg:mt-0 p-[10px] rounded-[10px] text-black text-[20px] font-[500] leading-[20px] font-montserrat' style={{ boxShadow: '4px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}>Visit Out Store</button>
                    </div>
                    <div className="cards flex flex-col lg:flex-row items-center justify-center gap-25 lg:gap-15 mt-30 px-3 lg:px-0">
                        {Business.map((item, i) => (
                            <div className="card-1 bg-[#ececec] flex flex-col items-center w-full lg:w-[311px] h-auto lg:h-[475px] rounded-[30px]" style={{ padding: '30px' }} key={i}>
                                <Image alt='' className='-mt-20' src={item.Image} width={251} height={251} />
                                <h2 className="text-[20px] lg:text-[26px] mt-10 text-center font-[800] leading-[34px]   font-montserrat text-black uppercase mb-3">
                                    {item.title}
                                </h2>
                                <p className=" text-[#222] text-center text-[16px] leading-[27px] mt-1 font-montserrat">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="allinone-bottom-bottom mt-20">
                    <div className="title-button flex flex-col lg:flex-row items-center justify-between px-5 mt-10">
                        <h1 className='text-[30px] lg:text-[50px] leading-[30px] lg:leading-[50px] font-[600] font-montserrat text-[#147d61]'>For Individuals:</h1>
                        <button className='bg-[#ffd900] mt-5 lg:mt-0 p-[10px] rounded-[10px] text-black text-[20px] font-[500] leading-[20px] font-montserrat' style={{ boxShadow: '4px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}>Visit Out Store</button>
                    </div>
                    <div className="cards flex flex-col lg:flex-row items-center justify-center gap-25 lg:gap-15 mt-30 px-3 lg:px-0">
                        {Individuals.map((item, i) => (
                            <div className="card-1 bg-[#ececec] flex flex-col items-center w-full lg:w-[311px] h-auto lg:h-[475px] rounded-[30px]" style={{ padding: '30px' }} key={i}>
                                <Image alt='' className='-mt-20' src={item.Image} width={251} height={251} />
                                <h2 className="text-[20px] lg:text-[26px] mt-10 text-center font-[800] leading-[34px]   font-montserrat text-black uppercase mb-3">
                                    {item.title}
                                </h2>
                                <p className=" text-[#222] text-center text-[16px] leading-[27px] mt-1 font-montserrat">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllinOneDesktops
