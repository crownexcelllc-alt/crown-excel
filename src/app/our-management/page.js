import React from 'react'
import OurManagementBanner from '../_components/OurManagement/OurManagementBanner/OurManagementBanner'
import OurManagementKnowmore from '../_components/OurManagement/OurManagementKnowmore/OurManagementKnowmore'
import OurManagementTeam from '../_components/OurManagement/OurManagementTeam/OurManagementTeam'
import OurManagementProcess from '../_components/OurManagement/OurManagementProcess/OurManagementProcess'

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
