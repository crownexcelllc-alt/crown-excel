
import React from 'react'
import SmartSolutions from './smartsolutions'
import TrustedPartner from './Trusted Partner/TrustedPartner'
import Services from './Services/Services'
import AllProducts from './AllProducts/AllProducts'
import Brands from './Brands/Brands'
import Occasions from './Occasions/Occasions'
import Testimonials from './Testimonials/Testimonials'
import Contactus from './Contactus/Contactus'
import Globe from './Globe/Globe'

function Page() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero / Smart Solutions Section */}
      <section>
        <SmartSolutions />
      </section>

      {/* Trusted Partner Section */}
      <section>
        <TrustedPartner />
      </section>

      {/* Services Section */}
      <section>
        <Services />
      </section>

      {/* All Products Section */}
      <section>
        <AllProducts />
      </section>

      {/* Brands Section */}
      <section>
        <Brands />
      </section>

      {/* Occasions Section */}
      <section>
        <Occasions />
      </section>

      {/* Testimonials Section */}
      <section>
        <Testimonials />
      </section>

      {/* Contact Us Section */}
      <section>
        <Contactus />
      </section>

      {/* Globe Section */}
      <section>
        <Globe />
      </section>
    </main>
  )
}

export default Page






























// import React from 'react'
// import SmartSolutions from './smartsolutions'
// import TrustedPartner from './Trusted Partner/TrustedPartner'
// import Services from './Services/Services'
// import AllProducts from './AllProducts/AllProducts'
// import Brands from './Brands/Brands'
// import Occasions from './Occasions/Occasions'
// import Testimonials from './Testimonials/Testimonials'
// import Contactus from './Contactus/Contactus'
// import Globe from './Globe/Globe'

// function Page() {
//   return (
//     <div >
//       <SmartSolutions/>
//       <TrustedPartner/>
//       <Services/>
//       <AllProducts/>
//       <Brands/>
//       <Occasions/>
//       <Testimonials/>
//       <Contactus/>
//       <Globe/>
//     </div>
//   )
// }

// export default Page
