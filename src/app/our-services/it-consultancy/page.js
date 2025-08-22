import ITConsultancyBanner from '@/app/_components/OurServicesPages/ITConsultancy/ITConsultancyBanner/ITConsultancyBanner'
import ITEmpowering from '@/app/_components/OurServicesPages/ITConsultancy/ITEmpowering/ITEmpowering'
import ITFaq from '@/app/_components/OurServicesPages/ITConsultancy/ITFaq/ITFaq'
import ITService from '@/app/_components/OurServicesPages/ITConsultancy/ITService/ITService'
import ITSmart from '@/app/_components/OurServicesPages/ITConsultancy/ITSmart/ITSmart_new'
import ITWeareBest from '@/app/_components/OurServicesPages/ITConsultancy/ITWeareBest/ITWeareBest'
import ITWhyChooseUs from '@/app/_components/OurServicesPages/ITConsultancy/ITWhyChooseUs/ITWhyChooseUs'
import React from 'react'

const ITConsultancy = () => {
  return (
    <div>
      <ITConsultancyBanner/>
      <ITSmart/>
      {/* <ITEmpowering/>
      <ITWhyChooseUs/>
      <ITService/>
      <ITWeareBest/>
      <ITFaq/> */}
    </div>
  )
}

export default ITConsultancy
