'use client'
import Link from 'next/link';
import React from 'react'
import Nabiha from '@/Components/Images/nabiha.jpeg'
import Farooq from '@/Components/Images/farooq.jpeg'
import Shammry from '@/Components/Images/shammry.jpeg'
import Abdullah from '@/Components/Images/abdullah sallar.jpeg'
// import Image from 'next/image'

function CrownExcelFamily() {
  // Sample family members data - you can replace with real data
  const familyMembers = [
    {
      id: 1,
      name: "Nabiha",
      position: "Chief Executive Officer",
      department: "Leadership",
      experience: "15+ Years",
      image: Nabiha,
      quote: "Our success is built on the foundation of trust, integrity, and family values."
    },
    {
      id: 2,
      name: "Farooq",
      position: "Chief Financial Officer",
      department: "Finance",
      experience: "12+ Years",
      image: Farooq,
      quote: "Every decision we make reflects our commitment to our family and community."
    },
    {
      id: 3,
      name: "Shammry",
      position: "Head of Operations",
      department: "Operations",
      experience: "10+ Years",
      image: Shammry,
      quote: "We treat every customer like family, ensuring their success is our success."
    },
    {
      id: 4,
      name: "Abdullah Salar",
      position: "Customer Relations Manager",
      department: "Customer Service",
      experience: "8+ Years",
      image: Abdullah,
      quote: "Building lasting relationships is at the heart of everything we do."
    },
    {
      id: 5,
      name: "Omar Al Zaabi",
      position: "Technology Director",
      department: "IT",
      experience: "9+ Years",
      image: "/api/placeholder/300/300",
      quote: "Innovation and tradition go hand in hand in our family business."
    },
    {
      id: 6,
      name: "Layla Al Suwaidi",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: "/api/placeholder/300/300",
      quote: "Our team is our extended family, and we grow together."
    }
  ];

  const familyValues = [
    {
      icon: "🤝",
      title: "Trust & Integrity",
      description: "Building lasting relationships based on mutual trust and unwavering integrity."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family First",
      description: "Treating every team member and customer as part of our extended family."
    },
    {
      icon: "🌟",
      title: "Excellence",
      description: "Striving for excellence in everything we do, from service to innovation."
    },
    {
      icon: "🤲",
      title: "Community Service",
      description: "Giving back to our community and supporting those in need."
    },
    {
      icon: "🔄",
      title: "Continuous Growth",
      description: "Embracing change and fostering continuous learning and development."
    },
    {
      icon: "💚",
      title: "Sustainability",
      description: "Building a sustainable future for our family and the next generation."
    }
  ];

  const milestones = [
    { year: "2009", title: "Foundation", description: "Crown Excel Family established with a vision of excellence" },
    { year: "2012", title: "Expansion", description: "First major expansion across UAE regions" },
    { year: "2015", title: "Innovation", description: "Introduction of modern financial services" },
    { year: "2018", title: "Recognition", description: "Awarded Best Family Business in UAE" },
    { year: "2022", title: "Digital Transformation", description: "Complete digital transformation journey" },
    { year: "2024", title: "Future Ready", description: "Leading the future of financial services" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-[#084032] to-[#16806b] py-16">
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
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Family Story Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-6">
                  Our Family Story
                </h2>
                <div className="w-16 h-1 bg-[#61ce70] mb-6"></div>
                <div className="space-y-6 text-gray-700 font-muli leading-8">
                  <p className="text-lg">
                    {`Founded in 1970, Crown Excel Family began as a small family business with big dreams. What started as a modest venture has grown into one of the UAE's most trusted financial service providers, all while maintaining our core family values.`}
                  </p>
                  <p className="text-lg">
                  {`  Today, our family extends beyond blood relations to include every team member, customer, and partner who shares our vision of excellence, integrity, and community service. We believe that success is not just measured in profits, but in the positive impact we create in people's lives.`}
                  </p>
                  <p className="text-lg">
                   {` As we continue to grow, we remain committed to our founding principles: treating everyone like family, maintaining the highest standards of integrity, and giving back to the community that has supported us for over five decades.`}
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
            </div>
          </div>

          {/* Family Values Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">
                Our Family Values
              </h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {familyValues.map((value, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#16806b] font-montserrat mb-3 group-hover:text-[#084032] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-muli leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Family Members Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#16806b] font-montserrat mb-4">
                Meet Our Family
              </h2>
              <div className="w-16 h-1 bg-[#61ce70] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 font-muli max-w-2xl mx-auto">
                Our leadership team represents the heart and soul of our family business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {familyMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  {/* Member Image */}
                  <div className="relative h-64 bg-gradient-to-br from-[#16806b] to-[#084032] overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#61ce70] text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                        {member.experience}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white">
                        <div className="text-sm opacity-90">{member.department}</div>
                      </div>
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
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
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
          </div>

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
