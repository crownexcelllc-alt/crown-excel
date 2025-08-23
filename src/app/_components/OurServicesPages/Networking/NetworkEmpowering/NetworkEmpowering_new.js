import React from 'react';
import Image from 'next/image';
import NetworkIT from '../../../../../Components/Images/networkIT.png';
import InfraIcon from '../../../../../Components/Images/network-infra.png';
import WirelessIcon from '../../../../../Components/Images/wireless.png';
import SecurityIcon from '../../../../../Components/Images/security.png';
import MonitoringIcon from '../../../../../Components/Images/monitoring.png';
import Icon5G from '../../../../../Components/Images/5g.png';
import IconCloud from '../../../../../Components/Images/Cloud Networking.png';
import IconAI from '../../../../../Components/Images/AI-Powered Analytics.png';
import IconHealthcare from '../../../../../Components/Images/healthcare.png';
import IconEducation from '../../../../../Components/Images/education.png';
import IconManufacturing from '../../../../../Components/Images/manufacturing.png';
import IconRetail from '../../../../../Components/Images/retail.png';
import IconCheck from '../../../../../Components/Images/check.png';
// import Step1 from '../../../../../Components/Images/step1.png';
// import Step2 from '../../../../../Components/Images/step2.png';
// import Step3 from '../../../../../Components/Images/step3.png';
// import Step4 from '../../../../../Components/Images/step4.png';

const NetworkEmpowering = () => {
  const networkServices = [
    {
      id: 1,
      title: "Network Infrastructure Design",
      description: "Complete network architecture planning with scalable solutions for enterprise growth.",
      features: ["LAN/WAN Setup", "Network Topology", "Bandwidth Planning", "Future Scaling"],
  icon: InfraIcon
    },
    {
      id: 2,
      title: "Wireless Solutions",
      description: "High-performance WiFi networks with seamless coverage and advanced security protocols.",
      features: ["WiFi 6 Technology", "Mesh Networks", "Guest Access", "Coverage Analysis"],
  icon: WirelessIcon
    },
    {
      id: 3,
      title: "Network Security",
      description: "Comprehensive security framework to protect your network from cyber threats.",
      features: ["Firewall Setup", "VPN Solutions", "Threat Detection", "Access Control"],
  icon: SecurityIcon
    },
    {
      id: 4,
      title: "Network Monitoring",
      description: "24/7 network monitoring and maintenance to ensure optimal performance and uptime.",
      features: ["Real-time Monitoring", "Performance Analytics", "Fault Detection", "Remote Support"],
  icon: MonitoringIcon
    }
  ];

  const networkStats = [
    { value: "99.9%", label: "Network Uptime" },
    { value: "24/7", label: "Technical Support" },
    { value: "500+", label: "Networks Deployed" },
    { value: "10Gb", label: "Maximum Speed" }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-[#16CA9A]/5 to-transparent rounded-full -top-48 -left-48"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-[#084032]/5 to-transparent rounded-full top-1/2 -right-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white font-semibold rounded-full mb-6">
            <span className="text-sm">🌐 Enterprise Networking Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
            Complete Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">Infrastructure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From design to deployment, we provide end-to-end networking solutions that scale with your business and ensure seamless connectivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {networkServices.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#16CA9A] group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <Image src={service.icon} alt={service.title + ' icon'} width={40} height={40} style={{ filter: 'brightness(0)' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full"></div>
                    <span className="text-xs text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
                Why Choose Our Networking Solutions?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our comprehensive networking approach ensures your business stays connected, secure, and scalable. 
                We combine cutting-edge technology with proven methodologies to deliver exceptional results.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center">
                  <Image src={IconCheck} alt="Check" width={20} height={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Enterprise-Grade Security</h4>
                  <p className="text-gray-600 text-sm">Advanced security protocols and monitoring systems protect your network 24/7.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Scalable Architecture</h4>
                  <p className="text-gray-600 text-sm">Future-ready infrastructure that grows with your business needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Expert Support Team</h4>
                  <p className="text-gray-600 text-sm">Dedicated network engineers available round-the-clock for support.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Schedule Network Consultation
                  <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={NetworkIT}
                width={500}
                height={350}
                alt="Network Infrastructure"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#16CA9A]/20 to-[#084032]/20 rounded-2xl blur-xl"></div>
          </div>
        </div>

        {/* Network Technologies Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
              Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">Network Technologies</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We leverage the latest networking technologies to deliver superior performance and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image src={Icon5G} alt="AI" width={40} height={40} style={{ filter: 'brightness(1) invert(1)' }} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">5G Integration</h4>
              <p className="text-gray-600 text-sm">Ultra-fast connectivity with low latency for mission-critical applications</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image src={IconCloud} alt="Cloud" width={40} height={40} style={{ filter: 'brightness(1) invert(1)' }} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Cloud Networking</h4>
              <p className="text-gray-600 text-sm">Hybrid cloud solutions for seamless on-premise and cloud integration</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image src={IconAI} alt="AI" width={40} height={40} style={{ filter: 'brightness(1) invert(1)' }} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">AI-Powered Analytics</h4>
              <p className="text-gray-600 text-sm">Intelligent network optimization with predictive maintenance capabilities</p>
            </div>
          </div>
        </div>

        {/* Industry Solutions Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
              Industry-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">Network Solutions</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tailored networking solutions designed for your industry's unique requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#16CA9A]">
              <div className="text-3xl mb-3">🏥</div>
              <Image src={IconHealthcare} alt="Healthcare" width={32} height={32} style={{ filter: 'brightness(0)' }} />
              <h4 className="text-lg font-bold text-gray-800 mb-2">Healthcare</h4>
              <p className="text-gray-600 text-sm">HIPAA-compliant networks with high availability for patient care systems</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#16CA9A]">
              <div className="text-3xl mb-3">🏫</div>
              <Image src={IconEducation} alt="Education" width={32} height={32} style={{ filter: 'brightness(0)' }} />
              <h4 className="text-lg font-bold text-gray-800 mb-2">Education</h4>
              <p className="text-gray-600 text-sm">Scalable campus networks supporting thousands of concurrent users</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#16CA9A]">
              <div className="text-3xl mb-3">🏭</div>
              <Image src={IconManufacturing} alt="Manufacturing" width={32} height={32} style={{ filter: 'brightness(0)' }} />
              <h4 className="text-lg font-bold text-gray-800 mb-2">Manufacturing</h4>
              <p className="text-gray-600 text-sm">Industrial-grade networks for IoT devices and automation systems</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#16CA9A]">
              <div className="text-3xl mb-3">🏪</div>
              <Image src={IconRetail} alt="Retail" width={32} height={32} style={{ filter: 'brightness(0)' }} />
              <h4 className="text-lg font-bold text-gray-800 mb-2">Retail</h4>
              <p className="text-gray-600 text-sm">Secure POS networks with guest WiFi and inventory management</p>
            </div>
          </div>
        </div>

        {/* Implementation Process Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-montserrat">
              Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] to-[#084032]">Implementation Process</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A systematic approach ensuring successful network deployment from planning to optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Assessment</h4>
              <p className="text-gray-600 text-sm">Comprehensive analysis of current infrastructure and future requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Design</h4>
              <p className="text-gray-600 text-sm">Custom network architecture tailored to your specific business needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Deployment</h4>
              <p className="text-gray-600 text-sm">Professional installation with minimal disruption to operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Optimization</h4>
              <p className="text-gray-600 text-sm">Continuous monitoring and performance tuning for optimal results</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Network Performance Metrics</h3>
            <p className="text-white/80">Proven results across enterprise deployments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {networkStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkEmpowering;
