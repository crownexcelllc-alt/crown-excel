"use client";
import React from 'react';
import Image from 'next/image';
import empoweringImage from '../../../../../Components/Images/networkempower.png';
import NetworkIT from '../../../../../Components/Images/hardwarerepairempowering.png';

const HardwareRepairEmpowering = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#16CA9A] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-[#16CA9A] transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-4 border-[#16CA9A] rounded-full animate-spin"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-gradient-to-r from-[#16CA9A] to-[#084032] opacity-30 rounded-lg transform rotate-12"></div>
      </div>

      {/* Matrix-like grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #16CA9A 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-gray-900 order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-[#16CA9A] to-[#084032] p-4 rounded-2xl shadow-2xl">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-[#16CA9A] to-[#084032] transform skew-x-12"></div>
                  <span className="text-[#16CA9A] font-bold uppercase tracking-widest text-sm">SECURITY SOLUTIONS</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black leading-none">
                  <span className="block text-gray-900">Complete Security,</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#16CA9A] via-[#32a987] to-[#084032] animate-pulse">
                    Protecting Your Business
                  </span>
                  <span className="block text-3xl md:text-4xl font-medium text-gray-700 mt-4">
                    Peace of Mind, 24/7 Protection
                  </span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Crown Excel delivers advanced security solutions for your business. From network security, endpoint protection, firewalls, and surveillance to compliance and risk management—our experts keep your data, devices, and people safe. Focus on growth, knowing your business is protected by the latest technology and proactive support.
                </p>
                <ul className="list-disc pl-6 text-lg text-gray-800 space-y-2">
                  <li>Network security & firewalls</li>
                  <li>Endpoint protection & antivirus</li>
                  <li>Surveillance & access control</li>
                  <li>Data privacy & compliance</li>
                  <li>Threat monitoring & response</li>
                  <li>Security consulting & audits</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white font-bold rounded-2xl shadow-2xl hover:shadow-[#16CA9A]/25 transition-all duration-300 transform hover:scale-105 group">
                    <span className="mr-3">📞</span>
                    Get Free Security Audit
                  </button>
                  <button className="inline-flex items-center px-8 py-5 border-2 border-[#16CA9A] text-[#16CA9A] font-bold rounded-2xl hover:bg-[#16CA9A] hover:text-white transition-all duration-300">
                    <span className="mr-2">📝</span>
                    Request Solution
                  </button>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#16CA9A]/20 via-[#32a987]/10 to-[#084032]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-white to-green-50 p-8 transform rotate-6 hover:rotate-0 transition-transform duration-700 shadow-2xl border-2 border-[#16CA9A]/30" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}>
                  <Image
                    src={empoweringImage}
                    width={500}
                    height={350}
                    alt="Security Empowering"
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

        {/* Service Features Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              WHY CHOOSE <span className="text-[#16CA9A]">CROWN EXCEL?</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-[#16CA9A] to-[#084032] mx-auto mb-8 transform skew-x-12"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We secure your business with the latest technology and expert support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-lg border border-[#16CA9A]/20 hover:border-[#16CA9A]/50 transition-all duration-300">
              <div className="text-3xl mb-3 p-3 bg-gradient-to-r from-[#16CA9A]/10 to-[#084032]/10 rounded-xl inline-block">🔒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Protection</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Multi-layered security for networks, devices, and data.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-lg border border-[#16CA9A]/20 hover:border-[#16CA9A]/50 transition-all duration-300">
              <div className="text-3xl mb-3 p-3 bg-gradient-to-r from-[#16CA9A]/10 to-[#084032]/10 rounded-xl inline-block">📹</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Surveillance & Access</h3>
              <p className="text-gray-600 leading-relaxed text-sm">CCTV, access control, and monitoring for total safety.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-lg border border-[#16CA9A]/20 hover:border-[#16CA9A]/50 transition-all duration-300">
              <div className="text-3xl mb-3 p-3 bg-gradient-to-r from-[#16CA9A]/10 to-[#084032]/10 rounded-xl inline-block">🧑‍💻</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Certified security professionals and rapid response.</p>
            </div>
            <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-lg border border-[#16CA9A]/20 hover:border-[#16CA9A]/50 transition-all duration-300">
              <div className="text-3xl mb-3 p-3 bg-gradient-to-r from-[#16CA9A]/10 to-[#084032]/10 rounded-xl inline-block">📊</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance & Audits</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Stay compliant with regular audits and reporting.</p>
            </div>
          </div>
        </div>

        {/* Security Solutions Types Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              WE SECURE <span className="text-[#16CA9A]">EVERYTHING</span>
            </h2>
            <p className="text-xl text-gray-700">Networks, devices, data, people, and more</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["Firewalls", "Antivirus", "CCTV", "Access Control", "Data Encryption", "Threat Monitoring", "Compliance", "Security Consulting", "Risk Management", "Incident Response"].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-r from-white to-green-50 border border-[#16CA9A]/30 px-8 py-4 rounded-2xl hover:border-[#16CA9A] transition-all duration-300 transform hover:scale-110 shadow-lg text-[#16CA9A] font-bold text-lg">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with Second Image */}
        <div className="relative">
          <div className="bg-gradient-to-r from-[#16CA9A] to-[#084032] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 text-white">
                <h3 className="text-4xl font-black mb-6">Stay Secure—Let Us Protect Your Business!</h3>
                <p className="text-xl mb-6 opacity-90">
                  Don’t leave your business vulnerable. Crown Excel provides complete security solutions, so you can focus on success while we keep you protected. Call us for a free security audit!
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Network & endpoint security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Surveillance & access control</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">Compliance & risk management</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center px-8 py-4 bg-[#16CA9A] text-white font-bold rounded-xl hover:bg-[#084032] hover:text-white transition-colors duration-300 shadow-lg">
                    <span className="mr-2">📞</span>
                    Call Now For Free Security Audit
                  </button>
                  <button className="inline-flex items-center px-8 py-4 border-2 border-[#16CA9A] text-[#16CA9A] font-bold rounded-xl hover:bg-[#16CA9A] hover:text-white transition-colors duration-300">
                    <span className="mr-2">📝</span>
                    Request Solution
                  </button>
                </div>
              </div>
              <div className="relative p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-[#16CA9A]/20 rounded-3xl blur-2xl"></div>
                  <Image
                    src={NetworkIT}
                    width={400}
                    height={300}
                    alt="Security Solutions"
                    className="relative w-full h-auto rounded-3xl shadow-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-[#16CA9A]/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-white">🛡️</div>
                      <div className="text-xs text-white font-bold">SECURED</div>
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

export default HardwareRepairEmpowering;
