import React from 'react';
import Popular1 from '@/Components/Images/bestsellingphone1.png';
import Popular2 from '@/Components/Images/allinonephones2.png';
import Popular3 from '@/Components/Images/allinonephones3.png';
import Popular4 from '@/Components/Images/allinonephones4.png';
import Popular5 from '@/Components/Images/allinonephones5.png';
import Image from 'next/image';
import Link from 'next/link';

const Commercial = [
    { Image: Popular1, Title: 'Hikvision 4MP IP Network Camera' },
    { Image: Popular2, Title: 'Hikvision Outdoor Bullet Camera' },
    { Image: Popular3, Title: 'XVIM 8CH 1080P DVR Surveillance Kit' },
];

const Residential = [
    { Image: Popular4, Title: 'Hikvision PTZ Dome Security Camera' },
    { Image: Popular5, Title: 'Hikvision Outdoor Night Vision' },
    { Image: Popular2, Title: 'Hikvision Weatherproof Security Bullet' },
];

const AllinOneCCTV = () => {
    return (
        <div className='mt-5 lg:mt-10'>
            <h2 className='bg-[#ffd900] font-[700] flex items-center justify-center w-full h-[90px] text-center text-black text-[20px] md:text-[40px] lg:text-[50px] font-montserrat uppercase'>
                ALL-IN-ONE CCTV & SECURITY SOLUTIONS
            </h2>
            <div className="for- mt-5 lg:mt-10">
                <div className="text-button flex md:flex-row lg:flex-row flex-col items-center justify-between px-6 lg:px-20 py-7">
                    <h3 className='text-[#147d61] text-[27px] lg:text-[50px] font-[600] font-montserrat'>For Commercial & Enterprise:</h3>
                    <Link href="/contact-us" className="inline-flex items-center justify-center whitespace-nowrap font-montserrat font-semibold text-[15px] sm:text-[16px] lg:text-[17px] tracking-wide text-white bg-[#147d61] hover:bg-[#0e5d47] h-[48px] lg:h-[50px] px-6 lg:px-8 rounded-xl shadow-md shadow-[#147d61]/20 hover:shadow-lg hover:shadow-[#147d61]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-in-out mt-4 md:mt-0">
                        Inquire Bulk Orders
                    </Link>
                </div>
                <div className="products flex flex-col md:flex-row lg:flex-row items-center justify-around gap-10 lg:gap-0 lg:px-20 py-7" style={{
                    background: 'linear-gradient(to left, #000000 0%, #1a1a1a 50%, #2b2b2b 100%)'
                }}>
                    {Commercial.map((item, i) => (
                        <div className="product-item flex flex-col items-center md:w-[250px] lg:w-[285px] h-auto" key={i}>
                            {item.Image && <Image className='w-full h-[285px] object-contain' src={item.Image} alt={item.Title} width={285} height={285} />}
                            {item.Title && <h4 className='text-[20px] lg:text-[24px] font-[700] mt-5 w-[285px] text-center text-white font-montserrat'>{item.Title}</h4>}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="for- mt-10">
                <div className="text-button flex md:flex-row lg:flex-row flex-col items-center justify-between px-6 lg:px-20 py-7">
                    <h3 className='text-[#147d61] text-[27px] lg:text-[50px] font-[600] font-montserrat'>For Residential & Small Business:</h3>
                    <Link href="/contact-us" className="inline-flex items-center justify-center whitespace-nowrap font-montserrat font-semibold text-[15px] sm:text-[16px] lg:text-[17px] tracking-wide text-white bg-[#147d61] hover:bg-[#0e5d47] h-[48px] lg:h-[50px] px-6 lg:px-8 rounded-xl shadow-md shadow-[#147d61]/20 hover:shadow-lg hover:shadow-[#147d61]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-in-out mt-4 md:mt-0">
                        Get Wholesale Price
                    </Link>
                </div>
                <div className="products flex flex-col md:flex-row lg:flex-row items-center gap-10 lg:gap-0 justify-around lg:px-20 py-7" style={{
                    background: 'linear-gradient(to left, #000000 0%, #1a1a1a 50%, #2b2b2b 100%)'
                }}>
                    {Residential.map((item, i) => (
                        <div className="product-item flex flex-col items-center md:w-[250px] lg:w-[285px] h-auto" key={i}>
                            {item.Image && <Image className='w-full h-[285px] object-contain' src={item.Image} alt={item.Title} width={285} height={285} />}
                            {item.Title && <h4 className='text-[20px] lg:text-[24px] font-[700] mt-5 w-[285px] text-center text-white font-montserrat'>{item.Title}</h4>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllinOneCCTV;
