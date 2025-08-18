"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import User1 from '../../../Components/Images/user1.jpg'
import User2 from '../../../Components/Images/user2.jpg'
import User3 from '../../../Components/Images/user3.jpg'
import User4 from '../../../Components/Images/user4.png'
import User5 from '../../../Components/Images/user5.png'
import TestimonialCard from './TestimonialCard';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { X, Star } from 'phosphor-react';

const Testimonials = () => {
    // start empty; we'll load approved reviews from backend
    const [reviews, setReviews] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ 
        name: '', 
        position: '', 
        company: '', 
        rating: 0, 
        message: '',
        reviewTitle: '',
        email: ''
    });
    const [hoveredRating, setHoveredRating] = useState(0);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [message, setMessage] = useState('');
    const defaultImage = User5;

    useEffect(() => {
        let mounted = true;
        async function load() {
            try {
                const res = await fetch('/api/reviews'); // returns only approved reviews by default
                if (!res.ok) throw new Error('Failed to load reviews');
                const data = await res.json();
                if (!mounted) return;
                // map to expected shape for TestimonialCard
                const mapped = (data || []).map(r => ({
                    name: r.name,
                    position: r.position || r.company || '',
                    message: r.message,
                    image: defaultImage,
                    rating: r.rating ?? 5,
                    _id: r._id,
                    createdAt: r.createdAt,
                }));
                setReviews(mapped);
            } catch (err) {
                console.warn('Could not load reviews', err);
            }
        }
        load();
        return () => { mounted = false; };
    }, []);

    useEffect(() => {
        // Ensure Swiper navigation is attached once DOM refs and swiper instance exist
        if (!swiperRef.current) return;
        const swiper = swiperRef.current;
        if (!prevRef.current || !nextRef.current) return;

        // assign DOM elements
        swiper.params.navigation = swiper.params.navigation || {};
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;

        // re-init navigation to pick up new elements
        if (swiper.navigation) {
            try {
                swiper.navigation.destroy();
            } catch (err) {
                // ignore if not initialized
            }
        }
        swiper.navigation = swiper.navigation || {};
        swiper.navigation.init();
        swiper.navigation.update();
    }, [reviews]);

    async function submitReview(e) {
        e.preventDefault();
        
        if (!form.rating || !form.message || !form.name || !form.email || !agreeToTerms) {
            setMessage('Please fill in all required fields and agree to terms.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const res = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    position: form.position,
                    company: form.company,
                    rating: form.rating,
                    message: form.message
                }),
            });
            if (!res.ok) {
                const json = await res.json().catch(() => ({}));
                throw new Error(json?.error || 'Failed to submit');
            }
            
            setMessage('Thank you! Your review has been submitted and is pending approval.');
            setForm({ 
                name: '', 
                position: '', 
                company: '', 
                rating: 0, 
                message: '',
                reviewTitle: '',
                email: ''
            });
            setAgreeToTerms(false);
            
            setTimeout(() => {
                setShowForm(false);
                setMessage('');
            }, 2000);

        } catch (err) {
            console.error(err);
            setMessage('Failed to submit review. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="header bg-[#084032] w-full h-[110px] flex items-center justify-center">
                <div className="w-full max-w-6xl px-4 flex items-center justify-center">
                    <h1 className='text-center font-bold font-montserrat text-[24px] lg:text-[30px] leading-[30px] font-sans text-white'>
                        What Our Clients Say About <br /> Our Services?
                    </h1>
                </div>
            </div>

            <div className="relative w-full py-8 px-4 bg-[#fffdd0] mt-0">
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={3}
                        spaceBetween={-30}
                        onSwiper={(s) => { swiperRef.current = s; }}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            760: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="!flex justify-center"
                    >
                        {reviews.map((item, i) => (
                            <SwiperSlide
                                key={item._id ?? i}
                                className="!flex justify-center"
                            >
                                <TestimonialCard
                                    name={item.name}
                                    message={item.message}
                                    position={item.position}
                                    image={item.image || defaultImage}
                                    rating={item.rating}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    {/* Navigation Buttons (use refs so Swiper receives the DOM elements) */}
                    <button ref={prevRef} className="absolute left-2 top-[45%] z-10 text-green-900 bg-white/70 hover:bg-white p-2 rounded-full shadow-md" aria-label="Previous">
                        <FaChevronLeft size={20} />
                    </button>
                    <button ref={nextRef} className="absolute right-2 top-[45%] z-10 text-green-900 bg-white/70 hover:bg-white p-2 rounded-full shadow-md" aria-label="Next">
                        <FaChevronRight size={20} />
                    </button>
                </div>

                {/* Add Review button moved below the carousel */}

            </div>
                <div className="max-w-6xl mx-auto mt-6 flex justify-center">
                    <button 
                        onClick={() => setShowForm(true)} 
                        className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg transform hover:scale-105"
                    >
                        <Star size={20} weight="fill" />
                        Leave a Review
                    </button>
                </div>

            {/* Professional Review Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-opacity-30 z-[50] flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative z-[10000] border-2 border-gray-200" onClick={(e) => e.stopPropagation()}>
                        
                        {/* Header */}
                        <div className="bg-[#084032] text-white p-6 rounded-t-2xl relative">
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[10001] bg-white/10 rounded-full p-1"
                            >
                                <X size={20} />
                            </button>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <span className="text-sm font-medium text-orange-400">Your reviews</span>
                                <span className="bg-orange-400 text-[#084032] text-xs px-2 py-1 rounded-full font-medium">
                                    In progress
                                </span>
                            </div>
                            <h2 className="text-xl font-bold">Leave a Review</h2>
                        </div>

                        {/* Form Content */}
                        <form onSubmit={submitReview} className="p-6 space-y-6">
                            
                            {/* Overall Rating */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-3">
                                    Overall Rating<span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-1 mb-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setForm({...form, rating: star})}
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="transition-transform hover:scale-110"
                                        >
                                            <Star
                                                size={32}
                                                weight={star <= (hoveredRating || form.rating) ? 'fill' : 'regular'}
                                                className={
                                                    star <= (hoveredRating || form.rating)
                                                        ? 'text-orange-400'
                                                        : 'text-gray-300'
                                                }
                                            />
                                        </button>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">
                                    {form.rating > 0 && `${form.rating} out of 5 stars selected. Product is ${
                                        form.rating >= 4 ? 'Excellent' : 
                                        form.rating >= 3 ? 'Good' : 
                                        form.rating >= 2 ? 'Fair' : 'Poor'
                                    }.`}
                                </p>
                            </div>

                            {/* Review Text */}
                            <div>
                                <label className="block text-black font-semibold mb-2">
                                    Review<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={form.message}
                                    onChange={(e) => setForm({...form, message: e.target.value})}
                                    placeholder="Example: I bought this a month ago and am so happy that I did..."
                                    className="w-full border border-gray-300 rounded-lg p-3 text-black h-24 resize-none focus:outline-none focus:border-[#4ade80] transition-colors"
                                    maxLength={500}
                                />
                                <p className="text-sm text-gray-500 text-right text-black mt-1">
                                    {form.message.length}/500 minimum
                                </p>
                            </div>

                            {/* Review Title */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Review Title
                                </label>
                                <input
                                    type="text"
                                    value={form.reviewTitle}
                                    onChange={(e) => setForm({...form, reviewTitle: e.target.value})}
                                    placeholder="Example: Great features!"
                                    className="w-full border border-gray-300 text-black rounded-lg p-3 focus:outline-none focus:border-[#4ade80] transition-colors"
                                    maxLength={60}
                                />
                                <p className="text-sm text-gray-500 text-right mt-1">
                                    {form.reviewTitle.length}/60 maximum
                                </p>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({...form, name: e.target.value})}
                                    placeholder="Example: John Doe"
                                    className="w-full border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4ade80] transition-colors"
                                    minLength={2}
                                />
                                <p className="text-sm text-gray-500 text-right mt-1">
                                    {form.name.length}/2 minimum
                                </p>
                            </div>

                            {/* Position/Company */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        value={form.position}
                                        onChange={(e) => setForm({...form, position: e.target.value})}
                                        placeholder="Manager"
                                        className="w-full border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4ade80] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        value={form.company}
                                        onChange={(e) => setForm({...form, company: e.target.value})}
                                        placeholder="Company Ltd"
                                        className="w-full border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4ade80] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({...form, email: e.target.value})}
                                    placeholder="Example: yourname@example.com"
                                    className="w-full border text-black border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4ade80] transition-colors"
                                />
                            </div>

                            {/* Terms & Conditions */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreeToTerms}
                                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                                    className="mt-1 w-4 h-4 text-[#4ade80] border-gray-300 rounded focus:ring-[#4ade80]"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    I agree to the{' '}
                                    <span className="text-[#4ade80] hover:underline cursor-pointer">
                                        terms & conditions
                                    </span>
                                </label>
                            </div>

                            {/* Disclaimer */}
                            <p className="text-xs text-gray-500">
                                You may receive emails regarding this submission. Any emails will include the ability to opt-out of future communications.
                            </p>

                            {/* Message */}
                            {message && (
                                <div className={`p-3 rounded-lg text-sm ${
                                    message.includes('Thank you') 
                                        ? 'bg-green-100 text-green-700 border border-green-200' 
                                        : 'bg-red-100 text-red-700 border border-red-200'
                                }`}>
                                    {message}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-[#084032] hover:bg-[#003b2f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${
                                    loading ? 'opacity-60 cursor-not-allowed' : ''
                                }`}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>

                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Testimonials;
