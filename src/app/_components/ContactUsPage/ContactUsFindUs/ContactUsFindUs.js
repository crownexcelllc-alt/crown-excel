'use client'
import React, { useEffect, useState } from 'react'
import ContactUs from '../../../../Components/Images/contact.jpg'
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { FaX } from 'react-icons/fa6';
import { XLogoIcon } from '@phosphor-icons/react';
import { InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { FaYoutube, FaPinterest, FaTiktok, FaTelegramPlane, FaSnapchatGhost, FaWhatsapp, FaReddit } from 'react-icons/fa';
import { BsThreads } from 'react-icons/bs'; // Bootstrap icon as alternative placeholder


const ContactUsFindUs = () => {
    const [settings, setSettings] = useState({
        phone: '+971 4-354 0566',
        email: 'contact@crownexcel.com',
        address: 'Al Jahra Building, 2nd floor, 18th St – Al Raffa – Dubai',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: '',
        youtube: '',
        pinterest: '',
        tiktok: '',
        telegram: '',
        snapchat: ''
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
    const SocialIcon = ({ href, children }) => (
        <div className="border border-black h-[60px] w-[60px] rounded-full text-[25px] flex items-center justify-center">
            <Link href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        </div>
    );

    return (
        <div className='flex flex-col md:flex-col lg:flex-row lg:items-center py-10 md:py-[120px] px-5 md:px-20 lg:px-10 gap-10 md:gap-20'>
            <div className="finus-left flex items-center justify-center">
                <Image alt='' src={ContactUs} width={1000} height={800} className='rounded-[10px] w-[600px] h-[380px]' />
            </div>
            <div className="finus-right flex flex-col gap-5">
                <div className="heading">
                    <h1 className='text-[#084032] font-[800] text-[36px]'>Find Us</h1>
                </div>
                <div className="location flex flex-col">
                    <div className="location-para flex items-start gap-3 mb-3">
                        <IoLocationOutline className='text-[#084032] text-[20px] mt-1 flex-shrink-0' />
                        <p className='text-[16px] leading-[27.2px] text-black'>{settings?.address}</p>
                    </div>
                    <div className="location-para flex items-start gap-3 mb-3">
                        <IoLocationOutline className='text-[#084032] text-[20px] mt-1 flex-shrink-0' />
                        <p className='text-[16px] leading-[27.2px] text-black'>
                            Shop No. 2 - Building 716 Khalid Bin Al Waleed Rd - opposite Main Entrance of Admiral Plaza Hotel - Bur Dubai - Al Souq Al Kabeer - Dubai - United Arab Emirates
                        </p>
                    </div>
                    <div className="location-para flex items-start gap-3 mb-3">
                        <IoLocationOutline className='text-[#084032] text-[20px] mt-1 flex-shrink-0' />
                        <p className='text-[16px] leading-[27.2px] text-black'>
                            Admiral Plaza Hotel Building - 37C Street - Shop 5 - Khalid Bin Al Waleed Rd - Bur Dubai - Dubai - United Arab Emirates
                        </p>
                    </div>
                    <div className="location-para flex items-center gap-3 mb-2">
                        <MdMailOutline className='text-[#084032] text-[20px] flex-shrink-0' />
                        <p className='text-[16px] leading-[27.2px] text-black'>{settings?.email}</p>
                    </div>
                    <div className="location-para flex items-center gap-3">
                        <FiPhoneCall className='text-[#084032] text-[20px] flex-shrink-0' />
                        <p className='text-[16px] leading-[27.2px] text-black'>{settings?.phone}</p>
                    </div>
                </div>
                <div className="social-media-icons flex flex-wrap items-center gap-2 mt-4">
                    {settings.facebook && (
                        <SocialIcon href={settings.facebook}><IoLogoFacebook className="text-[#084032]" /></SocialIcon>
                    )}

                    {settings.twitter && (
                        <SocialIcon href={settings.twitter}><XLogoIcon className="text-[#084032]" /></SocialIcon>
                    )}

                    {settings.instagram && (
                        <SocialIcon href={settings.instagram}><InstagramLogo className="text-[#084032]" /></SocialIcon>
                    )}

                    {settings.linkedin && (
                        <SocialIcon href={settings.linkedin}><LinkedinLogo className="text-[#084032]" /></SocialIcon>
                    )}

                    {settings.youtube && (
                        <SocialIcon href={settings.youtube}><FaYoutube className="text-[#084032]" /></SocialIcon>
                    )}

                    {settings.pinterest && (
                        <SocialIcon href={settings.pinterest}><FaPinterest className="text-[#084032]" /></SocialIcon>
                    )}

                    {settings.tiktok && (
                        <SocialIcon href={settings.tiktok}><FaTiktok className="text-[#084032]" /></SocialIcon>
                    )}

                    {settings.telegram && (
                        <SocialIcon href={settings.telegram}><FaTelegramPlane className="text-[#084032]" /></SocialIcon>
                    )}

                    {settings.snapchat && (
                        <SocialIcon href={settings.snapchat}><FaSnapchatGhost className="text-[#084032]" /></SocialIcon>
                    )}
                    {settings.whatsapp && (
                        <SocialIcon href={settings.whatsapp}><FaWhatsapp  className="text-[#084032]" /></SocialIcon>
                    )}
                    {settings.threads && (
  <SocialIcon href={settings.threads}><BsThreads className="text-[#084032]" /></SocialIcon>
)}

                    {settings.reddit && (
                        <SocialIcon href={settings.reddit}><FaReddit  className="text-[#084032]" /></SocialIcon>
                    )}
                </div>


            </div>
        </div>
    )
}

export default ContactUsFindUs
