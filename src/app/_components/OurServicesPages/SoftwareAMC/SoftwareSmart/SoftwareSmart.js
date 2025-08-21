import React from 'react'
import NetworkingSmartImage from '../../../../../Components/Images/softwaresmart.png'
import SignalTower from '../../../../../Components/Images/signaltower.png'
import WebDevImg from '../../../../../Components/Images/web-development.png'
import AppDevImg from '../../../../../Components/Images/app-development.png'
import SoftwareDevImg from '../../../../../Components/Images/software-development.png'
import EcommerceImg from '../../../../../Components/Images/software-development.png'
import SocialMediaImg from '../../../../../Components/Images/software-development.png'
// import EcommerceImg from '../../../../../Components/Images/ecommerce-development.png'
// import SocialMediaImg from '../../../../../Components/Images/social-media.png'
import DigitalMarketingImg from '../../../../../Components/Images/digital-marketing.png'
import SeoImg from '../../../../../Components/Images/seo-optimization.png'
import ContentWritingImg from '../../../../../Components/Images/seo-optimization.png'
// import ContentWritingImg from '../../../../../Components/Images/content-writing.png'
import Image from 'next/image'
const SoftwareSmart = () => {
  const categories = [
    {
      id: 1,
      title: "Web Development",
      description: "Create stunning, responsive websites that captivate your audience and drive conversions. Our expert developers build modern, fast-loading websites with cutting-edge technologies.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      image: WebDevImg,
      bgColor: "#1d8b6e"
    },
    {
      id: 2,
      title: "App Development",
      description: "Transform your ideas into powerful mobile and desktop applications. We develop user-friendly, feature-rich apps for iOS, Android, and cross-platform solutions.",
      features: ["Native & Cross-platform", "User-Friendly UI/UX", "Performance Optimized", "App Store Ready"],
      image: AppDevImg,
      bgColor: "#119472"
    },
    {
      id: 3,
      title: "Software Development",
      description: "Build robust, scalable software solutions tailored to your business needs. From enterprise applications to custom software, we deliver excellence.",
      features: ["Custom Solutions", "Scalable Architecture", "Enterprise Grade", "Cloud Integration"],
      image: SoftwareDevImg,
      bgColor: "#13745a"
    },
    {
      id: 4,
      title: "Ecommerce Development",
      description: "Launch your online store with powerful ecommerce platforms. We create secure, user-friendly online shopping experiences that boost sales.",
      features: ["Secure Payments", "Inventory Management", "Mobile Commerce", "Analytics Integration"],
      image: EcommerceImg,
      bgColor: "#0d5c47"
    },
    {
      id: 5,
      title: "Social Media Management",
      description: "Build your brand presence across social platforms. We create engaging content, manage communities, and drive meaningful interactions.",
      features: ["Content Strategy", "Community Management", "Brand Building", "Engagement Analytics"],
      image: SocialMediaImg,
      bgColor: "#084032"
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Accelerate your growth with data-driven digital marketing strategies. From PPC to email marketing, we deliver measurable results.",
      features: ["PPC Campaigns", "Email Marketing", "Conversion Optimization", "ROI Tracking"],
      image: DigitalMarketingImg,
      bgColor: "#1d8b6e"
    },
    {
      id: 7,
      title: "SEO Optimization",
      description: "Dominate search results and increase organic traffic. Our SEO experts optimize your website for better rankings and visibility.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
      image: SeoImg,
      bgColor: "#119472"
    },
    {
      id: 8,
      title: "Content Writing",
      description: "Engage your audience with compelling, high-quality content. Our writers create content that informs, persuades, and converts.",
      features: ["SEO Content", "Blog Writing", "Copywriting", "Technical Writing"],
      image: ContentWritingImg,
      bgColor: "#13745a"
    }
  ]

  return (
    <div>
      {/* Main Section */}
      <div className='flex flex-col md:flex-row lg:flex-row items-center lg:items-center  justify-center gap-10 px-2 md:px-10 lg:px-15 py-10 md:py-10 lg:py-10'>
        <div className="networking-left mt-0 md:mt-10 lg:mt-10 relative">
          <Image alt='' src={SignalTower} width={40} height={56} className='absolute -mt-5'/>
          <div className='w-full md:w-[327px] lg:w-[525px] p-[30px] rounded-[30px] h-auto bg-[#ffd900] text-black'>
            <h3 className='text-[18px] md:text-[20px] lg:text-[22px] font-bold mb-6 text-center font-montserrat'>
              Our Digital Solutions Categories
            </h3>
            <div className='grid grid-cols-2 gap-3 mb-4'>
              <button className='bg-white text-black px-4 py-3 rounded-lg font-semibold text-[12px] md:text-[14px] hover:bg-gray-100 transition-all duration-300 shadow-md'>
                Web Development
              </button>
              <button className='bg-white text-black px-4 py-3 rounded-lg font-semibold text-[12px] md:text-[14px] hover:bg-gray-100 transition-all duration-300 shadow-md'>
                App Development
              </button>
              <button className='bg-white text-black px-4 py-3 rounded-lg font-semibold text-[12px] md:text-[14px] hover:bg-gray-100 transition-all duration-300 shadow-md'>
                Software Development
              </button>
              <button className='bg-white text-black px-4 py-3 rounded-lg font-semibold text-[12px] md:text-[14px] hover:bg-gray-100 transition-all duration-300 shadow-md'>
                Ecommerce Development
              </button>
              <button className='bg-white text-black px-4 py-3 rounded-lg font-semibold text-[12px] md:text-[14px] hover:bg-gray-100 transition-all duration-300 shadow-md'>
                Social Media Management
              </button>
              <button className='bg-white text-black px-4 py-3 rounded-lg font-semibold text-[12px] md:text-[14px] hover:bg-gray-100 transition-all duration-300 shadow-md'>
                Digital Marketing
              </button>
              <button className='bg-white text-black px-4 py-3 rounded-lg font-semibold text-[12px] md:text-[14px] hover:bg-gray-100 transition-all duration-300 shadow-md'>
                SEO Optimization
              </button>
              <button className='bg-white text-black px-4 py-3 rounded-lg font-semibold text-[12px] md:text-[14px] hover:bg-gray-100 transition-all duration-300 shadow-md'>
                Content Writing
              </button>
            </div>
            <p className='text-[14px] md:text-[16px] leading-[24px] text-center font-montserrat'>
              Professional digital solutions that transform your business and drive growth across all platforms.
            </p>
          </div>
        </div>
        <div className="networking-right ">
          <Image alt='' src={NetworkingSmartImage} width={602} height={408} className='md:w-[400px] md:h-[358px] lg:w-[602px] lg:h-[408px]'/>
        </div>
      </div>

      {/* Categories Detail Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 font-montserrat">
            Explore Our <span className="text-[#1d8b6e]">Digital Solutions</span>
          </h2>
          
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div 
                key={category.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-2">
                    <div className={`absolute inset-0 bg-gradient-to-r  opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={500}
                      height={400}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div> */}
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-all duration-500 group-hover:rotate-180">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`} style={{backgroundColor: category.bgColor}}>
                      {category.id}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 font-montserrat">
                      {category.title}
                    </h3>
                    <div className="w-20 h-1 rounded-full" style={{backgroundColor: category.bgColor}}></div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed font-montserrat">
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <div className="w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: category.bgColor}}></div>
                        <span className="text-sm font-semibold text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group" style={{backgroundColor: category.bgColor}}>
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareSmart
