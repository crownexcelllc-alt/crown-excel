import React from 'react'
import ContactUsPageBanner from '../_components/ContactUsPage/ContactUsPageBanner/ContactUsPageBanner'
import ContactUsForm from '../_components/ContactUsPage/ContactUsForm/ContactUsForm'
import ContactUsMap from '../_components/ContactUsPage/ContactUsMap/ContactUsMap'
import AppointmentSection from '../_components/ContactUsPage/AppointmentSection/AppointmentSection'
import { getApiBase } from '@/lib/api-helper'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/contact-us', {
    title: 'Contact Us | Crown Excel',
    description: 'Get in touch with Crown Excel for IT hardware, server support, networking solutions, and tech inquiries in Dubai and UAE.',
  });
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ContactUs = async () => {
  const apiBase = getApiBase();
  let appointmentLinks = [];

  try {
    const res = await fetch(`${apiBase}/api/appointments`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      appointmentLinks = data.links || [];
    }
  } catch (err) {
    console.error('Failed to fetch appointment links:', err);
  }

  return (
    <div>
      <ContactUsPageBanner/>
       <div className="header text-center">
        <h1 className='text-[32px] text-black mt-5 lg:text-[32px] font-montserrat font-[600]'>Contact us</h1>
      </div>
      <ContactUsForm/>
      <AppointmentSection links={appointmentLinks} />
      <ContactUsMap/>
    </div>
  )
}

export default ContactUs
