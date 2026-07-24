import ServerSmart from '@/app/_components/OurServicesPages/ServerSupport/ServerSmart/ServerSmart'
import ServerSupportBanner from '@/app/_components/OurServicesPages/ServerSupport/ServerSupportBanner/ServerSupportBanner'
import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/our-services/storage&virtualization', {
    title: 'Storage & Virtualization Solutions | Crown Excel',
    description: 'SAN/NAS storage solutions, server virtualization, and data management in Dubai.',
  });
}

const ServerSupport = () => {
  return (
    <div>
        <ServerSupportBanner/>
        <ServerSmart/>
        {/* <ServerEmpowering/>
        <ServerWhyChooseUs/>
        <ServerServices/>
        <ServerWeAreBest/>
        <ServerFaq/> */}
    </div>
  )
}

export default ServerSupport
