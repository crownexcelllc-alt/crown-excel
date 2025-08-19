'use client';
import Link from 'next/link';
import React from 'react'
import Nabiha from '@/Components/Images/Nabiha.jpg'
import Farooq from '@/Components/Images/farooq.jpg'
import Shammry from '@/Components/Images/Shammry.jpg'
import Abdullah from '@/Components/Images/abdullah sallar.jpg'
import Image from 'next/image'
// import Director from '@/Components/Images/director.jpeg'
import etc1 from '@/Components/Images/etc1.jpg'
import etc2 from '@/Components/Images/etc2.jpg'
import etc3 from '@/Components/Images/etc3.jpg'
import etc4 from '@/Components/Images/etc4.png'
import etc5 from '@/Components/Images/etc5.png'
import Tarun from '@/Components/Images/Tarun.jpg'
import Ibad from '@/Components/Images/ibad.jpg'
import Saqib from '@/Components/Images/Saqib.jpg'
import Sajan from '@/Components/Images/Sajan.jpg'
import trustImg from '@/Components/Images/trusted3.png'
import familyImg from '@/Components/Images/trusted3.png'
import excellenceImg from '@/Components/Images/trusted3.png'
import communityImg from '@/Components/Images/trusted3.png'
import growthImg from '@/Components/Images/trusted3.png'
import sustainabilityImg from '@/Components/Images/trusted3.png'
import FamilyPhoto from '@/Components/Images/familyphoto.png'
import sirKhurram from '@/Components/Images/sir profile pic.png'
import Saeed from '@/Components/Images/saeed.png'
import Ashiq from '@/Components/Images/ashiq.jpg'
import waiskhan from '@/Components/Images/waiskhan.png'
import jhubar from '@/Components/Images/Jubair.jpg'
import Aslam from '@/Components/Images/aslam.jpg'
import Fazal from '@/Components/Images/fazal.jpg'
import Fidelis from '@/Components/Images/Fidelis.jpg'
import Vishal from '@/Components/Images/vishal.png'
import Lavina from '@/Components/Images/Lavina.jpg'
import ilyaskhan from '@/Components/Images/ilyaskhan.jpg'
// import etc4 from '@/Components/Images/etc4.jpg'

