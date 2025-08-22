import React from 'react';
import NetworkingSmartImage from '../../../../../Components/Images/manageditsmart.png';
import SignalTower from '../../../../../Components/Images/signaltower.png';
import Image from 'next/image';
import Link from 'next/link';

const ManagedITSmart = () => {
  const infrastructureServices = [
    {
      title: "Server Infrastructure",
      description: "Enterprise-grade server solutions with high availability, load balancing, and redundancy for mission-critical applications.",
      features: ["Physical & Virtual Servers", "Load Balancing", "High Availability Clusters", "Server Monitoring"],
      icon: "🖥️"
    },
    {
      title: "Network Infrastructure", 
      description: "Robust network architecture design with advanced security, optimal performance, and seamless connectivity across all locations.",
      features: ["Network Design", "Firewall Configuration", "VPN Setup", "Bandwidth Optimization"],
      icon: "🌐"
    },
    {
      title: "Storage Solutions",
      description: "Scalable storage systems with automated backup, disaster recovery, and data protection for business continuity.",
      features: ["SAN/NAS Storage", "Backup Solutions", "Disaster Recovery", "Data Archiving"],
      icon: "💾"
    },
    {
      title: "Virtualization",
      description: "Complete virtualization solutions to maximize resource utilization, reduce costs, and improve system flexibility.",
      features: ["VMware Solutions", "Hyper-V Implementation", "Virtual Desktop Infrastructure", "Container Solutions"],
      icon: "📦"
    },
    {
      title: "Security Infrastructure",
      description: "Multi-layered security framework protecting your IT assets from cyber threats and ensuring compliance.",
      features: ["Endpoint Protection", "Network Security", "Identity Management", "Compliance Monitoring"],
      icon: "🔒"
    },
    {
      title: "Monitoring & Management",
      description: "24/7 proactive monitoring with real-time alerts, performance optimization, and automated maintenance.",
      features: ["Real-time Monitoring", "Performance Analytics", "Automated Alerts", "Remote Management"],
      icon: "📊"
    }
  ];

  const infrastructureStats = [
    { value: "99.9%", label: "Infrastructure Uptime", color: "text-[#16CA9A]" },
    { value: "24/7", label: "Monitoring Support", color: "text-[#119472]" },
    { value: "50+", label: "Enterprise Clients", color: "text-[#13745a]" },
    { value: "15min", label: "Average Response Time", color: "text-[#0d5c47]" }
  ];

  const managementProcess = [
    {
      step: "01",
      title: "Infrastructure Assessment",
      description: "Comprehensive evaluation of your current IT infrastructure, identifying gaps, vulnerabilities, and optimization opportunities.",
      timeline: "Week 1-2"
    },
    {
      step: "02", 
      title: "Strategic Planning",
      description: "Development of customized infrastructure roadmap aligned with your business objectives and growth requirements.",
      timeline: "Week 3"
    },
    {
      step: "03",
      title: "Implementation & Deployment",
      description: "Professional deployment of infrastructure components with minimal business disruption and comprehensive testing.",
      timeline: "Week 4-8"
    },
    {
      step: "04",
      title: "Ongoing Management",
      description: "Continuous monitoring, maintenance, and optimization ensuring peak performance and proactive issue resolution.",
      timeline: "Ongoing"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 border border-[#16CA9A] transform rotate-45"></div>
        <div className="absolute top-60 right-40 w-32 h-32 bg-[#119472]/10 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 border-2 border-[#13745a] rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border border-[#0d5c47] transform -rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section with Hexagonal Design */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-[#16CA9A] transform rotate-45"></div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  IT Infrastructure
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">
                    Excellence
                  </span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive IT infrastructure management delivering enterprise-grade solutions, 
                24/7 monitoring, and strategic technology optimization for sustainable business growth.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {infrastructureStats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center">
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <img src="/images/signal-icon.png" alt="" className="w-5 h-5 mr-3" />
                Assess My Infrastructure
                <svg className="w-4 h-4 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Image Side with Hexagonal Frame */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#16CA9A]/20 to-[#084032]/20 p-8 rounded-3xl">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl"></div>
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src={NetworkingSmartImage}
                    width={500}
                    height={350}
                    alt="IT Infrastructure Management"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#16CA9A] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Services - Diagonal Grid Layout */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end IT infrastructure solutions designed to support your business operations with reliability, security, and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureServices.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300 opacity-20"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform -rotate-1 group-hover:rotate-0 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-lg flex items-center justify-center text-white text-xl">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[#16CA9A] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management Process - Zigzag Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">Management Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to IT infrastructure management ensuring seamless deployment and optimal performance
            </p>
          </div>

          <div className="relative">
            {/* Zigzag connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#16CA9A] to-[#084032] transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managementProcess.map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">{process.step}</span>
                      </div>
                      <div className="text-sm text-[#16CA9A] font-semibold mb-2">{process.timeline}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section with Angular Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#16CA9A] to-[#084032] transform skew-y-1 rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-[#16CA9A] to-[#084032] p-12 rounded-3xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your IT Infrastructure?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a comprehensive infrastructure assessment and discover how we can enhance your IT operations for better performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-white text-[#084032] font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                Schedule Assessment
              </Link>
              <Link 
                href="/our-services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#084032] transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedITSmart;
