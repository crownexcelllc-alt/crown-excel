import React from 'react'
import OurManagementBanner from '../_components/OurManagement/OurManagementBanner/OurManagementBanner'
import OurManagementKnowmore from '../_components/OurManagement/OurManagementKnowmore/OurManagementKnowmore'
import OurManagementTeam from '../_components/OurManagement/OurManagementTeam/OurManagementTeam'
import OurManagementProcess from '../_components/OurManagement/OurManagementProcess/OurManagementProcess'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/our-management', {
    title: 'Our Management | Crown Excel',
    description: 'Learn about the leadership and management team behind Crown Excel IT Solutions.',
  });
}

const OurManagement = () => {
  return (
    <div>
      <OurManagementBanner/>
      <OurManagementKnowmore/>
      <OurManagementTeam/>
      <OurManagementProcess/>
    </div>
  )
}

export default OurManagement
