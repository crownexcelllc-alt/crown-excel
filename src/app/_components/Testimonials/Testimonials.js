"use client"

import { useState, useEffect, useRef } from "react"
import { Star, X, Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "./TestimonialCard"
import User5 from '../../../Components/Images/user5.png'

// Sample testimonials data as fallback
const sampleTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    rating: 5,
    comment: "This service exceeded all my expectations. The team was professional and delivered outstanding results.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    rating: 5,
    comment:
      "Incredible attention to detail and customer service. I highly recommend this to anyone looking for quality.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    rating: 4,
    comment: "Great experience overall. The process was smooth and the final outcome was exactly what we needed.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export default function Testimonials() {
  const [reviews, setReviews] = useState(sampleTestimonials)
  // show all reviews (removed load-more behavior)
  const [showForm, setShowForm] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  })
  const sliderRef = useRef(null)

  const updateNavButtons = () => {
    // placeholder for future enable/disable logic
  }

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews")
        if (response.ok) {
          const data = await response.json()
          setReviews(data)
        }
      } catch (error) {
        console.log("Using sample testimonials as fallback")
      }
    }

    fetchReviews()
  }, [])

  // After reviews load, scroll the slider to the end so initial view starts from last
  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    // small timeout to allow layout to settle
    const t = setTimeout(() => {
      const max = el.scrollWidth - el.clientWidth
      if (max > 0) el.scrollTo({ left: max })
    }, 60)
    return () => clearTimeout(t)
  }, [reviews])

  const openModal = () => {
    setShowForm(true)
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "15px"

    setTimeout(() => {
      setIsModalVisible(true)
    }, 10)
  }

  const closeModal = () => {
    setIsModalVisible(false)

    setTimeout(() => {
      setShowForm(false)
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }, 300)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleStarClick = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const newReview = await response.json()
        setReviews((prev) => [newReview, ...prev])
        setFormData({ name: "", email: "", rating: 0, comment: "" })
        closeModal()
      }
    } catch (error) {
      console.error("Error submitting review:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStars = (rating, interactive = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 cursor-pointer transition-all duration-200 ${
          i < rating ? "text-[#16CA9A] fill-current" : "text-gray-300 hover:text-[#16CA9A]"
        } ${interactive ? "hover:scale-110" : ""}`}
        onClick={interactive ? () => handleStarClick(i + 1) : undefined}
      />
    ))
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-[#16CA9A] to-[#084032] bg-clip-text text-transparent">
            <h2 className="text-4xl font-montserrat font-bold mb-4 text-[#084032]">What Our Clients Say</h2>
          </div>
          <p className="text-xl text-[#084032] max-w-2xl mx-auto mb-8 font-montserrat">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>

          <button
            onClick={openModal}
            className="bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white px-8 py-3 rounded-full font-montserrat font-semibold hover:from-[#149f83] hover:to-[#063827] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Share Your Experience
          </button>
        </div>
        {/* Horizontal slider showing 3 cards with prev/next buttons */}
        <div className="relative">
          <button
            aria-label="Previous testimonials"
            id="prev-testimonial"
            onClick={() => {
              if (!sliderRef.current) return
        const el = sliderRef.current
        const step = Math.round(el.clientWidth / 4)
        // wrap to end when at or very near the start
        if (el.scrollLeft <= 2) {
          const max = el.scrollWidth - el.clientWidth
          el.scrollTo({ left: max, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: -step, behavior: 'smooth' })
        }
            }}
            className="absolute -left-2 top-1/2 z-20 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5 text-[#084032]" />
          </button>

          <div ref={sliderRef} className="overflow-x-auto no-scrollbar" onScroll={() => updateNavButtons()} style={{ scrollBehavior: 'smooth' }}>
            <div className="flex gap-8" style={{ padding: '0 1rem' }}>
              {reviews.map((review, idx) => (
                <div
                  key={review.id ?? review._id ?? idx}
                  className="flex-shrink-0"
                  style={{ flex: '0 0 calc((100% - 96px) / 4)', maxWidth: '360px' }}
                >
                  <TestimonialCard
                    title={review.title}
                    name={review.name}
                    position={review.role || review.position || review.company || ''}
                    message={review.comment || review.message || ''}
                    image={review.avatar || User5}
                    rating={review.rating ?? 5}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Next testimonials"
            id="next-testimonial"
            onClick={() => {
              if (!sliderRef.current) return
        const el = sliderRef.current
        const step = Math.round(el.clientWidth / 4)
        // wrap to start when at or very near the end
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
          el.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          el.scrollBy({ left: step, behavior: 'smooth' })
        }
            }}
            className="absolute -right-2 top-1/2 z-20 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5 text-[#084032]" />
          </button>
        </div>
        {/* Load more removed: all reviews are shown and slider wraps */}

        {showForm && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300`}
            // onClick={closeModal}
          >
            <div
              className={`bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ${
                isModalVisible ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-montserrat font-bold">Share Your Review</h3>
                  <button
                    onClick={closeModal}
                    className="text-white hover:text-gray-200 transition-colors duration-200 hover:rotate-90 transform"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-[#dff7ef] mt-2 font-montserrat">We'd love to hear about your experience!</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16CA9A] focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16CA9A] focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Rating *</label>
                  <div className="flex space-x-1">{renderStars(formData.rating, true)}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Review *</label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16CA9A] focus:border-transparent transition-all duration-200 resize-none font-montserrat"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.rating === 0}
                  className="w-full bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white py-3 px-6 rounded-lg font-montserrat font-semibold hover:from-[#149f83] hover:to-[#063827] disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Review"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}




























// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import User1 from '../../../Components/Images/user1.jpg'
// import User2 from '../../../Components/Images/user2.jpg'
// import User3 from '../../../Components/Images/user3.jpg'
// import User4 from '../../../Components/Images/user4.png'
// import User5 from '../../../Components/Images/user5.png'
// import TestimonialCard from './TestimonialCard';
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { X, Star } from 'phosphor-react';

// const Testimonials = () => {
//     const [reviews, setReviews] = useState([]);
//     const prevRef = useRef(null);
//     const nextRef = useRef(null);
//     const swiperRef = useRef(null);
//     const nameInputRef = useRef(null);
//     const [showForm, setShowForm] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [form, setForm] = useState({ 
//         name: '', 
//         rating: 0, 
//         message: '',
//         reviewTitle: '',
//         email: ''
//     });
//     const [hoveredRating, setHoveredRating] = useState(0);
//     const [agreeToTerms, setAgreeToTerms] = useState(false);
//     const [message, setMessage] = useState('');
//     const defaultImage = User5;

//     useEffect(() => {
//         let mounted = true;
//         async function load() {
//             try {
//                 const res = await fetch('/api/reviews'); // returns only approved reviews by default
//                 if (!res.ok) throw new Error('Failed to load reviews');
//                 const data = await res.json();
//                 if (!mounted) return;
//                 // map to expected shape for TestimonialCard
//                 const mapped = (data || []).map(r => ({
//                     name: r.name,
//                     position: r.position || r.company || '',
//                     message: r.message,
//                     image: defaultImage,
//                     rating: r.rating ?? 5,
//                     _id: r._id,
//                     createdAt: r.createdAt,
//                 }));
//                 setReviews(mapped);
//             } catch (err) {
//                 console.warn('Could not load reviews', err);
//             }
//         }
//         load();
//         return () => { mounted = false; };
//     }, []);

//     useEffect(() => {
//         // Ensure Swiper navigation is attached once DOM refs and swiper instance exist
//         if (!swiperRef.current) return;
//         const swiper = swiperRef.current;
//         if (!prevRef.current || !nextRef.current) return;

//         // assign DOM elements
//         swiper.params.navigation = swiper.params.navigation || {};
//         swiper.params.navigation.prevEl = prevRef.current;
//         swiper.params.navigation.nextEl = nextRef.current;

//         // re-init navigation to pick up new elements
//         if (swiper.navigation) {
//             try {
//                 swiper.navigation.destroy();
//             } catch (err) {
//                 // ignore if not initialized
//             }
//         }
//         swiper.navigation = swiper.navigation || {};
//         swiper.navigation.init();
//         swiper.navigation.update();
//     }, [reviews]);

//     useEffect(() => {
//         // Lock page scroll while modal is open
//         if (showForm) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }
//         return () => { document.body.style.overflow = ''; };
//     }, [showForm]);

//     // Focus name input when modal opens and allow Escape to close
//     useEffect(() => {
//         if (!showForm) return;
//         // focus name input when modal opens
//         nameInputRef.current?.focus?.();

//         const onKey = (e) => {
//             if (e.key === 'Escape') setShowForm(false);
//         };
//         document.addEventListener('keydown', onKey);
//         return () => document.removeEventListener('keydown', onKey);
//     }, [showForm]);

//     async function submitReview(e) {
//         e.preventDefault();
//         if (!form.rating || !form.message || !form.name || !form.email || !agreeToTerms) {
//             setMessage('Please fill in all required fields and agree to terms.');
//             return;
//         }

//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//             setMessage('Please enter a valid email address.');
//             return;
//         }

//         setLoading(true);
//         setMessage('');

//         try {
//             const res = await fetch('/api/reviews', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     name: form.name,
//                     rating: form.rating,
//                     message: form.message
//                 }),
//             });
//             if (!res.ok) {
//                 const json = await res.json().catch(() => ({}));
//                 throw new Error(json?.error || 'Failed to submit');
//             }
            
//             setMessage('Thank you! Your review has been submitted and is pending approval.');
//             setForm({ name: '',  rating: 0, message: '', reviewTitle: '', email: '' });
//             setAgreeToTerms(false);
            
//             setTimeout(() => {
//                 setShowForm(false);
//                 setMessage('');
//             }, 2000);

//         } catch (err) {
//             console.error(err);
//             setMessage('Failed to submit review. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     }

//     return (
//         <>
//             {/* Main content: becomes non-interactive while modal is open */}
//             <div className={showForm ? 'pointer-events-none select-none' : ''} aria-hidden={showForm}>
//                 <div className="header bg-[#084032] w-full h-[110px] flex items-center justify-center">
//                     <div className="w-full max-w-6xl px-4 flex items-center justify-center">
//                         <h1 className='text-center font-bold font-montserrat text-[24px] lg:text-[30px] leading-[30px] font-sans text-white'>
//                             What Our Clients Say About <br /> Our Services?
//                         </h1>
//                     </div>
//                 </div>

//                 <div className="relative w-full py-8 px-4 bg-[#fffdd0] mt-0">
//                     <div className="relative">
//                         <Swiper
//                             modules={[Navigation, Autoplay]}
//                             slidesPerView={3}
//                             spaceBetween={-30}
//                             onSwiper={(s) => { swiperRef.current = s; }}
//                             navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//                             autoplay={{
//                                 delay: 4000,
//                                 disableOnInteraction: false
//                             }}
//                             loop={true}
//                             breakpoints={{
//                                 0: { slidesPerView: 1 },
//                                 640: { slidesPerView: 1 },
//                                 760: { slidesPerView: 2 },
//                                 1024: { slidesPerView: 3 }
//                             }}
//                             className="!flex justify-center"
//                         >
//                             {reviews.map((item, i) => (
//                                 <SwiperSlide
//                                     key={item._id ?? i}
//                                     className="!flex justify-center"
//                                 >
//                                     <TestimonialCard
//                                         name={item.name}
//                                         message={item.message}
//                                         position={item.position}
//                                         image={item.image || defaultImage}
//                                         rating={item.rating}
//                                     />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>


//                         {/* Navigation Buttons (use refs so Swiper receives the DOM elements) */}
//                         <button ref={prevRef} className="absolute left-2 top-[45%] z-10 text-green-900 bg-white/70 hover:bg-white p-2 rounded-full shadow-md" aria-label="Previous">
//                             <FaChevronLeft size={20} />
//                         </button>
//                         <button ref={nextRef} className="absolute right-2 top-[45%] z-10 text-green-900 bg-white/70 hover:bg-white p-2 rounded-full shadow-md" aria-label="Next">
//                             <FaChevronRight size={20} />
//                         </button>
//                     </div>
//                 </div>

//                 <div className="max-w-6xl mx-auto mt-6 flex justify-center">
//                     <button 
//                         onClick={() => setShowForm(true)} 
//                         className="bg-gradient-to-r from-[#16CA9A] to-[#084032] hover:from-[#13b886] hover:to-[#063f2f] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105"
//                         aria-haspopup="dialog"
//                     >
//                         <Star size={20} weight="fill" />
//                         Leave a Review
//                     </button>
//                 </div>
//             </div>

//             {/* Professional Review Modal (rendered outside the interactive wrapper) */}
//             {showForm && (
//                 <>
//                     <style>{`
//                         /* hide scrollbar in modal while keeping scrolling usable */
//                         .no-scrollbar::-webkit-scrollbar { display: none; }
//                         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//                     `}</style>
//                     <div className="fixed inset-0 bg-black/30 z-[50] flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
//                         <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto no-scrollbar relative z-[10000] border-2 border-gray-200" onClick={(e) => e.stopPropagation()}>
                        
//                             {/* Header */}
//                             <div className="bg-[#084032] text-white p-6 rounded-t-2xl relative">
//                                  <button
//                                      onClick={() => setShowForm(false)}
//                                      className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[10001] bg-white/10 rounded-full p-1"
//                                  >
//                                      <X size={20} />
//                                  </button>
//                                  <h2 className="text-xl font-bold">Leave a Review</h2>
//                              </div>

//                              {/* Form Content */}
//                              <form onSubmit={submitReview} className="p-6 space-y-6">
                                 
//                                  {/* Overall Rating */}
//                                  <div>
//                                      <label className="block text-gray-700 font-semibold mb-3">
//                                          Overall Rating<span className="text-red-500">*</span>
//                                      </label>
//                                      <div className="flex gap-1 mb-2">
//                                          {[1, 2, 3, 4, 5].map((star) => (
//                                              <button
//                                                  key={star}
//                                                  type="button"
//                                                  onClick={() => setForm({...form, rating: star})}
//                                                  onMouseEnter={() => setHoveredRating(star)}
//                                                  onMouseLeave={() => setHoveredRating(0)}
//                                                  className="transition-transform hover:scale-110"
//                                              >
//                                                  <Star
//                                                      size={32}
//                                                      weight={star <= (hoveredRating || form.rating) ? 'fill' : 'regular'}
//                                                      className={
//                                                          star <= (hoveredRating || form.rating)
//                                                              ? 'text-[#16CA9A]'
//                                                              : 'text-gray-300'
//                                                      }
//                                                  />
//                                              </button>
//                                          ))}
//                                      </div>
//                                      <p className="text-sm text-gray-600">{form.rating > 0 && `${form.rating} out of 5 stars selected. Product is ${form.rating >= 4 ? 'Excellent' : form.rating >= 3 ? 'Good' : form.rating >= 2 ? 'Fair' : 'Poor'}.`}</p>
//                                  </div>

//                                  {/* Review Text */}
//                                  <div>
//                                      <label className="block text-black font-semibold mb-2">
//                                          Review<span className="text-red-500">*</span>
//                                      </label>
//                                      <textarea
//                                          value={form.message}
//                                          onChange={(e) => setForm({...form, message: e.target.value})}
//                                          placeholder="Example: I bought this a month ago and am so happy that I did..."
//                                          className="w-full border border-gray-300 rounded-lg p-3 text-black h-24 resize-none focus:outline-none focus:border-[#4ade80] transition-colors"
//                                          maxLength={500}
//                                      />
//                                      <p className="text-sm text-gray-500 text-right mt-1">{form.message.length}/500 minimum</p>
//                                  </div>


//                                  {/* Name */}
//                                  <div>
//                                      <label className="block text-gray-700 font-semibold mb-2">
//                                          Name<span className="text-red-500">*</span>
//                                      </label>
//                                      <input
//                                          ref={nameInputRef}
//                                          type="text"
//                                          value={form.name}
//                                          onChange={(e) => setForm({...form, name: e.target.value})}
//                                          placeholder="Example: John Doe"
//                                          className="w-full border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4ade80] transition-colors"
//                                          minLength={2}
//                                          aria-label="Your name"
//                                      />
//                                      <p className="text-sm text-gray-500 text-right mt-1">{form.name.length}/2 minimum</p>
//                                  </div>

//                                  {/* Email */}
//                                  <div>
//                                      <label className="block text-gray-700 font-semibold mb-2">
//                                          Email<span className="text-red-500">*</span>
//                                      </label>
//                                      <input
//                                          type="email"
//                                          value={form.email}
//                                          onChange={(e) => setForm({...form, email: e.target.value})}
//                                          placeholder="Example: yourname@example.com"
//                                          className="w-full border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4ade80] transition-colors"
//                                      />
//                                  </div>

//                                  {/* Terms & Conditions */}
//                                  <div className="flex items-start gap-3">
//                                      <input
//                                          type="checkbox"
//                                          id="terms"
//                                          checked={agreeToTerms}
//                                          onChange={(e) => setAgreeToTerms(e.target.checked)}
//                                          className="mt-1 w-4 h-4 text-[#4ade80] border-gray-300 rounded focus:ring-[#4ade80]"
//                                      />
//                                      <label htmlFor="terms" className="text-sm text-gray-600">
//                                          I agree to the{" "}
//                                          <span className="text-[#4ade80] hover:underline cursor-pointer">
//                                              terms & conditions
//                                          </span>
//                                      </label>
//                                  </div>

//                                  {/* Disclaimer */}
//                                  <p className="text-xs text-gray-500">
//                                      You may receive emails regarding this submission. Any emails will include the ability to opt-out of future communications.
//                                  </p>

//                                  {/* Message */}
//                                  {message && (
//                                      <div className={`p-3 rounded-lg text-sm ${message.includes('Thank you') ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
//                                          {message}
//                                      </div>
//                                  )}

//                                  {/* Submit Button */}
//                                  <button
//                                      type="submit"
//                                      disabled={loading}
//                                      className={`w-full bg-[#084032] hover:bg-[#003b2f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
//                                  >
//                                      {loading ? 'Submitting...' : 'Submit'}
//                                  </button>
//                              </form>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </>
//     );
// };

// export default Testimonials;
