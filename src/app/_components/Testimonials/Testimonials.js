"use client"

import { useState, useEffect, useRef } from "react"
import { Star, X, Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "./TestimonialCard"
import User5 from '../../../Components/Images/user5.png'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';

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
         <div className="max-w-7xl mx-auto px-4 sm:px-6s lg:px-8">

            {/* <div className="header bg-[#084032] w-full h-[110px] flex items-center justify-center">
                <h1 className='text-center font-bold font-montserrat text-[24px] lg:text-[30px] leading-[30px] font-sans text-white'>
                    What Our Clients Say About <br /> Our Services?
                </h1>
            </div> */}
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
            <div className="relative w-full py-8 px-14">
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={3}
                        spaceBetween={20} // <-- positive value for gap between cards
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom"
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1,  },
                            640: { slidesPerView: 1, },
                            760: { slidesPerView: 2, },
                            1024: { slidesPerView: 3,  }
                        }}
                        className="!flex justify-center"
                    >
                        {reviews.map((item, i) => (
                            <SwiperSlide
                                key={i}
                                className="!flex justify-center"
                                style={{ paddingLeft: 16, paddingRight: 16 }} // Add horizontal gap between cards
                            >
                                <TestimonialCard
                                    name={item.name}
                                    message={item.message}
                                    image={item.avatar}
                                    rating={item.rating}
                                    date={item.createdAt}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    {/* Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-2 top-[45%] z-10 text-green-900">
                        <FaChevronLeft size={24} />
                    </button>
                    <button className="swiper-button-next-custom absolute right-2 top-[45%] z-10 text-green-900">
                        <FaChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}
