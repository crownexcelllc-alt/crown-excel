import React from 'react'
import ContactUs from '../../../../Components/Images/contactus.jpg'
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactUsFindUs = () => {
    return (
        <div className='flex flex-col md:flex-col lg:flex-row lg:items-center py-10 md:py-[120px] px-5 md:px-20 lg:px-10 gap-10 md:gap-20'>
            <div className="finus-left flex items-center justify-center">
                <Image alt='' src={ContactUs} width={595} height={574} className='rounded-[10px]'/>
            </div>
            <div className="finus-right flex flex-col gap-5">
                <div className="heading">
                    <h1 className='text-[#084032] font-[800] text-[36px]'>Find Us</h1>
                </div>
                <div className="location flex flex-col">
                    <div className="location-para flex items-center gap-2">
                        <IoLocationOutline className='text-[#084032]' />
                        <p className='text-[16px] leading-[27.2px] text-black'>Al Jahra Building, 2nd floor, 18th St - Al Raffa - Dubai</p>
                    </div>
                    <div className="location-para flex items-center gap-2">
                        <MdMailOutline className='text-[#084032]' />
                        <p className='text-[16px] leading-[27.2px] text-black'>wholesale@crownexcel.ae</p>
                    </div>
                    <div className="location-para flex items-center gap-2">
                        <FiPhoneCall className='text-[#084032]' />
                        <p className='text-[16px] leading-[27.2px] text-black'>(+971) 4-354 0566</p>
                    </div>
                </div>
                <div className="social-media-icons flex items-center gap-2">
                    <div className="border border-black h-[60px] w-[60px] rounded-full text-[25px] flex items-center justify-center">
                        <IoLogoFacebook className="text-[#084032]" />
                    </div>
                    <div className="border border-black h-[60px] w-[60px] rounded-full text-[25px] flex items-center justify-center">
                        <FaTwitter className="text-[#084032]" />
                    </div>
                    <div className="border border-black h-[60px] w-[60px] rounded-full text-[25px] flex items-center justify-center">
                        <FaInstagram className="text-[#084032]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsFindUs
