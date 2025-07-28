import CompanyHistoryBanner from '@/app/_components/CompanyHistory/CompanyHistoryBanner/CompanyHistoryBanner'
import CompanyHistoryYears from '@/app/_components/CompanyHistory/CompanyHistoryYears/CompanyHistoryYears'
import CompanyHistroyBackground from '@/app/_components/CompanyHistory/CompanyHistroyBackground/CompanyHistroyBackground'
import React from 'react'

function CompanyHistory() {
  return (
    <div>
      <CompanyHistoryBanner/>
      <CompanyHistroyBackground/>
      <CompanyHistoryYears/>
    </div>
  )
}

export default CompanyHistory