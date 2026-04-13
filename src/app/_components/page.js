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

function Page() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <section>
        <SmartSolutions />
      </section>
      <section>
        <TrustedPartner />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <AllProducts />
      </section>
      <section>
        <Brands />
      </section>
      <section>
        <Occasions />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Contactus />
      </section>
      <section>
        <Globe />
      </section>
    </main>
  );
}

export default Page;

