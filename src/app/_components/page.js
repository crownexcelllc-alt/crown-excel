import dynamic from "next/dynamic";
import SmartSolutions from "./smartsolutions";
import TrustedPartner from "./Trusted Partner/TrustedPartner";
import Services from "./Services/Services";

const AllProducts = dynamic(() => import("./AllProducts/AllProducts"));
const Brands = dynamic(() => import("./Brands/Brands"));
const Occasions = dynamic(() => import("./Occasions/Occasions"));
const Testimonials = dynamic(() => import("./Testimonials/Testimonials"));
const Contactus = dynamic(() => import("./Contactus/Contactus"));
const Globe = dynamic(() => import("./Globe/Globe"));

function Page({ cmsContent }) {
  const sections = cmsContent?.sections || {};
  const heroSection = sections.smartsolutions || sections.hero;
  const trustedPartnerSection = sections.trustedpartner;
  const servicesSection = sections.services;
  const allProductsSection = sections.allproducts;
  const brandsSection = sections.brands;
  const occasionsSection = sections.occasions;
  const testimonialsSection = sections.testimonials;
  const contactusSection = sections.contactus;
  const globeSection = sections.globe;

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <section>
        <SmartSolutions cmsHero={heroSection} cmsData={heroSection} />
      </section>
      <section>
        <TrustedPartner cmsData={trustedPartnerSection} />
      </section>
      <section>
        <Services cmsData={servicesSection} />
      </section>
      <section>
        <AllProducts cmsCatalog={allProductsSection} cmsData={allProductsSection} />
      </section>
      <section>
        <Brands cmsData={brandsSection} />
      </section>
      <section>
        <Occasions cmsData={occasionsSection} />
      </section>
      <section>
        <Testimonials cmsData={testimonialsSection} />
      </section>
      <section>
        <Contactus cmsData={contactusSection} />
      </section>
      <section>
        <Globe cmsData={globeSection} />
      </section>
    </main>
  );
}

export default Page;

