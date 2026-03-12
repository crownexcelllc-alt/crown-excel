"use client"
import CareerHeader from '@/app/_components/Career/Header/Header';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import CaptchaModal from '../../../../Components/CaptchaModal/CaptchaModal';
import OtpModal from '../../../../Components/OtpModal/OtpModal';
import countryCodes from '../../../../data/countryCodes';

const positions = [
  {
    sign: <FaPlus />,
    title: 'Virtual Assistant',
    description: 'We are hiring a Virtual Assistant for software configuration.',
    requirements: [
      '2+ Years of Experience',
      'Can speak Arabic and English',
      'Full-Time Position',
    ],
  },
  {
    sign: <FaPlus />,
    title: 'Hardware Specialist',
    description: 'We are hiring a Hardware Specialist for IT support.',
    requirements: [
      '3+ Years of Experience',
      'Expert in hardware troubleshooting',
      'Full-Time Position',
    ],
  },
];

const Career = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [countryCode, setCountryCode] = useState('+971');
  const [phone, setPhone] = useState('');
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [pendingPayload, setPendingPayload] = useState(null);
  const [formRef, setFormRef] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPhoneRule = () => {
    const found = countryCodes.find((c) => c.code === countryCode);
    return found || { minDigits: 7, maxDigits: 15 };
  };

  const validatePhone = (phoneNum) => {
    const cleaned = phoneNum.replace(/\D/g, '');
    const rule = getPhoneRule();
    return cleaned.length >= rule.minDigits && cleaned.length <= rule.maxDigits;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormRef(form);
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const position = formData.get('position');
    const info = formData.get('info');

    if (!name || !email || !phone || !position) {
      alert('Please fill all required fields');
      return;
    }

    if (!validatePhone(phone)) {
      const rule = getPhoneRule();
      const country = countryCodes.find(c => c.code === countryCode)?.country || 'selected country';
      alert(`Please enter a valid phone number (${rule.minDigits === rule.maxDigits ? rule.minDigits : rule.minDigits + '-' + rule.maxDigits} digits for ${country})`);
      return;
    }

    setPendingPayload({
      name,
      email,
      phone: `${countryCode} ${phone}`,
      position,
      info,
    });

    setShowCaptcha(true);
  };

  const handleCaptchaVerified = () => {
    setShowCaptcha(false);
    setShowOtp(true);
  };

  const handleOtpVerified = async () => {
    setShowOtp(false);
    if (!pendingPayload) return;

    try {
      setLoading(true);
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pendingPayload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed');
      }
      alert('Application submitted successfully!');
      formRef?.reset();
      setPhone('');
      setCountryCode('+971');
      setPendingPayload(null);
    } catch (err) {
      alert(err.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header Section */}
        <CareerHeader />
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-5 lg:px-8 lg:py-12 w-full max-w-7xl mx-auto">
          {/* Positions Available */}
          <div className="flex-1 basis-[35%] bg-white rounded-lg p-6">
            <h2 className="text-[32px] font-bold text-black text-center mb-6 font-urbanist">Positions Available</h2>
            <div className="flex flex-col gap-0">
              {positions.map((pos, idx) => (
                <div key={idx} className="mb-2">
                  <button
                    className={`w-full flex gap-2 items-center text-left  px-4 py-2 font-semibold font-urbanist border border-[#084032] focus:outline-none transition-colors duration-200 rounded-none ${activeIndex === idx ? 'bg-[#084032] text-white' : 'bg-[#084032] text-white'}`}
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  >
                    {activeIndex === idx ? <FaMinus /> : <FaPlus />}
                    {pos.title}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out border border-[#084032] bg-white rounded-b-lg 
  ${activeIndex === idx ? 'max-h-[500px] opacity-100 py-4 px-4' : 'max-h-0 opacity-0 py-0 px-4'}`}
                    >
                      <p className="mb-2 text-black font-montserrat">{pos.description}</p>
                      <ul className="list-disc ml-6 text-black font-montserrat">
                        {pos.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Apply Now Form */}
          <div className="flex-1 basis-[65%] bg-white font-montserrat p-6">
            <h2 className="text-[32px] font-[600] text-center font-montserrat text-black mb-6">Apply Now</h2>
            <form id="applyForm" className="space-y-4 rounded-lg  p-6 border-[1px] border-black" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-[16px]  font-[700] text-black mb-1">Name <span className="text-red-500">*</span></label>
                <input name="name" type="text" className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline focus:border-[#084032]" required />
              </div>
              <div>
                <label className="block text-[16px]  font-[700] text-black mb-1">Email <span className="text-red-500">*</span></label>
                <input name="email" type="email" className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline focus:border-[#084032]" required />
              </div>
              <div>
                <label className="block text-[16px]  font-[700] text-black mb-1">Phone Number <span className="text-red-500">*</span></label>
                <div className="flex border border-gray-300 rounded overflow-hidden">
                  <select
                    value={countryCode}
                    onChange={(e) => { setCountryCode(e.target.value); setPhone(''); }}
                    className="text-[12px] bg-white text-[#084032] outline-0 border-r border-gray-300 w-[90px] shrink-0 cursor-pointer px-2"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^\d]/g, '');
                      const rule = getPhoneRule();
                      if (val.length <= rule.maxDigits) setPhone(val);
                    }}
                    placeholder={`Phone * (${getPhoneRule().minDigits === getPhoneRule().maxDigits ? getPhoneRule().minDigits : getPhoneRule().minDigits + '-' + getPhoneRule().maxDigits} digits)`}
                    maxLength={getPhoneRule().maxDigits}
                    className="w-full text-black px-3 py-2 outline-0"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-[16px]  font-[700] text-black mb-1">Applying for which position <span className="text-red-500">*</span></label>
                <input name="position" type="text" className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline focus:border-[#084032]" required />
              </div>
              <div>
                <label className="block text-[16px]  font-[700] text-black mb-1">Your short info</label>
                <textarea name="info" className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline focus:border-[#084032]" rows={4}></textarea>
              </div>
              <button type="submit" disabled={loading} className="bg-[#084032] cursor-pointer text-white px-6 py-2 rounded font-semibold">{loading ? 'Submitting...' : 'Submit'}</button>
            </form>
          </div>
        </div>
      </div>

      <CaptchaModal
        isOpen={showCaptcha}
        onVerified={handleCaptchaVerified}
        onClose={() => setShowCaptcha(false)}
      />

      <OtpModal
        isOpen={showOtp}
        email={pendingPayload?.email || ''}
        onVerified={handleOtpVerified}
        onClose={() => setShowOtp(false)}
      />
    </>
  );
};

export default Career;
