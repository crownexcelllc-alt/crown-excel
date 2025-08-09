import Link from 'next/link';
import React from 'react'
import Nabiha from '@/Components/Images/Nabiha.jpg'
import Farooq from '@/Components/Images/farooq.jpg'
import Shammry from '@/Components/Images/Shammry.jpg'
import Abdullah from '@/Components/Images/abdullah sallar.jpg'
import Image from 'next/image'
import Director from '@/Components/Images/director.jpeg'
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
// import etc4 from '@/Components/Images/etc4.jpg'

function CrownExcelFamily() {
  // Sample family members data - you can replace with real data
  const familyMembers = [
    {
      id: 1,
      name: "Muhammad Qais",
      position: "Director",
      department: "Leadership",
      experience: "15+ Years",
      image: Director,
      quote: "Our success is built on the foundation of trust, integrity, and family values."
    },
    {
      id: 2,
      name: "Abdullah Salar",
      position: "Customer Relations Manager",
      department: "Customer Service",
      experience: "8+ Years",
      image: Abdullah,

      quote: "Every decision we make reflects our commitment to our family and community."
    },
    {
      id: 3,
      name: "Shamry Salam",
      position: "Receptionist - Student Visa",
      department: "Reception",
      experience: "10+ Years",
      image: Shammry,
      quote: "We treat every customer like family, ensuring their success is our success."
    },
    {
      id: 4,
      name: "Mohamed Farook",
      position: "Sales Officer",
      department: "Sales",
      experience: "12+ Years",
      image: Farooq,
      quote: "Building lasting relationships is at the heart of everything we do."
    },
    {
      id: 5,
      name: "Nabiha Momin",
      position: "Sales Officer",
      department: "Sales",
      experience: "15+ Years",
      image: Nabiha,
      quote: "Innovation and tradition go hand in hand in our family business."
    },
    {
      id: 6,
      name: "ETC",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: etc1,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 7,
      name: "ETC",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: etc2,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 8,
      name: "ETC",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: etc3,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 9,
      name: "ETC",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: etc4,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 10,
      name: "Tarun Rameshchand Sahu",
      position: "Team Leader - Employment Visa (Ict Bluezone Trading Llc)",
      department: "HR",
      experience: "7+ Years",
      image: Tarun,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 11,
      name: "Ibad",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: Ibad,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 12,
      name: "Saqib",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: Saqib,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 13,
      name: "Sajan",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: Sajan,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 14,
      name: "ETC",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 15,
      name: "Ilyas Khan Gul Khan",
      position: "Sales Supervisor",
      department: "Sales",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 16,
      name: "Jahubar Sathik.H",
      position: "Messenger",
      department: "Sales",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 17,
      name: "Vishal Prabhakar Pawar",
      position: "Business Manager",
      department: "Business Development",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 18,
      name: "Fasaludeheen ",
      position: "Telecommunication Assistant",
      department: "HR",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 19,
      name: "Saeed Khan Husain Khan",
      position: "Sales Officer",
      department: "Sales",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 20,
      name: "Abdur Rauf Abdul Zahoor",
      position: "Stock Filler",
      department: "Inventory",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 21,
      name: "Mohammed Ashik Rehaman",
      position: "Shop Assistant",
      department: "Sales",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id:22,
      name: "Muhamamd Wais Khan",
      position: "Commercial Sales Representative",
      department: "Sales",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 23,
      name: "Lavina Santlalani",
      position: "Businees Development Manager",
      department: "Business Development",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 24,
      name: "ETC",
      position: "Human Resources Manager",
      department: "HR",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 25,
      name: "Khurram Razzaq",
      position: "Marketing Manager",
      department: "Marketing",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 26,
      name: "Muhammad Aslam",
      position: "Telecommunication Assistant",
      department: "HR",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 27,
      name: "Nadeem",
      position: "Marketing Specialist",
      department: "Marketing",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 28,
      name: "Abdullah Sartaj Khan",
      position: "Shop Assistant",
      department: "Sales",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 29,
      name: "Ibathur Rahman Abdul Nasar Abdul Nasar",
      position: "Sales Supervisor",
      department: "Sales",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 30,
      name: "Junaid Ali",
      position: "Stock Filler",
      department: "Inventory",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 31,
      name: "Brian Mwenda",
      position: "Stock Filler",
      department: "Inventory",
      experience: "7+ Years",
      image: etc5,
      quote: "Our team is our extended family, and we grow together."
    },
    {
      id: 32,
      name: "Gemuh Fidelis Mashim",
      position: "store supervisor",
      department: "Inventory",
      experience: "7+ Years",
      image: etc5,
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
      title: "Family First",
      description: "Treating every team member and customer as part of our extended family."
    },
    {
      img: excellenceImg,
      title: "Excellence",
      description: "Striving for excellence in everything we do, from service to innovation."
    },
    {
      img: communityImg,
      title: "Community Service",
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
            <Image src={FamilyPhoto} alt='familyphoto'/>
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
          <div className="mb-16">
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
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
                  style={{ border: '1px solid #e5e7eb' }}
                >
                  {/* Card Image/Top Section */}
                  <div className="h-40 w-full flex items-center justify-center bg-gradient-to-br from-[#e0f7ef] to-[#f3f4f6] relative">
                    <Image
                      src={value.img}
                      alt={value.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="object-contain"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#16806b] font-montserrat mb-2 group-hover:text-[#084032] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 font-muli leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </div>
                  {/* Card Footer */}
                  <div className="px-6 pb-4">
                    <span className="inline-block bg-[#61ce70] text-white text-xs font-semibold px-3 py-1 rounded-full font-montserrat">
                      Value
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
      Our leadership team represents the heart and soul of our family business
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