function CrownExcelFamily() {
  // Sample family members data - you can replace with real data
  const familyMembers = [
    {
      id: 1,
        name: "Ilyas Khan",
      position: "Managing Director",
      department: "Management",
      experience: "7+ Years",
      image: ilyaskhan,
      
      quote: "Our success is built on the foundation of trust, integrity, and family values."
    },
    {
      id: 2,
         name: "Muhammad Wais Khan",
      position: "Sales Manager",
      department: "Sales",
      experience: "7+ Years",
      image: waiskhan,
      quote: "Every decision we make reflects our commitment to our family and community."
    },
    {
      id: 3,
       name: "Saqib Afzal Khan",
      position: "Chief Operating Officer",
      department: "Operations",
      experience: "7+ Years",
      image: Saqib,
      quote: "We treat every customer like family, ensuring their success is our success."
    },
    {
      id: 4,
         name: "Vishal Pawar",
      position: "Business Development Manager",
      department: "Business Development",
      experience: "7+ Years",
      image: Vishal,
      
      quote: "Building lasting relationships is at the heart of everything we do."
    },
    {
      id: 5,
        name: "Khurram Razzaq",
      position: "Marketing Manager",
      department: "Marketing",
      experience: "7+ Years",
      image: sirKhurram,
     
      quote: "Innovation and tradition go hand in hand in our family business."
    },
    {
      id: 6,
       name:
        "Junaid Ali",
      position: "Store Operations",
      department: "Wharehouse",
      experience: "7+ Years",
      image: etc2,
    
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 7,
      name: "Brian Mwenda",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: etc1,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 8,
      name: "Abdur Rauf Abdul Zahoor",
      position: "Store Keeper",
      department: "Warehouse",
      experience: "7+ Years",
      image: etc3,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 9,
      name: "Nadeem",
      position: "Salesman",
      department: "Sales",
      experience: "7+ Years",
      image: etc4,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 10,
      name: "Tarun Sahu",
      position: "Team Leader - Corporate Sales",
      department: "Sales",
      experience: "7+ Years",
      image: Tarun,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 11,
      name: "Ibathur Rahman",
      position: "Sales Supervisor",
      department: "Sales",
      experience: "7+ Years",
      image: Ibad,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 12,
       name: "Abdullah Salar",
      position: "Sales Executive",
      department: "Sales",
      experience: "8+ Years",
      image: Abdullah,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 13,
      name: "Sajin Vijay",
      position: "Sales Executive",
      department: "Sales",
      experience: "7+ Years",
      image: Sajan,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 14,
      name: "Junaid Shafique",
      position: "Accounts Manager",
      department: "Accounts",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
     {
      id: 15,
         name: "Shamry Salam",
      position: "Receptionist",
      department: "Reception",
      experience: "10+ Years",
      image: Shammry,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 16,
      // name: "Jahubar Sathik.H",
      name: "Jubair sathik",
      position: "Logistics Coordinator",
      department: "Admin",
      experience: "7+ Years",
      image: jhubar,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 17,
    name: "Mohamed Farook",
      position: "Sales Officer",
      department: "Sales",
      experience: "12+ Years",
      image: Farooq,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 18,
      name: "Fasaludeheen ",
      position: "Accountant",
      department: "Accounts",
      experience: "7+ Years",
      image: Fazal,
      quote: "Our team is our extended family, and we grow together."
    },
    // {
    //   id: 19,
    //   name: "Saeed Khan Husain Khan",
    //   position: "Sales Executive",
    //   department: "Sales",
    //   experience: "7+ Years",
    //   image: etc5,
    //   quote: "Our team is our extended family, and we grow together."
    // },
    {
      id: 19,
      name: "Mohammad Ashik Rehaman",
      position: "Shop Assistant",
      department: "Sales",
      experience: "7+ Years",
      image: Ashiq,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 20,
       name: "Nabiha Momin",
      position: "Sales Officer",
      department: "Sales",
      experience: "15+ Years",
      image: Nabiha,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 21,
      name: "Lavina Santlalani",
      position: "Businees Development Manager",
      department: "Business Development",
      experience: "7+ Years",
      image: Lavina,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 22,
        name: "Saeed Khan",
      position: "store supervisor",
      department: "Inventory",
      experience: "7+ Years",
      image: Saeed,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 23,
      name: "Muhammad Aslam",
      position: "Accountant",
      department: "Accounts",
      experience: "7+ Years",
      image: Aslam,
      quote: "Our team is our extended family, and we grow together."
    },
    // {
    //   id: 24,
    //  name: "Abdullah Sartaj Khan",
    //   position: "Shop Assistant",
    //   department: "Sales",
    //   experience: "7+ Years",
    //   image: etc5,
    //   quote: "Our team is our extended family, and we grow together."
    // },
    // {
    //   id: 24,
    //   name: "Ibathur Rahman Abdul Nasar Abdul Nasar",
    //   position: "Sales Supervisor",
    //   department: "Sales",
    //   experience: "7+ Years",
    //   image: etc5,
    //   quote: "Our team is our extended family, and we grow together."
    // },
    {
      id: 24,
      name: "Gemuh Fidelis Mashim",
      position: "store supervisor",
      department: "Inventory",
      experience: "7+ Years",
      image: Fidelis,
      quote: "Our team is our extended family, and we grow together."
    },
  ];

  const familyValues = [
    {
      img: trustImg,
      title: "Trust & Integrity",
      description: "Building lasting relationships based on mutual trust and unwavering integrity."
    },
    {
      img: familyImg,
      title: "Company First",
      description: "Treating every team member and customer as part of our extended family."
    },
    {
      img: excellenceImg,
      title: "Excellence",
      description: "Striving for excellence in everything we do, from service to innovation."
    },
    {
      img: communityImg,
      title: "Internals Matters",
      description: "Giving back to our community and supporting those in need."
    },
    {
      img: growthImg,
      title: "Continuous Growth",
      description: "Embracing change and fostering continuous learning and development."
    },
    {
      img: sustainabilityImg,
      title: "Sustainability",
      description: "Building a sustainable future for our family and the next generation."
    }
  ];

  // const milestones = [
  //   { year: "2009", title: "Foundation", description: "Crown Excel Family established with a vision of excellence" },
  //   { year: "2012", title: "Expansion", description: "First major expansion across UAE regions" },
  //   { year: "2015", title: "Innovation", description: "Introduction of modern financial services" },
  //   { year: "2018", title: "Recognition", description: "Awarded Best Family Business in UAE" },
  //   { year: "2022", title: "Digital Transformation", description: "Complete digital transformation journey" },
  //   { year: "2024", title: "Future Ready", description: "Leading the future of financial services" }
  // ];

  return (
    <div className="min-h-screen">
      {/* Professional Header */}
      {/* <div className="bg-gradient-to-r from-[#084032] to-[#16806b] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat mb-4 tracking-tight">
              Crown Excel Family
            </h1>
            <div className="w-24 h-1 bg-[#61ce70] mx-auto mb-6"></div>
            <p className="text-xl text-white/90 font-muli max-w-3xl mx-auto">
              More than just a company, we are a family united by values, driven by excellence, and committed to serving our customers with integrity and care
            </p>
          </div>
        </div>
      </div> */}
  <section className="relative w-full h-[280px] sm:h-[180px] md:h-[260px] lg:h-[540px] overflow-hidden ">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${FamilyPhoto.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right'
      }}
    />
    <div className="absolute " />
    <div className="pointer-events-none absolute -left-24 w-[340px] h-[340px]" />
    <div className="relative h-full flex items-center justify-start">
      <div className="w-full max-w-5xl px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl ml-0 text-left">
          <h1 className="font-montserrat text-white text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-tight mb-4 drop-shadow-lg tracking-tight text-left">
            CROWN EXCEL <span className="block text-[#61ce70]">FAMILY</span>
          </h1>
          <p className="font-muli text-white/90 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed max-w-xl mb-2 text-left">
            More than just a company, we are a family united by values,<br className="hidden sm:block" /> driven by excellence, and committed to serving our customers with integrity and care.
          </p>
        </div>
      </div>
    </div>
    {/* <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#147D61] via-[#32a987] to-transparent opacity-70" /> */}
    {/* <style jsx>{`
      .banner-gradient {
        background: linear-gradient(
          to right,
          rgba(17,24,20,1) 0%,
          rgba(17,24,20,1) 12%,
          rgba(17,24,20,0.98) 22%,
          rgba(20,125,97,0.80) 34%,
          rgba(20,125,97,0.65) 44%,
          rgba(20,125,97,0.45) 52%,
          rgba(20,125,97,0.25) 58%,
          rgba(20,125,97,0.10) 62%,
          rgba(20,125,97,0) 100%
        );
      }
      @media (max-width:640px) {
        .banner-gradient {
          background: linear-gradient(
            to right,
            rgba(17,24,20,1) 0%,
            rgba(17,24,20,1) 22%,
            rgba(17,24,20,0.98) 36%,
            rgba(24,90,72,0.80) 48%,
            rgba(24,110,85,0.52) 58%,
            rgba(24,110,85,0.30) 66%,
            rgba(24,110,85,0.12) 72%,
            rgba(24,110,85,0) 82%
          );
        }
      }
    `}</style> */}
  </section>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Family Story Section */}
          <div className="">
            {/* <Image src={FamilyPhoto} alt='familyphoto' /> */}
            {/* <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-6">
                  Our Story – Crown Excel
                </h2>
                <div className="w-16 h-1 bg-[#61ce70] mb-6"></div>
                <div className="space-y-6 text-gray-700 font-muli leading-8">
                  <p className="text-lg">
                    {`Founded in 2009, Crown Excel began as a small family-run business with big dreams. What started as a modest venture has grown into one of the UAE’s most trusted wholesale and retail providers of tech products and services, all while staying true to our founding values.`}
                  </p>
                  <p className="text-lg">
                    {`Today, Crown Excel has expanded far beyond family ties to embrace a diverse team of dedicated individuals from various social, cultural, and linguistic backgrounds. Each team member plays a vital role, making phenomenal contributions toward our growth, customer relationships, and ongoing success. Alongside our partners who share our vision of excellence, integrity, and service, we continue to build a brand that makes a meaningful impact.`}
                  </p>
                  <p className="text-lg">
                    {` We believe that true success is not measured by profit alone, but by the positive influence we create in people’s lives—customers, employees, and communities alike.`}
                  </p>
                  <p className="text-lg">
                    {`As we continue to grow, we remain deeply committed to our core principles:`}
                  </p>
                  <p className="text-lg">
                    {`Treating everyone like family`}
                  </p>
                  <p className="text-lg">
                    {`Upholding the highest standards of integrity`}
                  </p>
                  <p className="text-lg">
                    {`Giving back to the community that has supported us for over a decade`}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#16806b] to-[#084032] rounded-2xl p-8 text-white">
                  <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                  <h3 className="text-2xl font-bold font-montserrat mb-4">Family Values</h3>
                  <ul className="space-y-3 font-muli">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#61ce70] rounded-full mr-3"></span>
                      Trust & Integrity
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#61ce70] rounded-full mr-3"></span>
                      Excellence in Service
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#61ce70] rounded-full mr-3"></span>
                      Community First
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#61ce70] rounded-full mr-3"></span>
                      Continuous Growth
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div> 
          <div className="mb-16 mt-3">    
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">
                Our Values
              </h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {familyValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center px-8 py-10 border border-[#e5e7eb]"
                  style={{ minHeight: '260px' }}
                >
                  {/* Icon Top Section (custom per title) */}
                  <div className="w-14 h-14 flex items-center justify-center bg-[#16806b] rounded-xl mb-6">
                    {value.title === 'Trust & Integrity' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.81 13.25 5.09C14 3.81 15.46 3 17 3C20 3 22.5 5.5 22.5 8.5C22.5 13.5 15 21 15 21H12Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                    {value.title === 'Company First' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#fff" strokeWidth="2"/><path d="M16 3H8V7H16V3Z" stroke="#fff" strokeWidth="2"/></svg>
                    )}
                    {value.title === 'Excellence' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M8 12L11 15L16 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                    {(value.title === 'Crown Excel' || value.title === 'Internals Matters') && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M2 8L6 16H18L22 8L12 2L2 8Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><path d="M6 16V20H18V16" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>
                    )}
                    {value.title === 'Continuous Growth' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 17V21H21V17" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><path d="M7 13L12 8L17 13" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>
                    )}
                    {value.title === 'Sustainability' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M12 6V12L16 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
                      {value.title}
                    </span>
                    <span className="text-gray-500 font-muli text-base leading-relaxed mb-2">
                      {value.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Family Members Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">
                Our Family
              </h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 font-muli max-w-2xl mx-auto">
                Our team represents the heart and soul of our family business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {familyMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  {/* Member Image */}
                  <div className="relative h-64 bg-[#f3f4f6] overflow-hidden rounded-t-2xl flex items-center justify-center">
                    <Image
                      src={member?.image}
                      alt={member?.name}
                      fill
                      style={{ objectFit: 'contain', objectPosition: 'center top' }}
                      className="rounded-t-2xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#61ce70] text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                        {member.experience}
                      </span>
                    </div>
                    {/* Department Badge - Make it more readable */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 text-[#16806b] px-3 py-1 rounded-full text-xs font-montserrat font-semibold shadow">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  {/* Member Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#16806b] font-montserrat mb-2 group-hover:text-[#084032] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#084032] font-muli font-medium mb-4">
                      {member.position}
                    </p>
                    <blockquote className="text-gray-600 font-muli italic text-sm leading-relaxed border-l-4 border-[#61ce70] pl-4">
                      {`"${member.quote}"`}
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Family Milestones */}
          {/* <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">
                Our Family Journey
              </h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-[#16806b] to-[#084032] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white font-montserrat">{milestone.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#16806b] font-montserrat mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 font-muli text-sm">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="text-center mb-10">
            <div className="bg-gradient-to-r from-[#084032] to-[#16806b] rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                Join Our Family
              </h2>
              <p className="text-xl font-muli mb-8 opacity-90">
                Be part of a family that values excellence, integrity, and community service
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/company/career">
                  <button className="bg-[#61ce70] text-white px-8 py-3 rounded-lg font-montserrat font-medium hover:bg-[#4ade80] transition-colors">
                    Join Our Family
                  </button>
                </Link>
                <Link href="/company/career">
                  <button className="bg-transparent text-white border-2 border-white px-8 py-2 rounded-lg font-montserrat font-medium hover:bg-white hover:text-[#16806b] transition-colors">
                    Apply Job
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrownExcelFamily
