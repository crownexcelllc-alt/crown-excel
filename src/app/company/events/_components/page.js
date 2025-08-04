'use client'
import React, { useState } from 'react'

// import Image from 'next/image'

function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample events data - you can replace with real data
  const events = [
    {
      id: 1,
      title: "Annual Business Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Dubai World Trade Centre",
      description: "Join us for our annual business summit where industry leaders discuss the future of financial services in the UAE.",
      image: "/api/placeholder/400/250",
      category: "Business Summit",
      attendees: "500+"
    },
    {
      id: 2,
      title: "Customer Appreciation Day",
      date: "April 20, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Leela Megh Exchange Head Office",
      description: "A special day dedicated to our valued customers with exclusive offers and networking opportunities.",
      image: "/api/placeholder/400/250",
      category: "Customer Event",
      attendees: "200+"
    },
    {
      id: 3,
      title: "Financial Technology Workshop",
      date: "May 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Dubai Internet City",
      description: "Learn about the latest trends in financial technology and digital banking solutions.",
      image: "/api/placeholder/400/250",
      category: "Workshop",
      attendees: "150+"
    },
    {
      id: 4,
      title: "Community Outreach Program",
      date: "June 5, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Various Locations",
      description: "Giving back to our community through financial literacy programs and charitable initiatives.",
      image: "/api/placeholder/400/250",
      category: "Community",
      attendees: "300+"
    },
    {
      id: 5,
      title: "Employee Recognition Ceremony",
      date: "July 12, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Hyatt Dubai",
      description: "Celebrating our outstanding employees and their contributions to our company's success.",
      image: "/api/placeholder/400/250",
      category: "Internal Event",
      attendees: "100+"
    },
    {
      id: 6,
      title: "International Banking Conference",
      date: "August 25, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Abu Dhabi National Exhibition Centre",
      description: "A prestigious conference bringing together banking professionals from across the region.",
      image: "/api/placeholder/400/250",
      category: "Conference",
      attendees: "800+"
    }
  ];

  const categories = ["All", "Business Summit", "Customer Event", "Workshop", "Community", "Internal Event", "Conference"];

  // Filter events based on selected category
  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-[#084032] to-[#16806b] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-montserrat mb-4 tracking-tight">
              Our Events
            </h1>
            <div className="w-24 h-1 bg-[#61ce70] mx-auto mb-6"></div>
            <p className="text-xl text-white/90 font-muli max-w-2xl mx-auto">
              Discover our upcoming events, conferences, and community initiatives that shape the future of financial services
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#16806b] font-montserrat mb-2">50+</div>
              <div className="text-gray-600 font-muli">Events This Year</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#16806b] font-montserrat mb-2">2000+</div>
              <div className="text-gray-600 font-muli">Total Attendees</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#16806b] font-montserrat mb-2">15+</div>
              <div className="text-gray-600 font-muli">Years of Excellence</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#16806b] font-montserrat mb-2">100%</div>
              <div className="text-gray-600 font-muli">Customer Satisfaction</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-montserrat font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#16806b] text-white shadow-lg' 
                      : 'bg-white text-[#16806b] border-2 border-[#16806b] hover:bg-[#16806b] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                {/* Event Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#16806b] to-[#084032] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#61ce70] text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-[#16806b] px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                      {event.attendees}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <div className="text-sm opacity-90">{event.date}</div>
                      <div className="text-xs opacity-75">{event.time}</div>
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#16806b] font-montserrat mb-3 group-hover:text-[#084032] transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-muli">{event.location}</span>
                  </div>

                  <p className="text-gray-600 font-muli leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <button className="bg-[#16806b] text-white px-6 py-2 rounded-lg font-montserrat font-medium hover:bg-[#084032] transition-colors">
                      Register Now
                    </button>
                    <button className="text-[#16806b] font-montserrat font-medium hover:text-[#084032] transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center mb-10">
            <div className="bg-gradient-to-r from-[#084032] to-[#16806b] rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                Stay Updated with Our Events
              </h2>
              <p className="text-xl font-muli mb-8 opacity-90">
                Subscribe to our newsletter and never miss an important event or announcement
              </p>
                             <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
                 <input
                   type="email"
                   placeholder="Enter your email"
                   className="flex-1 px-6 py-3 rounded-lg text-gray-800 font-muli focus:outline-none focus:ring-2 focus:ring-[#61ce70] bg-white"
                 />
                <button className="bg-[#61ce70] text-white px-8 py-3 rounded-lg font-montserrat font-medium hover:bg-[#4ade80] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
