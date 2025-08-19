'use client'
import React, { useEffect, useState } from 'react'
import ContactUs from '../../../../Components/Images/contactus.jpg'
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
const ContactUsFindUs = () => {
    const [settings, setSettings] = useState({
        phone: '+971 4-354 0566',
        email: 'contact@crownexcel.com',
        address: 'Al Jahra Building, 2nd floor, 18th St – Al Raffa – Dubai',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: ''
    });
    console.log('logo', settings?.logo)

    useEffect(() => {
        // Fetch settings from API
        fetch('/api/settings/public')
            .then(res => res.json())
            .then(data => {
                if (data && typeof data === 'object') {
                    setSettings(prev => ({ ...prev, ...data }));
                }
            })
            .catch(err => {
                console.warn('Could not load settings:', err);
            });
    }, []);
    return (
        <div className='flex flex-col md:flex-col lg:flex-row lg:items-center py-10 md:py-[120px] px-5 md:px-20 lg:px-10 gap-10 md:gap-20'>
            <div className="finus-left flex items-center justify-center">
                <Image alt='' src={ContactUs} width={595} height={574} className='rounded-[10px]' />
            </div>
            <div className="finus-right flex flex-col gap-5">
                <div className="heading">
                    <h1 className='text-[#084032] font-[800] text-[36px]'>Find Us</h1>
                </div>
                <div className="location flex flex-col">
                    <div className="location-para flex items-center gap-2">
                        <IoLocationOutline className='text-[#084032]' />
                        <p className='text-[16px] leading-[27.2px] text-black'>{settings?.address}</p>
                    </div>
                    <div className="location-para flex items-center gap-2">
                        <MdMailOutline className='text-[#084032]' />
                        <p className='text-[16px] leading-[27.2px] text-black'>{settings?.email}</p>
                    </div>
                    <div className="location-para flex items-center gap-2">
                        <FiPhoneCall className='text-[#084032]' />
                        <p className='text-[16px] leading-[27.2px] text-black'>{settings?.phone}</p>
                    </div>
                </div>
                <div className="social-media-icons flex items-center gap-2">
                    <div className="border border-black h-[60px] w-[60px] rounded-full text-[25px] flex items-center justify-center">
                        {settings.facebook && (
                            <Link href={settings.facebook}>
                                <IoLogoFacebook className="text-[#084032]" />
                            </Link>
                        )}

                    </div>
                    <div className="border border-black h-[60px] w-[60px] rounded-full text-[25px] flex items-center justify-center">
                        {settings.twitter && (
                            <Link href={settings.twitter}>
                                <FaTwitter className="text-[#084032]" />
                            </Link>
                        )}
                    </div>
                    <div className="border border-black h-[60px] w-[60px] rounded-full text-[25px] flex items-center justify-center">
                        {settings.twitter && (
                            <Link href={settings.twitter}>
                                <FaInstagram className="text-[#084032]" />
                            </Link>
                        )}
                    </div>
                    <div className="border border-black h-[60px] w-[60px] rounded-full text-[25px] flex items-center justify-center">
                        {settings.linkedin && (
                            <Link href={settings.linkedin}>
                                <FaLinkedin className="text-[#084032]" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsFindUs
