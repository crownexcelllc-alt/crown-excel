import Link from "next/link";

const Services = () => {
  return (
    <section className="bg-[#13745a] py-16 lg:py-20 px-4 md:px-12 xl:px-32 sm:block lg:block md:hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 mb-10 lg:mb-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="bg-[#e6eeff] text-green-900 px-4 py-1 font-montserrat rounded-full text-xs font-semibold tracking-wider mb-3 w-max shadow-sm">
              How We Add Value
            </p>
            <div className="flex flex-col font-montserrat items-center md:items-start heading text-2xl md:text-4xl font-extrabold leading-tight text-white text-center md:text-start">
              <span>We bring fresh perspectives and tailored</span>
              <span>Services to meet your needs</span>
            </div>
          </div>
          <Link
            href="/our-services"
            className="flex items-center justify-center gap-2 w-[150px] bg-white text-[#084032] font-semibold rounded-full px-6 py-3 shadow-lg hover:bg-[#e6eeff] transition"
          >
            View All
            <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 text-sm">
              {"->"}
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:flex lg:gap-10">
          <div className="card col-span-2 lg:col-span-1 bg-white text-black w-full font-montserrat py-8 px-4 lg:py-[50px] lg:px-[30px] text-center lg:text-start transition-transform duration-500 origin-bottom-left lg:hover:-translate-x-4 lg:hover:-translate-y-4 lg:hover:scale-105 lg:hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] animate-cardFadeIn" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-semibold text-[16px] lg:text-[24px] font-montserrat">Cloud Computing</h2>
            <p className="mt-2 text-[12px] lg:text-[16px] font-montserrat leading-relaxed">We offer expert cloud computing services, helping businesses seamlessly migrate legacy systems to the cloud with minimal disruption and a clear rollback strategy. Our cloud modernization solutions enhance application architecture, reduce IT costs, and boost business agility.</p>
          </div>

          <div className="card col-span-1 bg-black text-white w-full py-8 px-4 lg:py-[50px] lg:px-[30px] text-center lg:text-start transition-transform duration-500 origin-center lg:hover:-translate-y-2 lg:hover:scale-105 lg:hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] animate-cardFadeIn" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-semibold text-[15px] lg:text-[24px] font-montserrat">Software Solutions</h2>
            <p className="mt-2 text-[11px] lg:text-[16px] font-montserrat leading-relaxed">We deliver custom software solutions designed to meet your unique business needs. From application development to system integration, our services enhance operational efficiency and align technology with your strategic goals.</p>
          </div>

          <div className="card col-span-1 bg-[#0e4637] text-white w-full py-8 px-4 lg:py-[50px] lg:px-[30px] text-center lg:text-start transition-transform duration-500 origin-top-right lg:hover:translate-x-4 lg:hover:-translate-y-4 lg:hover:scale-105 lg:hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] animate-cardFadeIn" style={{ animationDelay: "0.5s" }}>
            <h2 className="font-semibold text-[15px] lg:text-[24px] font-montserrat">IT Infrastructure</h2>
            <p className="mt-2 text-[11px] lg:text-[16px] font-montserrat leading-relaxed">Our comprehensive IT infrastructure management services include proactive monitoring, network optimization, and reliable technical support. We ensure smooth business operations and scalable infrastructure tailored to your growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


