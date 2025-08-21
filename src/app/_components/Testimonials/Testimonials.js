"use client"

import { useState, useEffect, useRef } from "react"
import { Star, X, Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "./TestimonialCard"
import User5 from '../../../Components/Images/user5.png'
import Link from "next/link"

// Sample testimonials data as fallback
const sampleTestimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Marketing Director",
        createdAt: '2024-08-01T12:00:00.000Z',
        rating: 5,
        comment: "This service exceeded all my expectations. The team was professional and delivered outstanding results.",
        avatar: "/placeholder.svg?height=48&width=48",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CEO",
        createdAt: '2024-07-15T09:30:00.000Z',
        rating: 5,
        comment:
            "Incredible attention to detail and customer service. I highly recommend this to anyone looking for quality.",
        avatar: "/placeholder.svg?height=48&width=48",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Product Manager",
        createdAt: '2024-06-20T16:45:00.000Z',
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
                className={`w-6 h-6 cursor-pointer transition-all duration-200 ${i < rating ? "text-[#16CA9A] fill-current" : "text-gray-300 hover:text-[#16CA9A]"
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
                    <p className="text-xl text-[#084032] max-w-2xl mx-auto mb-0 font-montserrat">
                        Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
                    </p>

                    {/* Google Reviews Badge */}
                    <div className="flex flex-col items-center justify-center space-y-4 mb-[-37]">
                        <div className="rounded-lg p-6 max-w-sm mx-auto">
                            <div className="text-center">
                                <h3 className="text-2xl leading-[24px] font-semibold text-black mb-2">Excellent</h3>
                                <div className="flex justify-center mb-2">
                                    <div className="flex space-x-1">
                                        {[1, 2, 3, 4].map((star) => (
                                            <Star key={star} className="w-5 h-5 text-orange-400 fill-current" />
                                        ))}
                                        <Star className="w-5 h-5 text-orange-400 fill-current opacity-50" />
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-3">Based on <span className="font-bold">20 Reviews</span></p>
                                <div className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="80px">
                                        <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"></path>
                                        <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"></path>
                                        <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"></path>
                                        <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"></path>
                                        <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"></path>
                                        <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        date={review.createdAt || review.created_at || review.date || review.time || review.publishedAt}
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

                {/* Share Your Experience Button */}
                <div className="text-center mt-12">
                    <Link href={'https://www.google.com/maps/place/CROWN+EXCEL+(Experience+Center)/@25.2603141,55.2886443,17z/data=!4m8!3m7!1s0x3e5f43ba6913e913:0x904de2fef7d413ec!8m2!3d25.2603093!4d55.2912192!9m1!1b1!16s%2Fg%2F11j7jbshl8?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            // onClick={openModal}
                            className="bg-gradient-to-r from-[#16CA9A] to-[#084032] text-white px-8 py-3 rounded-full font-montserrat font-semibold hover:from-[#149f83] hover:to-[#063827] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            {/* Share Your Experience */}
                            Leave a Comment
                        </button>
                    </Link>
                </div>

                {/* Load more removed: all reviews are shown and slider wraps */}

                {showForm && (
                    <div
                        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300`}
                    // onClick={closeModal}
                    >
                        <div
                            className={`bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ${isModalVisible ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
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