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

const Testimonials = () => {
    // start empty; we'll load approved reviews from backend
    const [reviews, setReviews] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', position: '', company: '', rating: 5, message: '' });
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
        if (!form.name.trim() || !form.message.trim()) {
            alert('Please provide your name and review message.');
            return;
        }
        try {
            setLoading(true);
            const res = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const json = await res.json().catch(() => ({}));
                throw new Error(json?.error || 'Failed to submit');
            }
            // don't append unapproved review to UI; inform user it's pending approval
            setForm({ name: '', position: '', company: '', rating: 5, message: '' });
            setShowForm(false);
            alert('Thank you — your review was submitted and is pending admin approval. It will appear here once approved.');
        } catch (err) {
            console.error(err);
            alert('Failed to submit review');
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
                    <button onClick={() => setShowForm(true)} className="bg-[#084032] text-white px-4 py-2 rounded">Add Review</button>
                </div>

            {/* Modal / Popup for review form */}
            {showForm && (
                <div className="fixed inset-0 z-50 text-black flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowForm(false)}></div>
                    <div className="relative w-full max-w-3xl mx-4">
                        <div className="bg-white rounded shadow p-6">
                            <h2 className="text-lg font-semibold mb-3">Add Your Review</h2>
                            <form onSubmit={submitReview} onClick={e => e.stopPropagation()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" className="border p-2 rounded" />
                                    <input value={form.position} onChange={e => setForm({...form, position: e.target.value})} placeholder="Position / Title" className="border p-2 rounded" />
                                    <input value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Company (optional)" className="border p-2 rounded" />
                                    <select value={form.rating} onChange={e => setForm({...form, rating: Number(e.target.value)})} className="border p-2 rounded">
                                        <option value={5}>5 — Excellent</option>
                                        <option value={4}>4 — Very good</option>
                                        <option value={3}>3 — Good</option>
                                        <option value={2}>2 — Fair</option>
                                        <option value={1}>1 — Poor</option>
                                    </select>
                                </div>

                                <div className="mt-3">
                                    <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Write your review..." className="border p-2 rounded w-full min-h-[120px]" />
                                </div>

                                <div className="flex items-center gap-2 mt-3">
                                    <button type="submit" disabled={loading} className="px-4 py-2 bg-[#084032] text-white rounded">{loading ? 'Saving...' : 'Submit Review'}</button>
                                    <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 border rounded">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Testimonials;
