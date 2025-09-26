import React from 'react';
import NetworkingSmartImage from '../../../../../Components/Images/manageditsmart.png';
import SignalTower from '../../../../../Components/Images/signaltower.png';
import Image from 'next/image';
import Link from 'next/link';
// import Server from '../../../../../Components/Images/coreinfrastrucutre.jpg';
import Storage from '../../../../../Components/Images/storagesolutions.jpg';
import Network from '../../../../../Components/Images/networkinfrastructure.jpg';
import Monitoring from '../../../../../Components/Images/networkinfrastructure.jpg';
import Security from '../../../../../Components/Images/Security2.jpg';
import Virtualization from '../../../../../Components/Images/Virtualization2.jpg';
import Server from '../../../../../Components/Images/coreinfrastrucutre2.jpg';
import Dragon from '../../../../../Components/Images/dragon.png'
import Intel from '../../../../../Components/Images/intell.png'
import Dell from '../../../../../Components/Images/dell (1).png'
import Accer from '../../../../../Components/Images/acer (2).png'
import Xerox from '../../../../../Components/Images/Xerox.png'
import Amd from '../../../../../Components/Images/amdd.png'
import HP from '../../../../../Components/Images/hp (1).png'
import ViewSonic from '../../../../../Components/Images/view sonic.png'
import Optoma from '../../../../../Components/Images/optoma.png'
import ricoh from '../../../../../Components/Images/ricoh.png'
import meetion from '../../../../../Components/Images/meetion.png'
import logitech from '../../../../../Components/Images/logitech.png'
import lexar from '../../../../../Components/Images/lexar.png'
import Kingston from '../../../../../Components/Images/Kingston.png'
import epson from '../../../../../Components/Images/epson.png'
import crucial from '../../../../../Components/Images/crucial.png'
import canon from '../../../../../Components/Images/canon.png'
import brother from '../../../../../Components/Images/brother.png'
import benq from '../../../../../Components/Images/benq.png'
import aoc from '../../../../../Components/Images/aoc.png'
import alienware from '../../../../../Components/Images/alienware.png'
import adhua from '../../../../../Components/Images/adhua.png'
import tplink from '../../../../../Components/Images/tp link.png'
import samsung from '../../../../../Components/Images/samsung (1).png'
import razor from '../../../../../Components/Images/razor.png'
import microsof from '../../../../../Components/Images/microsof.png'
import lg from '../../../../../Components/Images/lg.png'
import lenovo from '../../../../../Components/Images/lenovo (1).png'
import Asus from '../../../../../Components/Images/asus (1).png'
import apple from '../../../../../Components/Images/apple (3).png'
import Enterprise from '../../../../../Components/Images/optimizedstorage.jpg'
import CloudStorage from '../../../../../Components/Images/cloudstorage.jpg'
import Virtualization2 from '../../../../../Components/Images/virtualization.jpg'
import DataManagement from '../../../../../Components/Images/Datamanagement.jpg'
import Disaster from '../../../../../Components/Images/Disaster.png'
import Computing from '../../../../../Components/Images/HighComputing.jpg'
import { MdManageAccounts } from "react-icons/md";
import { FaUniversalAccess } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

