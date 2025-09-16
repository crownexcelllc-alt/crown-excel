"use client";
import React from 'react';
import Image from 'next/image';
import empoweringImage from '../../../../../Components/Images/networkempower.png';
import NetworkIT from '../../../../../Components/Images/hardwareempowering.png';
import Dirham from '../../../../../Components/Images/dirham.png';
import ITservice from '../../../../../Components/Images/serviceIt.png'
import Support from '../../../../../Components/Images/support.png'
import Proactive from '../../../../../Components/Images/proacitve.png'
import Cost from '../../../../../Components/Images/cost.png'
import Rapid from '../../../../../Components/Images/rapid.png'
import Security from '../../../../../Components/Images/security3.png'

const HardwareEmpowering = () => {
  // Get quote function
  const getQuote = () => {
    // You can add form popup or redirect to contact page
    window.location.href = '/contact-us';
  };

  // Update AMC plans to remove hardware focus and add business/software/POS content
  const amcPlans = [
    {
      type: "Short Term AMC",
      duration: "1-6 Months",
      title: "Quick Business & IT Support",
      subtitle: "Immediate help for your business systems, software, POS, and more",
      features: [
        "Rapid troubleshooting for business systems",
        "Emergency support for POS, billing, and software",
        "Software installation, updates & bug fixes",
        "Basic preventive maintenance schedules",
        "24/7 technical support hotline",
        "On-site visits for business operations (monthly)",
        "System health monitoring reports"
      ],
      benefits: "Best for startups, shops, and urgent business needs",
      icon: "⚡",
      color: "from-[#16CA9A] to-[#119472]",
      uptime: "99.5%",
      response: "4 Hours"
    },
    {
      type: "Long Term AMC",
      duration: "6 Months - 3 Years",
      title: "Complete Business & IT Management",
      subtitle: "We handle all your business operations, software, POS, and IT needs",
      features: [
        "Full system maintenance & upgrades",
        "POS & billing software management",
        "Regular check-ups for business operations",
        "Software license management & renewals",
        "Priority support & rapid issue resolution",
        "Advanced monitoring & reporting dashboards",
        "Dedicated account manager & technical team",
        "Annual business technology consultation"
      ],
      benefits: "Ideal for enterprises, retail, and those who want total peace of mind",
      icon: "🛡️",
      color: "from-[#13745a] to-[#084032]",
      uptime: "99.9%",
      response: "2 Hours"
    }
  ];

  // Update service features for business/software/POS
  const serviceFeatures = [
    {
      icon: "🧑‍💻",
      title: "Business & IT Experts",
      desc: "Specialists in business operations, POS, billing, and software management",
      metric: "200+ Certified Engineers",
      Image : ITservice
    },
    {
      icon: "⏰",
      title: "24/7 Priority Support",
      desc: "Round-the-clock help for any business, POS, or software issue",
      metric: "2-4 Hour Response",
      Image : Support
    },
    {
      icon: "📊",
      title: "Proactive Monitoring",
      desc: "Real-time tracking of business systems, POS, and software updates",
      metric: "99.9% Uptime Guarantee",
      Image : Proactive
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      desc: "Reduce expenses and improve business efficiency with smart management",
      metric: "40% Cost Reduction",
      Image : Cost
    },
    {
      icon: "🚀",
      title: "Rapid Deployment",
      desc: "Quick setup and integration for your business and POS systems",
      metric: "24 Hour Setup",
      Image : Rapid
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      desc: "We keep your business data and software secure and compliant",
      metric: "100% Compliant",
      Image : Security,
    }
  ];

  // Update coverage areas for business/software/POS
  const coverageAreas = [
    {
      category: "What We Manage",
      items: [
        "Business Operations",
        "POS & Billing Software",
        "Inventory & CRM Systems",
        "Cloud Services",
        "Software Licensing",
        "Data Backup & Security",
        "Multi-location Management"
      ]
    },
    {
      category: "Service Locations",
      items: [
        "On-site Support",
        "Remote Monitoring",
        "Multi-location Coverage",
        "Emergency Call-outs",
        "Planned Maintenance"
      ]
    },
    {
      category: "Industry Expertise",
      items: [
        "Retail & E-commerce",
        "Healthcare",
        "Manufacturing",
        "Financial Services",
        "Education",
        "Government"
      ]
    }
  ];

  const industryStats = [
    { number: "500+", label: "Ongoing AMC Contracts", sublabel: "Across all business types" },
    { number: "99.9%", label: "Average Uptime", sublabel: "Business systems managed" },
    { number: "30 mins", label: "Avg. Response", sublabel: "Emergency support" },
    { number: "50%+", label: "Cost Savings", sublabel: "Annual client savings", useDirham: true }
  ];



  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Unique Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#16CA9A] rounded-lg transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#16CA9A] rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border-2 border-[#084032] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#084032] transform rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero Section with Zigzag Layout */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 lg:col-start-1 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white px-6 py-3 rounded-2xl text-sm font-bold uppercase tracking-wide shadow-lg">
                    🧑‍💻 BUSINESS MANAGEMENT SERVICES
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full"></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                  <span className="block">Hand Over All Your Business Work</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">
                    We Handle Everything
                  </span>
                  <span className="block text-4xl md:text-5xl font-medium text-gray-700">
                    POS, Software, Operations—No Worries!
                  </span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                  With Crown Excel, you don’t need to worry about your business systems, POS, or software. We take full responsibility for your operations—maintenance, repairs, upgrades, software management, and support. Just hand over your business work and relax. We’ll keep everything running, secure, and up-to-date, so you can focus on growth.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                  {industryStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center items-center gap-1 text-2xl md:text-3xl font-black text-[#16CA9A]">
                        {stat.useDirham && (
                          <Image
                            src={Dirham}
                            alt="Dirham Symbol"
                            width={30}
                            height={30}
                            className="inline-block object-contain"
                          />
                        )}
                        {stat.number}
                      </div>
                      <div className="text-sm font-semibold text-gray-800">{stat.label}</div>
                      <div className="text-xs text-gray-600">{stat.sublabel}</div>
                    </div>
                  ))}
                </div>


                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={getQuote}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    Get AMC Quote
                    <svg className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="inline-flex items-center px-6 py-4 border-2 border-[#16CA9A] text-[#16CA9A] font-bold rounded-xl hover:bg-[#16CA9A] hover:text-white transition-all duration-300">
                    📞 Emergency Support
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image - Floating Effect */}
            <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#16CA9A]/20 to-[#084032]/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <Image
                    src={empoweringImage}
                    width={500}
                    height={350}
                    alt="AMC Services"
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-[#16CA9A] text-white p-3 rounded-full shadow-xl animate-pulse">
                    <span className="text-2xl">🔧</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AMC Plans Section - Unique Split Design */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              AMC <span className="text-[#16CA9A]">PLANS</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-6 transform skew-x-12"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Short or long term—choose the AMC that fits your business. We handle everything for you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {amcPlans.map((plan, index) => (
              <div key={index} className="group relative">
                <div className={`relative bg-gradient-to-br ${plan.color} p-1 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4`}>
                  <div className="bg-white rounded-3xl p-8 h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{plan.icon}</div>
                      <div className={`bg-gradient-to-r ${plan.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                        {plan.duration}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-gray-900">{plan.type}</h3>
                      <h4 className="text-lg font-semibold text-gray-700">{plan.title}</h4>
                      <p className="text-sm text-gray-600">{plan.subtitle}</p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-3 my-4">
                        <div className="text-center bg-gray-50 p-3 rounded-lg">
                          <div className="text-lg font-black text-[#16CA9A]">{plan.uptime}</div>
                          <div className="text-xs text-gray-600">Uptime SLA</div>
                        </div>
                        <div className="text-center bg-gray-50 p-3 rounded-lg">
                          <div className="text-lg font-black text-[#16CA9A]">{plan.response}</div>
                          <div className="text-xs text-gray-600">Response Time</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Included Services</h5>
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${plan.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700 font-medium text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className={`bg-gradient-to-r ${plan.color} bg-opacity-10 p-4 rounded-xl mt-6`}>
                        <p className="text-sm font-semibold text-white mb-2">{plan.benefits}</p>
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <div className="bg-[#16CA9A] text-white px-4 py-2 rounded-full text-xs font-bold">
                            ALL-IN-ONE SERVICE
                          </div>
                          <div className="bg-[#084032] text-white px-4 py-2 rounded-full text-xs font-bold">
                            24/7 SUPPORT
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={getQuote}
                        className={`w-full mt-6 py-4 bg-gradient-to-r ${plan.color} text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group relative overflow-hidden`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <span>Request {plan.type} Consultation</span>
                          <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Features - Hexagonal Grid */}
        {/* Service Features - Image Cards (Reference Style) */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              WHY CHOOSE <span className="text-[#16CA9A]">CROWN EXCEL AMC?</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-6 transform skew-x-12"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Replace emoji with image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={feature.Image} // 👈 you add your own images here
                    alt={feature.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  {/* Optional gradient overlay with your colors */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#084032]/70 via-transparent to-transparent"></div>
                </div>

                {/* Text content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#16CA9A] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {feature.desc}
                  </p>
                  <div className="bg-gradient-to-r from-[#16CA9A]/10 to-[#084032]/10 p-3 rounded-lg text-center">
                    <span className="text-lg font-black text-[#16CA9A]">
                      {feature.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Areas Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              WHAT WE HANDLE <span className="text-[#16CA9A]">FOR YOU</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-6 transform skew-x-12"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hardware, software, support, and more—just hand over your IT work and be worry-free!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coverageAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-[#16CA9A] to-[#084032] p-4">
                  <h3 className="text-xl font-black text-white text-center">{area.category}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {area.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-[#16CA9A] rounded-full"></div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with Second Image - Enhanced */}
        <div className="relative">
          <div className="bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 text-white">
                <h3 className="text-4xl font-black mb-6">Be Worry-Free—Let Us Handle Everything!</h3>
                <p className="text-xl mb-6 opacity-90">
                  With Crown Excel AMC, you can focus on your business while we take care of all your hardware, software, and IT support. No stress, no downtime—just hand over your work and relax!
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Full responsibility for your IT & hardware</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Software management & updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">24/7 support & rapid response</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center px-8 py-4 bg-white text-[#084032] font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                    <span className="mr-2">🔍</span>
                    Start Free Assessment
                  </button>
                  <button
                    onClick={getQuote}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#084032] transition-colors duration-300"
                  >
                    <span className="mr-2">📞</span>
                    Contact Support
                  </button>
                </div>
              </div>
              <div className="relative p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-xl"></div>
                  <Image
                    src={NetworkIT}
                    width={400}
                    height={300}
                    alt="Professional Hardware Maintenance Services"
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                  />
                  {/* Overlay Stats */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div>
                        <div className="text-lg font-black text-[#16CA9A]">500+</div>
                        <div className="text-xs text-gray-600">Active Contracts</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-[#16CA9A]">24/7</div>
                        <div className="text-xs text-gray-600">Expert Support</div>
                      </div>
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

export default HardwareEmpowering;
