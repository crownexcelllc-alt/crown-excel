import React from 'react'
import ImgOne from '../../../Components/Images/trusted1.png'
import ImgTwo from '../../../Components/Images/trusted2.png'
import ImgThree from '../../../Components/Images/trusted3.png'
import Image from 'next/image'
import Link from 'next/link'
import { safeRender, safeImage } from '@/lib/safe-html'

const TrustedPartner = ({ cmsData }) => {
    const heading = cmsData?.fields?.heading || cmsData?.heading;
    const paragraph = cmsData?.fields?.paragraph || cmsData?.paragraph;
    const heading2 = cmsData?.fields?.heading_2 || cmsData?.heading_2;
    const paragraph2 = cmsData?.fields?.paragraph_2 || cmsData?.paragraph_2;
    const paragraph3 = cmsData?.fields?.paragraph_3 || cmsData?.paragraph_3;

    const imgOneSrc = safeImage(cmsData?.fields?.image_imgone || cmsData?.image_imgone, ImgOne);
    const imgTwoSrc = safeImage(cmsData?.fields?.image_imgtwo || cmsData?.image_imgtwo, ImgTwo);
    const imgThreeSrc = safeImage(cmsData?.fields?.image_imgthree || cmsData?.image_imgthree, ImgThree);

    const defaultHeading = "Trusted Partner for Tech Solutions";
    const defaultParagraph = "Crown Excel delivers top-tier technology solutions for businesses and individuals, providing reliable hardware and IT services backed by more than 15 years of excellence and over 17,000 satisfied customers. Crown Excel Provide IT Hardware supplier, It hardware reseller solutions, whole sale products for businesses and consumers in Dubai UAE. Our mission is to provide the best expert IT services. Crown Excel is your trusted partner for quality product, and reliable services.";
    const defaultHeading2 = "Your Trusted Partner for Premium Tech Solutions";
    const defaultParagraph2 = "With over 15 years of excellence and 17,000 satisfied customers, Crown Excel delivers top-tier technology solutions for both businesses and individuals.";
    const defaultParagraph3 = "From premium laptops and gaming systems to cutting-edge hardware, we deliver innovation, performance and exceptional service. Our mission is to provide the latest technology at unbeatable rates, ensuring top performance and value with every purchase.\n\nWhether you're upgrading office equipment or building a custom gaming rig, Crown Excel is your trusted partner for quality, performance, and satisfaction.";

    return (
        <div className="w-full bg-[#FFFFFF] overflow-hidden">
            <section id="trusted-partner" className="trusted-partner-section relative w-full max-w-[1536px] mx-auto bg-[#FFFFFF] overflow-hidden">
                <div className="trusted-partner-large-screen hidden lg:flex w-full flex-col lg:flex-row items-center lg:items-start justify-center">
                    <div className="container w-full flex flex-col lg:flex-row items-center justify-center gap-8" style={{ paddingBottom: '10px' }}>
                        <div className="left-part text-black w-full lg:w-2/5 mb-8 lg:mb-0">
                            <h1 className="font-semibold font-roboto text-[58px] sm:text-5xl lg:text-5xl leading-[58px] text-center lg:text-left">
                                {safeRender(heading, defaultHeading)}
                            </h1>
                            <p className="text-[16] font-montserrat leading-[27px] text-center lg:text-left" style={{ marginTop: '20px' }}>
                                {safeRender(paragraph, defaultParagraph)}
                            </p>
                        </div>
                        <div className="right-part relative w-full lg:w-3/5 flex flex-col gap-8">
                            <div className="right-top w-full mt-10">
                                <Image src={imgOneSrc} alt="Trusted Partner 1" className="rounded-[30px] w-full max-w-[660px] h-[348px] object-cover" width={640} height={448} />
                            </div>
                            <div className="right-bottom w-full flex flex-col sm:flex-row gap-6">
                                <div className="first-img w-full sm:w-1/2">
                                    <Image src={imgTwoSrc} alt="Trusted Partner 2" className="rounded-[30px] w-full max-w-[322px] h-[157px] object-cover" width={322} height={217} />
                                </div>
                                <div className="second-img w-full sm:w-1/2 mt-6 sm:mt-0">
                                    <Image src={imgThreeSrc} alt="Trusted Partner 3" className="rounded-[30px] w-full max-w-[322px] h-[157px] object-cover" width={322} height={217} />
                                </div>
                            </div>
                            <Link href={'/company/about-us'} aria-label='Explore more about our company' className="arrow-icon hidden md:flex absolute bg-[#084032] w-20 h-20 rounded-full items-center justify-center text-white text-4xl cursor-pointer top-92 left-75 z-10 transition-all duration-300">
                                <span aria-hidden="true">{"->"}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="small-screen lg:hidden flex flex-col w-full md:items-center text-black">
                    <div className="small-top flex items-end justify-between w-full gap-2" style={{ padding: '20px' }}>
                        <div className="sm-top-left flex flex-col gap-3 columns-1 w-[50%] md:mb-0">
                            <h2 className='text-[22px] md:text-[58px] font-bold leading-[22px] md:leading-[58px] font-roboto'>
                                {safeRender(heading2, defaultHeading2)}
                            </h2>
                            <p className='text-[12px] md:text-[16px] leading-[20px] font-montserrat'>
                                {safeRender(paragraph2, defaultParagraph2)}
                            </p>
                        </div>
                        <div className="sm-top-right gap-3 flex flex-col columns-1 w-[50%]">
                            <Image className='w-[185px] h-[123px] md:w-full md:h-[300px] md:rounded-none rounded-[10px]' width={185} alt='Trusted technology workspace' height={123} src={imgOneSrc} />
                            <Image className='w-[185px] h-[123px] md:w-full md:h-[300px] md:rounded-none rounded-[10px]' width={185} alt='Crown Excel team collaboration' height={123} src={imgTwoSrc} />
                        </div>
                    </div>
                    <div className="small-bottom" style={{ padding: '0px 20px 20px 20px' }}>
                        <p className='text-[12px] md:text-[16px] leading-[20px] font-montserrat whitespace-pre-line'>
                            {safeRender(paragraph3, defaultParagraph3)}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrustedPartner



