import React from 'react';
import Phone1 from '@/Components/Images/allinonephones1.png';
import Phone2 from '@/Components/Images/allinonephones6.png';
import Phone3 from '@/Components/Images/bestsellingphone2.png';
import Image from 'next/image';
import Link from 'next/link';

const Business = [
    { Image: Phone1, Title: 'Apple iPhone 16 128GB' },
    { Image: Phone2, Title: 'Samsung Galaxy S24 Ultra' },
    { Image: Phone3, Title: 'Apple iPhone 16 Pro' },
];

const Individuals = [
    { Image: Phone2, Title: 'Samsung Galaxy S24 Ultra' },
    { Image: Phone1, Title: 'Apple iPhone 16' },
    { Image: Phone3, Title: 'Apple iPhone 16 Dual-SIM' },
];

const AllinOnePhones = () => {
    return (
        <div className='mt-5 lg:mt-10'>
            <h2 className='bg-[#ffd900] font-[700] flex items-center justify-center w-full h-[90px] text-center text-black text-[20px] md:text-[40px] lg:text-[50px] font-montserrat uppercase'>
                ALL-IN-ONE PHONE SOLUTIONS
            </h2>
            <div className="for- mt-5 lg:mt-10">
                <div className="text-button flex md:flex-row lg:flex-row flex-col items-center justify-between px-6 lg:px-20 py-7">
                    <h3 className='text-[#147d61] text-[27px] lg:text-[50px] font-[600] font-montserrat'>For Businesses:</h3>
                    <Link href="https://www.grabatoz.ae/ae-en" className='p-[5px] lg:p-[10px] mt-5 lg:mt-0 bg-[#147d61] hover:bg-[#0f5f4a] text-white flex items-center justify-center text-[18px] lg:text-[20px] font-[500] w-[180px] h-[45px] rounded-[10px] transition-all'>
                        Visit Our Store
                    </Link>
                </div>
                <div className="products flex flex-col md:flex-row lg:flex-row items-center justify-around gap-10 lg:gap-0 lg:px-20 py-7" style={{
                    background: 'linear-gradient(to left, #000000 0%, #1a1a1a 50%, #2b2b2b 100%)'
                }}>
                    {Business.map((item, i) => (
                        <div className="product-item flex flex-col items-center md:w-[250px] lg:w-[285px] h-auto" key={i}>
                            {item.Image && <Image className='w-full h-[285px] object-contain' src={item.Image} alt={item.Title} width={285} height={285} />}
                            {item.Title && <h4 className='text-[20px] lg:text-[24px] font-[700] mt-5 w-[285px] text-center text-white font-montserrat'>{item.Title}</h4>}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="for- mt-10">
                <div className="text-button flex md:flex-row lg:flex-row flex-col items-center justify-between px-6 lg:px-20 py-7">
                    <h3 className='text-[#147d61] text-[27px] lg:text-[50px] font-[600] font-montserrat'>For Retailers & Resellers:</h3>
                    <Link href="/contact-us" className='p-[5px] lg:p-[10px] mt-5 lg:mt-0 bg-[#147d61] hover:bg-[#0f5f4a] text-white flex items-center justify-center text-[18px] lg:text-[20px] font-[500] w-[180px] h-[45px] rounded-[10px] transition-all'>
                        Get Wholesale Price
                    </Link>
                </div>
                <div className="products flex flex-col md:flex-row lg:flex-row items-center gap-10 lg:gap-0 justify-around lg:px-20 py-7" style={{
                    background: 'linear-gradient(to left, #000000 0%, #1a1a1a 50%, #2b2b2b 100%)'
                }}>
                    {Individuals.map((item, i) => (
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

export default AllinOnePhones;
