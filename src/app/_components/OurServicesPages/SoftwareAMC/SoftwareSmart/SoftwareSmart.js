import React from 'react'
import Thunder from '../../../../../Components/Images/thunder.png'
import Rocket from '../../../../../Components/Images/rocket.png'
import Lock from '../../../../../Components/Images/lock.png'   
import Design  from '../../../../../Components/Images/ui-ux.png'   
import Backend from '../../../../../Components/Images/backend.png'   
import AppDevelopment from '../../../../../Components/Images/app-development.png'   
import Cloud from '../../../../../Components/Images/cloud.png'   
import Devops from '../../../../../Components/Images/devops.png'   
import UIUX from '../../../../../Components/Images/front-end-programming.png'   
import Link from 'next/link'
const SoftwareSmart = () => {
  const categories = [
    {
      id: 1,
      title: "Web Development",
      description: "Professional web development services to create modern, responsive websites that drive business growth and enhance user experience.",
      features: ["Responsive Design", "Fast Performance", "SEO Friendly", "Mobile Optimized"],
      bgColor: "from-[#16CA9A] to-[#084032]"
    },
    {
      id: 2,
      title: "Mobile App Development", 
      description: "Custom mobile applications for iOS and Android platforms with intuitive design and powerful functionality.",
      features: ["Cross-Platform", "Native Performance", "User-Friendly", "Scalable"],
       bgColor: "from-[#16CA9A] to-[#084032]"
    },
    {
      id: 3,
      title: "Custom Software Solutions",
      description: "Tailored software development to meet your specific business needs and automate your processes effectively.",
      features: ["Custom Built", "Scalable Architecture", "Integration Ready", "Support Included"],
      bgColor: "from-[#16CA9A] to-[#084032]"
    },
    {
      id: 4,
      title: "E-commerce Development",
      description: "Complete online store solutions with secure payment systems and inventory management for growing businesses.",
      features: ["Secure Payments", "Inventory Control", "Order Management", "Analytics"],
        bgColor: "from-[#16CA9A] to-[#084032]"
    }
  ]

  return (
    <div>
      {/* Technology Overview Section */}
      <div className="py-16 bg-gradient-to-r from-[#16CA9A] to-[#084032]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white font-montserrat">
            Our Software Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <div 
                key={category.id} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-[#ffd900] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4`}>
                  {category.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                  {category.title}
                </h3>
                <p className="text-white/80 text-sm font-montserrat">
                  {index === 0 && "Modern, fast-loading websites with responsive design and SEO optimization for maximum business impact."}
                  {index === 1 && "Cross-platform mobile apps with native performance for iOS and Android devices worldwide."}
                  {index === 2 && "Tailored business software solutions that automate processes and boost operational efficiency."}
                  {index === 3 && "Complete online stores with secure payments, inventory management, and analytics dashboard."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Detail Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-[780] text-center uppercase mb-16 text-gray-800 font-montserrat">
            {/* Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d8b6e] to-[#ffd900]">Software Solutions</span> */}
          Custom IT Innovations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((category, index) => (
              <div 
                key={category.id} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-[#ffd900] rounded-full flex items-center justify-center text-black font-bold text-lg mr-4`}>
                      {category.id}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 font-montserrat">
                      {category.title}
                    </h3>
                  </div>
                  <div className={`w-16 h-1 ml-15 -mt-5 bg-gradient-to-r ${category.bgColor} rounded-full`}></div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 font-montserrat">
                  {category.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.bgColor} rounded-full`}></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Action Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${category.bgColor} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group relative overflow-hidden`}>
                  <span className="relative z-10 flex items-center justify-center">
                    Learn More & Start Project
                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies We Use Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-montserrat">
            Technologies We Master
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Technologies */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#1d8b6e]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-lg flex items-center justify-center mr-3">
                  <img src={UIUX.src} alt="Frontend" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat">Frontend</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">User Interface & Experience</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">React.js</span>
                  </div>
                  <span className="text-xs text-[#1d8b6e] font-semibold">Expert</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Next.js</span>
                  </div>
                  <span className="text-xs text-[#1d8b6e] font-semibold">Expert</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Vue.js</span>
                  </div>
                  <span className="text-xs text-[#119472] font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Angular</span>
                  </div>
                  <span className="text-xs text-[#119472] font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">HTML5/CSS3</span>
                  </div>
                  <span className="text-xs text-[#1d8b6e] font-semibold">Expert</span>
                </div>
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#119472]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#119472] to-[#13745a] rounded-lg flex items-center justify-center mr-3">
                  <img src={Backend.src} alt="Backend" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat">Backend</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">Server & API Development</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#119472] to-[#13745a] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Node.js</span>
                  </div>
                  <span className="text-xs text-[#119472] font-semibold">Expert</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#119472] to-[#13745a] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Python</span>
                  </div>
                  <span className="text-xs text-[#119472] font-semibold">Expert</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#119472] to-[#13745a] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">PHP</span>
                  </div>
                  <span className="text-xs text-[#13745a] font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#119472] to-[#13745a] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Java</span>
                  </div>
                  <span className="text-xs text-[#13745a] font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#119472] to-[#13745a] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">.NET</span>
                  </div>
                  <span className="text-xs text-[#13745a] font-semibold">Advanced</span>
                </div>
              </div>
            </div>

            {/* Mobile Technologies */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#13745a]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#13745a] to-[#0d5c47] rounded-lg flex items-center justify-center mr-3">
                  <img src={AppDevelopment.src} alt="Mobile" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat">Mobile</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">iOS & Android Apps</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#13745a] to-[#0d5c47] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">React Native</span>
                  </div>
                  <span className="text-xs text-[#13745a] font-semibold">Expert</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#13745a] to-[#0d5c47] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Flutter</span>
                  </div>
                  <span className="text-xs text-[#13745a] font-semibold">Expert</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#13745a] to-[#0d5c47] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">iOS (Swift)</span>
                  </div>
                  <span className="text-xs text-[#0d5c47] font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#13745a] to-[#0d5c47] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Android (Kotlin)</span>
                  </div>
                  <span className="text-xs text-[#0d5c47] font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#13745a] to-[#0d5c47] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Xamarin</span>
                  </div>
                  <span className="text-xs text-[#0d5c47] font-semibold">Intermediate</span>
                </div>
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#0d5c47]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#0d5c47] to-[#084032] rounded-lg flex items-center justify-center mr-3">
                  <img src={Cloud.src} alt="Database & Cloud" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat">Database & Cloud</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">Data Management & Hosting</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#0d5c47] to-[#084032] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">MySQL</span>
                  </div>
                  <span className="text-xs text-[#0d5c47] font-semibold">Expert</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#0d5c47] to-[#084032] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">PostgreSQL</span>
                  </div>
                  <span className="text-xs text-[#0d5c47] font-semibold">Expert</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#0d5c47] to-[#084032] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">MongoDB</span>
                  </div>
                  <span className="text-xs text-[#084032] font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#0d5c47] to-[#084032] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">AWS</span>
                  </div>
                  <span className="text-xs text-[#084032] font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#0d5c47] to-[#084032] rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Google Cloud</span>
                  </div>
                  <span className="text-xs text-[#084032] font-semibold">Advanced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Technologies Row */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* DevOps & Tools */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#1d8b6e]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-lg flex items-center justify-center mr-3">
                  <img src={Devops.src} alt="DevOps & Tools" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat">DevOps & Tools</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">Development & Deployment</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Docker</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Git</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Jenkins</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Kubernetes</span>
                </div>
              </div>
            </div>

            {/* Design & Testing */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#1d8b6e]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-lg flex items-center justify-center mr-3">
                  <img src={Design.src} alt="Design & Testing" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 font-montserrat">Design & Testing</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">UI/UX & Quality Assurance</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Figma</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Adobe XD</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Jest</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">Cypress</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Technology Info */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-montserrat">
              Why Choose Our Technology Stack?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1d8b6e] to-[#119472] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={Thunder.src} alt="Latest Technologies" className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 font-montserrat">Latest Technologies</h4>
                <p className="text-gray-600 text-sm">We use cutting-edge technologies to ensure your project is future-ready and scalable.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#119472] to-[#13745a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={Lock.src} alt="Secure & Reliable" className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 font-montserrat">Secure & Reliable</h4>
                <p className="text-gray-600 text-sm">Our technology choices prioritize security and reliability for your business applications.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#13745a] to-[#0d5c47] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={Rocket.src} alt="High Performance" className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 font-montserrat">High Performance</h4>
                <p className="text-gray-600 text-sm">Optimized for speed and performance to deliver exceptional user experiences.</p>
              </div>
            </div>
          </div>

          {/* Inquiry Button Section */}
          <div className="mt-8 text-center">
            <Link 
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1d8b6e] to-[#119472] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Start Your Project Inquiry
                <svg className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <p className="mt-4 text-gray-600 text-sm font-montserrat">
              Get a free consultation about your software development needs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareSmart
