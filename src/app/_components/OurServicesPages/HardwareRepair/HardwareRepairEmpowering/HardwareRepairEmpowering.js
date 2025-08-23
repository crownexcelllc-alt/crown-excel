"use client";
import React from 'react';
import Image from 'next/image';
import empoweringImage from '../../../../../Components/Images/networkempower.png';
import NetworkIT from '../../../../../Components/Images/hardwarerepairempowering.png';

const SecuritySolutionsEmpowering = () => {
  const securityServices = [
    {
      icon: "🛡️",
      title: "Network Security",
      description: "Advanced firewall protection, intrusion detection systems, and secure network architecture to safeguard your digital perimeter",
      features: ["Next-Gen Firewall Configuration", "VPN & Remote Access Setup", "Real-time Network Monitoring", "Advanced Threat Detection", "Network Segmentation", "DDoS Protection"]
    },
    {
      icon: "🔐",
      title: "Endpoint Security",
      description: "Comprehensive protection for all devices connected to your network infrastructure with multi-layered defense mechanisms",
      features: ["Enterprise Antivirus & Anti-malware", "Device Encryption & Management", "Zero Trust Access Control", "Mobile Device Security", "Patch Management", "Behavioral Analysis"]
    },
    {
      icon: "☁️",
      title: "Cloud Security",
      description: "Secure cloud migration and management with enterprise-grade protection protocols for hybrid and multi-cloud environments",
      features: ["Secure Cloud Migration", "Data Loss Prevention", "Identity & Access Management", "Compliance Monitoring", "Cloud Security Posture", "Container Security"]
    },
    {
      icon: "🎯",
      title: "Threat Intelligence",
      description: "Proactive threat detection and response with real-time monitoring, AI-powered analysis, and incident response capabilities",
      features: ["24/7 SOC Monitoring", "Incident Response Planning", "Vulnerability Assessment", "Penetration Testing", "Threat Hunting", "Security Analytics"]
    },
    {
      icon: "📊",
      title: "Security Compliance",
      description: "Comprehensive compliance management to meet regulatory requirements and industry standards with continuous monitoring",
      features: ["Compliance Auditing", "Policy Development", "Risk Assessment", "Documentation Management", "Training Programs", "Certification Support"]
    },
    {
      icon: "🔄",
      title: "Backup & Recovery",
      description: "Robust data protection and disaster recovery solutions to ensure business continuity and data integrity",
      features: ["Automated Backup Solutions", "Disaster Recovery Planning", "Business Continuity", "Data Archiving", "Recovery Testing", "Cloud Backup Integration"]
    }
  ];

  const securityStats = [
    { number: "99.9%", label: "Threat Detection Rate", sublabel: "Advanced AI monitoring" },
    { number: "24/7", label: "Security Monitoring", sublabel: "Round-the-clock protection" },
    { number: "< 2min", label: "Response Time", sublabel: "Incident detection" },
    { number: "500+", label: "Protected Systems", sublabel: "Enterprise clients" },
    { number: "0", label: "Data Breaches", sublabel: "Client security record" },
    { number: "15+", label: "Years Experience", sublabel: "Cybersecurity expertise" }
  ];

  const complianceStandards = [
    "ISO 27001", "SOC 2 Type II", "GDPR", "HIPAA", "PCI DSS", "NIST", "COBIT", "FISMA"
  ];

  const securityBenefits = [
    {
      icon: "🚀",
      title: "Rapid Implementation",
      description: "Quick deployment of security solutions with minimal business disruption and seamless integration"
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Reduce security costs by up to 60% while improving protection levels with our managed services"
    },
    {
      icon: "🎓",
      title: "Expert Team",
      description: "Certified security professionals with extensive experience in enterprise cybersecurity"
    },
    {
      icon: "⚡",
      title: "Proactive Defense",
      description: "Stay ahead of threats with predictive analytics and continuous security monitoring"
    }
  ];

  const industryExpertise = [
    { sector: "Healthcare", clients: "50+", specialty: "HIPAA Compliance & Patient Data Protection" },
    { sector: "Finance", clients: "75+", specialty: "PCI DSS & Financial Data Security" },
    { sector: "Government", clients: "25+", specialty: "FISMA & Federal Security Standards" },
    { sector: "Education", clients: "40+", specialty: "FERPA & Academic Data Protection" },
    { sector: "Manufacturing", clients: "60+", specialty: "Industrial IoT & OT Security" },
    { sector: "Retail", clients: "80+", specialty: "E-commerce & Customer Data Security" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#16CA9A] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-[#16CA9A] transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-4 border-[#16CA9A] rounded-full animate-spin"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-gradient-to-r from-[#16CA9A] to-[#084032] opacity-30 rounded-lg transform rotate-12"></div>
      </div>

      {/* Matrix-like grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, #16CA9A 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Hero Section - Diagonal Split Design */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-gray-900 order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-[#16CA9A] to-[#084032] p-4 rounded-2xl shadow-2xl">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-[#16CA9A] to-[#084032] transform skew-x-12"></div>
                  <span className="text-[#16CA9A] font-bold uppercase tracking-widest text-sm">SECURITY SOLUTIONS</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-black leading-none">
                  <span className="block text-gray-900">ENTERPRISE</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] via-green-400 to-[#084032] animate-pulse">
                    CYBERSECURITY
                  </span>
                  <span className="block text-4xl md:text-5xl font-medium text-gray-700 mt-4">
                    Protection & Defense
                  </span>
                </h1>
                
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Safeguard your digital assets with our comprehensive cybersecurity solutions. 
                  From advanced threat detection to compliance management, we provide multi-layered 
                  protection that evolves with emerging cyber threats.
                </p>

                {/* Security Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                  {securityStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-gradient-to-br from-white to-green-50 p-4 rounded-xl border border-[#16CA9A]/20 group-hover:border-[#16CA9A]/50 transition-all duration-300 shadow-lg">
                        <div className="text-2xl md:text-3xl font-black text-[#16CA9A] mb-1">{stat.number}</div>
                        <div className="text-sm font-semibold text-gray-900">{stat.label}</div>
                        <div className="text-xs text-gray-600">{stat.sublabel}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white font-bold rounded-2xl shadow-2xl hover:shadow-[#16CA9A]/25 transition-all duration-300 transform hover:scale-105 group">
                    <span className="mr-3">🔍</span>
                    Security Assessment
                    <svg className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="inline-flex items-center px-8 py-5 border-2 border-[#16CA9A] text-[#16CA9A] font-bold rounded-2xl hover:bg-[#16CA9A] hover:text-white transition-all duration-300">
                    <span className="mr-2">📞</span>
                    Emergency Response
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image - Hexagonal Design */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#16CA9A]/20 via-green-400/10 to-[#084032]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-white to-green-50 p-8 transform rotate-6 hover:rotate-0 transition-transform duration-700 shadow-2xl border-2 border-[#16CA9A]/30" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}>
                  <Image
                    src={empoweringImage}
                    width={500}
                    height={350}
                    alt="Security Solutions"
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white p-4 rounded-full shadow-2xl animate-bounce">
                    <span className="text-3xl">🛡️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Services - Unique Card Design */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-gray-900 mb-4">
              SECURITY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-green-400">ARSENAL</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-8 transform skew-x-12"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect, detect, and respond to modern threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl border border-[#16CA9A]/20 group-hover:border-[#16CA9A]/50 transition-all duration-300 transform group-hover:-translate-y-4 shadow-lg">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="text-5xl p-4 bg-gradient-to-r from-[#16CA9A]/20 to-[#084032]/20 rounded-2xl">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#16CA9A] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-[#16CA9A] uppercase tracking-wide">Key Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Benefits Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              WHY CHOOSE <span className="text-[#16CA9A]">OUR SECURITY</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-8 transform skew-x-12"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the Crown Excel advantage with our comprehensive cybersecurity approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityBenefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg border border-[#16CA9A]/20 group-hover:border-[#16CA9A]/50 transition-all duration-300 transform group-hover:-translate-y-2 h-full">
                  <div className="text-center space-y-4">
                    <div className="text-3xl mb-3 p-3 bg-gradient-to-r from-[#16CA9A]/10 to-[#084032]/10 rounded-xl inline-block">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#16CA9A] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Expertise Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              INDUSTRY <span className="text-[#16CA9A]">EXPERTISE</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-8 transform skew-x-12"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized security solutions tailored for different industry verticals and compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryExpertise.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg border border-[#16CA9A]/20 hover:border-[#16CA9A]/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{industry.sector}</h3>
                  <div className="bg-[#16CA9A] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {industry.clients} Clients
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold text-[#16CA9A]">Specialty:</span> {industry.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              COMPLIANCE <span className="text-[#16CA9A]">STANDARDS</span>
            </h2>
            <p className="text-xl text-gray-700">Industry certifications and regulatory compliance</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-green-50 border border-[#16CA9A]/30 px-8 py-4 rounded-2xl hover:border-[#16CA9A] transition-all duration-300 transform hover:scale-110 shadow-lg">
                <span className="text-[#16CA9A] font-bold text-lg">{standard}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with Second Image */}
        <div className="relative">
          <div className="bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 text-white">
                <h3 className="text-4xl font-black mb-6">Ready to Fortify Your Digital Infrastructure?</h3>
                <p className="text-xl mb-6 opacity-90">
                  Don't wait for a security breach to expose your vulnerabilities. Get comprehensive 
                  cybersecurity protection today and safeguard your business from evolving threats 
                  with our enterprise-grade security solutions.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Zero-day threat protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Compliance audit support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">24/7 security operations center</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center px-8 py-4 bg-white text-[#084032] font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                    <span className="mr-2">🔍</span>
                    Free Security Audit
                  </button>
                  <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#084032] transition-colors duration-300">
                    <span className="mr-2">📋</span>
                    Get Security Quote
                  </button>
                </div>
              </div>
              <div className="relative p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-white/20 rounded-3xl blur-2xl"></div>
                  <Image
                    src={NetworkIT}
                    width={400}
                    height={300}
                    alt="Security Infrastructure"
                    className="relative w-full h-auto rounded-3xl shadow-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-[#16CA9A]">🔒</div>
                      <div className="text-xs text-gray-600 font-bold">SECURED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutionsEmpowering;

// const HardwareRepairEmpowering = () => {
//   return (
//     <section className="relative overflow-hidden  px-0 md:px-0 lg:px-0 py-10">
//       <div className="flex flex-col md:flex-row lg:flex-row md:items-start lg:items-center lg:justify-between md:gap-5 lg:gap-10">
        
//         {/* Left Image */}
//         <div className="lg:flex-shrink-0 w-full lg:w-1/2">
//           <Image
//             src={empoweringImage}
//             width={632}
//             height={425}
//             alt="Empowering Business"
//             className="w-full max-w-[632px] md:w-[447px] lg:w-[632px] h-auto mx-auto md:mx-0 lg:mx-0"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="relative w-full items-start px-5 md:px-2 lg:px-0 lg:w-1/2 z-10 flex flex-col gap-6 mt-5 md:mt-5 lg:mt-[-40px]">
//           {/* Highlighted Banner */}
//           <p className="bg-[#ffd600] text-black text-center font-montserrat  text-lg md:text-xl lg:text-[18px] leading-[18px] px-[20px] py-[15px] rounded-md shadow-md">
//             Empowering Your Business with Tailored IT Solutions
//           </p>

//           {/* Title */}
//           <h2 className="text-black text-[32px] md:text-[42px] lg:text-[52px] font-[700] leading-tight font-montserrat">
//             Fast and Reliable Hardware Repairs for Your Business
//           </h2>

//           {/* Description */}
//           <p className="text-black text-base md:text-[16px] leading-[27.2px] font-montserrat z-30">
//             Don’t let hardware issues slow you down. Crown Excel specializes in repairing IT equipment quickly and efficiently, ensuring minimal downtime for your business. Our skilled technicians provide fast, dependable solutions to restore your devices to full functionality.
//           </p>

//           {/* Yellow Glowing Circle */}
//           <div className="hidden md:block absolute w-[200px] h-[200px] bg-yellow-400 rounded-full blur-3xl opacity-70 right-[-60px] bottom-[-80px] z-10" />

//           {/* Down Arrow */}
//           <Image
//             src={downArrow}
//             alt="Scroll Down"
//             width={61}
//             height={187}
//             className="hidden  lg:block absolute right-5 top-100 z-20"
//           />
//         </div>
//       </div>
//       <div className="mt-5 lg:mt-20 px-4 flex flex-col md:flex-row lg:flex-row items-center justify-between gap-5">
//               {/* Right Side */}
//               <div className="empowering-right gap-5 md:gap-5 lg:gap-5 relative basis-[50%] flex flex-col items-start mt-5 md:mt-10 lg:-mt-10 z-10 px-2 lg:px-0">
//                 <p className="bg-[#ffd600]  text-center w-full text-black text-[17px] md:text-[20px] lg:text-[18px] leading-[18px] px-[20px] py-[15px] font-[500] font-montserrat  lg:leading-[26.88px] md:px-10 lg:px-10 rounded ">
//                   Empowering Your Business with Tailored IT Solutions
//                 </p>
//                 <h1 className="text-[32px] md:text-[43px] lg:text-[52px] text-black font-[600] leading-[40px] lg:leading-[52px] font-montserrate">
//                  Expert Repairs for All Your IT Hardware
//                 </h1>
//                 <p className="text-[16px] text-black leading-[27.2px] font-montserrat">
//                   From desktops and laptops to servers and networking devices, we provide expert repair services for a wide range of hardware. Our commitment to quality and precision ensures your devices are restored to peak performance, extending their lifecycle and saving costs.
//                 </p>
      
                
      
                
//               </div>
//               {/* Left Side */}
//               <div className="empowering-left basis-[50%]">
//                 <Image
//                   src={NetworkIT}
//                   width={527}
//                   height={355}
//                   alt=""
//                   className="hidden md:block lg:block lg:w-[527px] lg:h-[355px]"
//                 />
//               </div>
      
              
//             </div>
//     </section>
//   );
// };

// export default HardwareRepairEmpowering;