const ManagedITSmart = () => {
   const technologyPartners = [
      { name: "Dragon", Image: Dragon },
      { name: "Intel", Image: Intel },
      { name: "Dell", Image: Dell },
      { name: "Acer", Image: Accer },
      { name: "Xerox", Image: Xerox },
      { name: "AMD", Image: Amd },
      { name: "HP", Image: HP },
      { name: "ViewSonic", Image: ViewSonic },
      { name: "Optoma", Image: Optoma },
      { name: "Ricoh", Image: ricoh },
      { name: "Meetion", Image: meetion },
      { name: "Logitech", Image: logitech },
      { name: "Lexar", Image: lexar },
      { name: "Kingston", Image: Kingston },
      { name: "Epson", Image: epson },
      { name: "Crucial", Image: crucial },
      { name: "Canon", Image: canon },
      { name: "Brother", Image: brother },
      { name: "BenQ", Image: benq },
      { name: "AOC", Image: aoc },
      { name: "Alienware", Image: alienware },
      { name: "Dahua", Image: adhua },
      { name: "TP-Link", Image: tplink },
      { name: "Samsung", Image: samsung },
      { name: "Razer", Image: razor },
      { name: "Microsoft", Image: microsof },
      { name: "LG", Image: lg },
      { name: "Lenovo", Image: lenovo },
      { name: "Asus", Image: Asus },
      { name: "Apple", Image: apple }
    ];
  const infrastructureServices = [
    {
      title: "Server Infrastructure",
      description: "Enterprise-grade server solutions with high availability, load balancing, and redundancy for mission-critical applications.",
      features: ["Physical & Virtual Servers", "Load Balancing", "High Availability Clusters", "Server Monitoring"],
      Image: Server,
      metric: "99.9%",
      metricLabel: "Uptime"
    },
    {
      title: "Network Infrastructure",
      description: "Robust network architecture design with advanced security, optimal performance, and seamless connectivity across all locations.",
      features: ["Network Design", "Firewall Configuration", "VPN Setup", "Bandwidth Optimization"],
      Image: Network,
      metric: "24/7",
      metricLabel: "Monitoring"
    },
    {
      title: "Storage Solutions",
      description: "Scalable storage systems with automated backup, disaster recovery, and data protection for business continuity.",
      features: ["SAN/NAS Storage", "Backup Solutions", "Disaster Recovery", "Data Archiving"],
      Image: Storage,
      metric: "100%",
      metricLabel: "Data Security"
    },
    {
      title: "Virtualization",
      description: "Complete virtualization solutions to maximize resource utilization, reduce costs, and improve system flexibility.",
      features: ["VMware Solutions", "Hyper-V Implementation", "Virtual Desktop Infrastructure", "Container Solutions"],
      Image: Virtualization,
      metric: "60%",
      metricLabel: "Cost Savings"
    },
    {
      title: "Security Infrastructure",
      description: "Multi-layered security framework protecting your IT assets from cyber threats and ensuring compliance.",
      features: ["Endpoint Protection", "Network Security", "Identity Management", "Compliance Monitoring"],
      Image: Security,
      metric: "Zero",
      metricLabel: "Breaches"
    },
    {
      title: "Monitoring & Management",
      description: "24/7 proactive monitoring with real-time alerts, performance optimization, and automated maintenance.",
      features: ["Real-time Monitoring", "Performance Analytics", "Automated Alerts", "Remote Management"],
      Image: Monitoring,
      metric: "15min",
      metricLabel: "Response Time"
    }
  ];

  const managementPhases = [
    { phase: "ACCESS", title: "Infrastructure Analysis", icon: <FaUniversalAccess/>, color: "from-[#16CA9A] to-[#119472]" },
    { phase: "PLAN", title: "Strategic Roadmap", icon: <SlCalender/>, color: "from-[#119472] to-[#13745a]" },
    { phase: "DEPLOY", title: "Implementation", icon: <GrDeploy/>, color: "from-[#13745a] to-[#0d5c47]" },
    { phase: "MANAGE", title: "Ongoing Support", icon:  <MdManageAccounts/>, color: "from-[#0d5c47] to-[#084032]" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white overflow-hidden">
      {/* Unique Hexagonal Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
          <div className="w-full h-full bg-[#16CA9A]"></div>
        </div>
        <div className="absolute top-40 right-20 w-24 h-24" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
          <div className="w-full h-full bg-[#119472]"></div>
        </div>
        <div className="absolute bottom-32 left-32 w-28 h-28" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
          <div className="w-full h-full bg-[#13745a]"></div>
        </div>
        <div className="absolute bottom-10 right-40 w-36 h-36" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
          <div className="w-full h-full bg-[#0d5c47]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Unique Diagonal Split Hero */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#16CA9A]/5 to-transparent transform skew-y-1"></div>
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-20 bg-gradient-to-b from-[#16CA9A] to-[#084032] rounded-full"></div>
                <div>
                  <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-none tracking-tight">
                    IT<span className="text-[#16CA9A]">.</span>
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">
                    Infrastructure
                  </h2>
                  <p className="text-xl text-gray-600 mt-2">Excellence Redefined</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Revolutionary IT infrastructure management combining cutting-edge technology,
                  enterprise security, and 24/7 operational excellence for unstoppable business growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <Image src={SignalTower} width={20} height={20} alt="" className="mr-3" />
                  Transform My Infrastructure
                  <svg className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <button className="inline-flex items-center px-6 py-4 border-2 border-[#16CA9A] text-[#16CA9A] font-bold rounded-2xl hover:bg-[#16CA9A] hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                  <Image
                    src={NetworkingSmartImage}
                    width={500}
                    height={400}
                    alt="IT Infrastructure Excellence"
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#16CA9A] rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Honeycomb Services Layout */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              <span className="text-[#16CA9A]">CORE</span> INFRASTRUCTURE
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Six pillars of excellence forming the foundation of modern enterprise infrastructure
            </p>
          </div>

          {/* Honeycomb Grid Layout */}
          <div className="relative">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {infrastructureServices.map((service, index) => (
                <div
                  key={index}
                  className=" w-full h-110 bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between items-left text-left transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full h-50 rounded">
                    <Image
                      alt={service.title}
                      src={service.Image}
                      fill
                      // width={350}
                      // height={200}
                    className="rounded"
                    />
                  </div>

                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {service.title}
                    </h3>

                    {/* Metric */}
                    <div className="text-2xl font-semibold text-[#16CA9A]">
                      {service.metric}
                    </div>

                    {/* Metric Label */}
                    <div className="text-sm text-gray-700 mb-2">{service.metricLabel}</div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-snug">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>

        {/* Unique Radial Process Flow */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              MANAGEMENT <span className="text-[#16CA9A]">CYCLE</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-6"></div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-96 h-96">
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-black">IT</div>
                  <div className="text-sm font-semibold">EXCELLENCE</div>
                </div>
              </div>

              {/* Orbital Elements */}
              {managementPhases.map((phase, index) => {
                const angle = (index * 90) - 45; // 90 degrees apart, starting at -45
                const radius = 140;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;

                return (
                  <div
                    key={index}
                    className="absolute w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${phase.color} rounded-full flex flex-col items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                      <div className="text-2xl mb-1">{phase.icon}</div>
                      <div className="text-xs font-bold">{phase.phase}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Unique Split CTA */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-[#16CA9A] to-[#084032] p-12 text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                <div className="w-full h-full bg-white"></div>
              </div>
              <h3 className="text-4xl font-black mb-6">Ready to Transform?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join the infrastructure revolution with enterprise-grade solutions that scale with your ambitions.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-white text-[#084032] font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Start Revolution
              </Link>
            </div>
            <div className="bg-gray-900 p-12 text-white relative">
              <div className="absolute bottom-0 left-0 w-28 h-28 opacity-20" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                <div className="w-full h-full bg-[#16CA9A]"></div>
              </div>
              <h3 className="text-4xl font-black mb-6">Need Consultation?</h3>
              <p className="text-xl mb-8 opacity-90">
                Expert guidance for complex infrastructure challenges and strategic technology decisions.
              </p>
              <Link
                href="/our-services"
                className="inline-flex items-center px-8 py-4 border-2 border-[#16CA9A] text-[#16CA9A] font-bold rounded-xl hover:bg-[#16CA9A] hover:text-white transition-colors duration-300"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
        {/* Technology Partners */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      Technology Partners
                    </h2>
                    <p className="text-xl text-gray-600">
                      We work with industry-leading technology partners to deliver best-in-class solutions
                    </p>
                  </div>
        
                  <div className="flex items-center justify-center flex-wrap gap-8">
                    <div className='flex items-center justify-center flex-wrap gap-8 w-[800px]'>
                      {technologyPartners.map((partner, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-[30px] w-[100px] h-[100px]  flex items-center justify-center shadow-md hover:shadow-xl transition-shadow duration-300 group"
                        >
                          <Image
                            src={partner.Image}
                            alt={partner.name}
                            width={60}
                            height={60}
                            className="transform transition-transform duration-300 group-hover:-translate-y-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
        
                </div>
              </section>
      </div>
    </section>
  );
};

export default ManagedITSmart;
