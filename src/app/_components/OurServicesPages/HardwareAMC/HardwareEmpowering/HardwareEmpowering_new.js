"use client";
import React from 'react';
import Image from 'next/image';
import empoweringImage from '../../../../../Components/Images/networkempower.png';
import NetworkIT from '../../../../../Components/Images/hardwareempowering.png';

const HardwareEmpowering = () => {
  // Get quote function
  const getQuote = () => {
    // You can add form popup or redirect to contact page
    window.location.href = '/contact-us';
  };

  const amcPlans = [
    {
      type: "Short Term AMC",
      duration: "3-6 Months",
      title: "Rapid Response & Quick Solutions",
      subtitle: "Immediate IT Support for Growing Businesses",
      features: [
        "Rapid hardware diagnostics & troubleshooting",
        "Emergency repair services (4-hour response)",
        "Performance optimization & tuning",
        "Basic preventive maintenance schedules",
        "24/7 technical support hotline",
        "On-site technician visits (monthly)",
        "Hardware health monitoring reports"
      ],
      benefits: "Perfect for startups, small businesses, and immediate repair needs",
      icon: "⚡",
      color: "from-[#16CA9A] to-[#119472]",
      uptime: "99.5%",
      response: "4 Hours"
    },
    {
      type: "Long Term AMC", 
      duration: "1-3 Years",
      title: "Comprehensive Hardware Protection & Lifecycle Management",
      subtitle: "Strategic IT Infrastructure Management",
      features: [
        "Complete system maintenance & upgrades",
        "Predictive failure analysis & prevention",
        "Regular health check-ups (bi-weekly)",
        "Hardware lifecycle management planning",
        "Priority support & rapid replacements",
        "Advanced monitoring & reporting dashboards",
        "Dedicated account manager & technical team",
        "Annual technology roadmap consultation"
      ],
      benefits: "Ideal for enterprises, large businesses, and mission-critical operations",
      icon: "🛡️",
      color: "from-[#13745a] to-[#084032]",
      uptime: "99.9%",
      response: "2 Hours"
    }
  ];

  const serviceFeatures = [
    { 
      icon: "🔧", 
      title: "Certified Expert Technicians", 
      desc: "Hardware specialists with 10+ years experience and vendor certifications",
      metric: "200+ Certified Engineers"
    },
    { 
      icon: "⏰", 
      title: "24/7 Priority Support", 
      desc: "Round-the-clock assistance with guaranteed response times and escalation matrix",
      metric: "2-4 Hour Response"
    },
    { 
      icon: "📊", 
      title: "Advanced Performance Monitoring", 
      desc: "Real-time system health tracking with predictive analytics and automated alerts",
      metric: "99.9% Uptime Guarantee"
    },
    { 
      icon: "💰", 
      title: "Cost Optimization", 
      desc: "Reduce operational expenses and extend hardware lifecycle with strategic maintenance",
      metric: "40% Cost Reduction"
    },
    {
      icon: "🚀",
      title: "Rapid Deployment",
      desc: "Quick setup and integration with minimal business disruption",
      metric: "24 Hour Setup"
    },
    {
      icon: "�",
      title: "Security Compliance",
      desc: "Maintain security standards and regulatory compliance throughout maintenance",
      metric: "100% Compliant"
    }
  ];

  const industryStats = [
    { number: "500+", label: "Active AMC Contracts", sublabel: "Across multiple industries" },
    { number: "99.9%", label: "Average Uptime", sublabel: "Mission-critical systems" },
    { number: "2 Hours", label: "Average Response", sublabel: "Emergency situations" },
    { number: "₹50L+", label: "Cost Savings", sublabel: "Annual client savings" }
  ];

  const coverageAreas = [
    {
      category: "Hardware Coverage",
      items: ["Servers & Workstations", "Network Infrastructure", "Storage Systems", "Printing Solutions", "Backup Systems", "Security Appliances"]
    },
    {
      category: "Service Locations", 
      items: ["On-site Support", "Remote Monitoring", "Data Center Visits", "Multi-location Coverage", "Emergency Call-outs", "Planned Maintenance"]
    },
    {
      category: "Industry Expertise",
      items: ["Healthcare", "Manufacturing", "Financial Services", "Education", "Government", "Retail & E-commerce"]
    }
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
                    🔧 AMC SERVICES
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full"></div>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                  ENTERPRISE
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">
                    HARDWARE AMC
                  </span>
                  <span className="block text-4xl md:text-5xl font-medium text-gray-700">
                    Solutions & Support
                  </span>
                </h1>
                
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Protect your critical IT infrastructure with our comprehensive Annual Maintenance Contracts. 
                  From rapid emergency response to strategic lifecycle management, we ensure your hardware 
                  operates at peak performance with guaranteed uptime and cost optimization.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                  {industryStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-black text-[#16CA9A]">{stat.number}</div>
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
              AMC <span className="text-[#16CA9A]">SOLUTIONS</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-6 transform skew-x-12"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect maintenance plan tailored to your business needs and growth trajectory
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
                        <p className="text-sm font-semibold text-gray-800 mb-2">{plan.benefits}</p>
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <div className="bg-[#16CA9A] text-white px-4 py-2 rounded-full text-xs font-bold">
                            ENTERPRISE GRADE
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
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              WHY CHOOSE <span className="text-[#16CA9A]">OUR AMC</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-6 transform skew-x-12"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#16CA9A]/30">
                  <div className="text-center space-y-4">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#16CA9A] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                    <div className="bg-gradient-to-r from-[#16CA9A]/10 to-[#084032]/10 p-3 rounded-lg">
                      <div className="text-lg font-black text-[#16CA9A]">{feature.metric}</div>
                    </div>
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
              COMPREHENSIVE <span className="text-[#16CA9A]">COVERAGE</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-6 transform skew-x-12"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end hardware maintenance across all technology domains and industry verticals
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
                <h3 className="text-4xl font-black mb-6">Ready to Secure Your Hardware Infrastructure?</h3>
                <p className="text-xl mb-6 opacity-90">
                  Don't wait for hardware failures to disrupt your business operations. Get proactive AMC coverage today 
                  and ensure 99.9% uptime for your critical systems with our enterprise-grade maintenance solutions.
                </p>
                
                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Guaranteed SLA with penalty clauses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Dedicated account management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Flexible contract terms & pricing</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center px-8 py-4 bg-white text-[#084032] font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                    <span className="mr-2">🔍</span>
                    Start Free Hardware Assessment
                  </button>
                  <button 
                    onClick={getQuote}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#084032] transition-colors duration-300"
                  >
                    <span className="mr-2">�</span>
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
