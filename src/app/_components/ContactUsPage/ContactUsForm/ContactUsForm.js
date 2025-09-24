"use client";

import Image from "next/image";
import React, { useState } from "react";
import ContactUs from '../../../../Components/Images/contactus.jpg'

const ContactUsForm = () => {
  const services = [
    "Select Service",
    "RMA Facility",
    "IT Consultancy",
    "Managed IT",
    "Software AMC",
    "Hardware AMC",
    "Server Support",
    "Hardware Repair",
    "Wholesale Inquiries",
    "Become Our Partner",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "Select Service",
    comments: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      setMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "Select Service",
        comments: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-us h-[auto] text-black flex flex-col items-center w-full mt-10 justify-center gap-10">
      <div className="contact-details flex items-center justify-center w-full px-4 gap-10">
        
        <div
          className="contact-details-left bg-[#f8f8f8] rounded-[10px] w-full max-w-[800px]"
          style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            {/* Name & Email */}
            <div className="name-email flex items-center gap-5 w-full">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border text-[13px] bg-white text-[#8692ad] rounded w-full h-[50px] outline-0"
                type="text"
                placeholder="Name *"
                required
                style={{ padding: "14px 18px" }}
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border text-[13px] bg-white text-[#8692ad] rounded w-full h-[50px]"
                type="email"
                placeholder="Email *"
                required
                style={{ padding: "14px 18px" }}
              />
            </div>

            {/* Phone & Subject */}
            <div className="phone-subject flex items-center gap-5 mt-5 w-full">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border text-[13px] bg-white text-[#8692ad] rounded w-full h-[50px]"
                type="tel"
                placeholder="Phone"
                style={{ padding: "14px 18px" }}
              />
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border text-[13px] bg-white text-[#8692ad] rounded w-full h-[50px]"
                type="text"
                placeholder="Subject"
                style={{ padding: "14px 18px" }}
              />
            </div>

            {/* Service Dropdown */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border mt-5 text-[13px] bg-white text-[#8692ad] rounded w-full h-[50px]"
              style={{ padding: "14px 18px" }}
            >
              {services.map((item, index) => (
                <option
                  key={index}
                  value={item}
                  disabled={index === 0}
                >
                  {item}
                </option>
              ))}
            </select>

            {/* Comments */}
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Comments *"
              className="border text-[13px] bg-white text-[#8692ad] rounded w-full h-[96px] mt-5"
              required
              style={{ padding: "14px 18px" }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#084032] cursor-pointer mt-5 text-white rounded-[30px] text-[16px] font-bold h-[55px] w-full"
              style={{ padding: "14px 20px" }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "SUBMIT NOW"}
            </button>

            {/* Response Message */}
            {message && (
              <p className="mt-4 text-sm font-medium text-center text-gray-700">
                {message}
              </p>
            )}
          </form>
        </div>
        <div className="image-left">
          <Image alt='' src={ContactUs} width={1000} height={800} className='rounded-[10px] w-[1000px] h-[380px]' />
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
