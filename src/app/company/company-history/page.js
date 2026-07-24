import CompanyHistoryBanner from '@/app/_components/CompanyHistory/CompanyHistoryBanner/CompanyHistoryBanner'
import CompanyHistoryYears from '@/app/_components/CompanyHistory/CompanyHistoryYears/CompanyHistoryYears'
import CompanyHistroyBackground from '@/app/_components/CompanyHistory/CompanyHistroyBackground/CompanyHistroyBackground'
import React from 'react'
import { generateCmsMetadata } from '@/lib/cms-fetch';

export async function generateMetadata() {
  return await generateCmsMetadata('/company/company-history', {
    title: 'Company History | Crown Excel',
    description: 'Discover the journey, milestones, and history of Crown Excel IT Solutions.',
  });
}

export default function CompanyHistoryPage() {
  return (
    <div>
      <CompanyHistoryBanner/>
      <CompanyHistroyBackground/>
      <CompanyHistoryYears/>
    </div>
  )
}