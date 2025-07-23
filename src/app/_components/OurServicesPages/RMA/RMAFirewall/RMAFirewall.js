import Image from 'next/image'
import React from 'react'
import Background from '../../../../../Components/Images/ProductsBrandBackground.png'
import Semitop from '../../../../../Components/Images/semicirlcetop.png' 
import Semibottom from '../../../../../Components/Images/semicirlcebottom.png' 

const RMAFirewall = () => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <div className="heading-text relative my-10 mx-5 md:mx-0">
                <Image alt='' src={Semitop} width={122} height={61} className='absolute -top-15.25 -right-10 lg:-top-15.25 lg:-right-10'/>
                <h1 className='bg-[#119472] rounded text-white text-[20px] md:text-[44px] lg:text-[44px] font-[700] font-montserrat px-10 py-2 md:px-[50px] md:py-[15px] lg:px-[50px] lg:py-[15px] h-[50px] md:h-[74px] lg:h-[74px] flex items-center justify-center'>FIREWALL SETUP</h1>
                <Image alt='' src={Semibottom} width={122} height={61} className='absolute -bottom-15.25 -left-10  lg:-bottom-15.25 lg:-left-10'/>
            </div>
            <div
                className="w-full min-h-[320px] md:min-h-[279px] relative mt-10 flex items-center justify-center overflow-hidden"
                style={{
                    background: 'linear-gradient(90deg, #54595f 0%, #232426 70%, #18191b 100%)',
                }}
            >
                {/* Overlay background image with blend for dots/stars */}
                <div className="absolute z-0 right-0 top-50 w-full  pointer-events-none select-none h-[100px]" style={{ mixBlendMode: 'screen', opacity: 0.7 }}>
                    <Image alt='' src={Background} fill style={{ objectFit: 'cover', objectPosition: 'right' }} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-col items-center  w-full max-w-[1400px] px-4 md:px-20 py-8 md:py-0 ">


                    <div className="text-area-firwall  p-[20px] md:p-[50px]  text-center  ">
                        <p>Firewall setup is a critical part of network security, acting as a barrier between your internal network and potential external threats. It monitors and controls incoming and outgoing network traffic based on predetermined security rules. By doing so, it helps prevent unauthorized access, cyberattacks, and malware from infiltrating your network.</p>
                        <br />
                        <p>Our team specializes in configuring firewalls to meet the specific needs of your business. We analyze your security requirements and implement tailored solutions to ensure that your data, resources, and sensitive information are always protected. This involves setting up proper access control, threat detection, and blocking malicious traffic, so your network remains secure and operational at all times.</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default RMAFirewall
