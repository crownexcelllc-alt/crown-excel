"use client";
import React, { useState, useEffect, useRef } from 'react';
import CaptchaModal from '../CaptchaModal/CaptchaModal';
import OtpModal from '../OtpModal/OtpModal';
import countryCodes from '../../data/countryCodes';
import { X } from 'phosphor-react';

const ContactFormPopup = ({ isOpen, onClose, preSelectedSubject }) => {
  const services = [
    'Select Service',
    'RMA Facility',
    'IT Consultancy',
    'Managed IT',
    'Software AMC',
    'Hardware AMC',
    'Server Support',
    'Hardware Repair',
  ];

  const subjects = [
    'Select Subject',
    'Become Our Partner',
    'For Corporates Content',
    'Wholesale Inquiries',
  ];

  const [service, setService] = useState('Select Service');
  const [subject, setSubject] = useState('Select Subject');
  const [countryCode, setCountryCode] = useState('+971');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [pendingPayload, setPendingPayload] = useState(null);
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Handle open/close with animation
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      // Small delay to trigger CSS transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
      if (preSelectedSubject) setSubject(preSelectedSubject);
    } else if (visible) {
      // Close animation
      setAnimating(false);
      const timer = setTimeout(() => {
        setVisible(false);
        // Reset form after animation
        setService('Select Service');
        setSubject('Select Subject');
        setCountryCode('+971');
        setPhone('');
        setLoading(false);
        setShowCaptcha(false);
        setShowOtp(false);
        setPendingPayload(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, preSelectedSubject]);

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
    const f = e.currentTarget;

    const name = f.elements['name']?.value;
    const email = f.elements['email']?.value;
    const phoneNum = phone;
    const serviceVal = service;
    const commentsVal = f.elements['comments']?.value;

    if (!name || !email || !phoneNum || subject === 'Select Subject' || serviceVal === 'Select Service' || !commentsVal) {
      alert('Please fill all required fields');
      return;
    }

    if (!validatePhone(phoneNum)) {
      const rule = getPhoneRule();
      alert(`Please enter a valid phone number (${rule.minDigits === rule.maxDigits ? rule.minDigits : rule.minDigits + '-' + rule.maxDigits} digits for ${countryCodes.find((c) => c.code === countryCode)?.country || 'selected country'})`);
      return;
    }

    setPendingPayload({
      name,
      email,
      phone: `${countryCode} ${phoneNum}`,
      subject,
      service: serviceVal,
      comments: commentsVal,
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
      const res = await fetch('/api/contact-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pendingPayload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed');
      }
      alert('Form submitted successfully!');
      formRef.current?.reset();
      setService('Select Service');
      setSubject('Select Subject');
      setCountryCode('+971');
      setPhone('');
      setPendingPayload(null);
      onClose();
    } catch (err) {
      alert(err.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Popup Overlay */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{
          backgroundColor: animating ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)',
          pointerEvents: animating ? 'auto' : 'none',
          transition: 'background-color 1.5s ease',
        }}
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-[560px] max-h-[90vh] overflow-y-auto relative"
          style={{
            opacity: animating ? 1 : 0,
            transform: animating ? 'scale(1)' : 'scale(0.5)',
            transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-[#084032] rounded-t-2xl px-6 py-5 flex items-center justify-between">
            <div>
              <h2 className="text-white text-xl font-bold">Get In Touch</h2>
              <p className="text-white/70 text-sm mt-1">Fill in the form and we&apos;ll get back to you</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X size={24} weight="bold" />
            </button>
          </div>

          {/* Form */}
          <form ref={formRef} className="p-6" onSubmit={handleFormSubmit}>
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                className="border text-[13px] bg-white text-[#333] rounded-lg w-full h-[48px] outline-0 focus:border-[#084032] transition-colors"
                type="text"
                name="name"
                placeholder="Name *"
                required
                style={{ padding: '12px 16px' }}
              />
              <input
                className="border text-[13px] bg-white text-[#333] rounded-lg w-full h-[48px] outline-0 focus:border-[#084032] transition-colors"
                type="email"
                name="email"
                placeholder="Email *"
                required
                style={{ padding: '12px 16px' }}
              />
            </div>

            {/* Phone & Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex border rounded-lg w-full h-[48px] bg-white overflow-hidden focus-within:border-[#084032] transition-colors">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="text-[11px] bg-white text-[#084032] outline-0 border-r w-[80px] shrink-0 cursor-pointer"
                  style={{ padding: '4px' }}
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  className="text-[13px] bg-white text-[#333] outline-0 w-full"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^\d]/g, '');
                    const rule = getPhoneRule();
                    if (val.length <= rule.maxDigits) setPhone(val);
                  }}
                  placeholder={`Phone * (${getPhoneRule().minDigits === getPhoneRule().maxDigits ? getPhoneRule().minDigits : getPhoneRule().minDigits + '-' + getPhoneRule().maxDigits} digits)`}
                  maxLength={getPhoneRule().maxDigits}
                  required
                  style={{ padding: '12px 10px' }}
                />
              </div>
              <select
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border text-[13px] bg-white text-[#333] rounded-lg w-full h-[48px] cursor-pointer focus:border-[#084032] outline-0 transition-colors"
                required
                style={{ padding: '12px 16px' }}
              >
                {subjects.map((item, index) => (
                  <option key={index} value={item} disabled={index === 0} className="text-[13px] text-[#084032]">
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Service */}
            <select
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="border text-[13px] bg-white text-[#333] rounded-lg w-full h-[48px] mb-4 cursor-pointer focus:border-[#084032] outline-0 transition-colors"
              required
              style={{ padding: '12px 16px' }}
            >
              {services.map((item, index) => (
                <option key={index} value={item} disabled={index === 0} className="text-[13px] text-[#084032]">
                  {item}
                </option>
              ))}
            </select>

            {/* Comments */}
            <textarea
              name="comments"
              placeholder="Comments *"
              required
              className="border text-[13px] bg-white text-[#333] rounded-lg w-full h-[100px] mb-4 outline-0 focus:border-[#084032] transition-colors resize-none"
              style={{ padding: '12px 16px' }}
            ></textarea>

            {/* Submit Button */}
            <button
              disabled={loading}
              className="bg-[#084032] hover:bg-[#0a5a47] text-white rounded-full text-[15px] font-bold h-[50px] w-full cursor-pointer transition-colors duration-300"
            >
              {loading ? 'Submitting...' : 'SUBMIT NOW'}
            </button>
          </form>
        </div>
      </div>

      {/* Captcha Modal */}
      <CaptchaModal
        isOpen={showCaptcha}
        onVerified={handleCaptchaVerified}
        onClose={() => setShowCaptcha(false)}
      />

      {/* OTP Modal */}
      <OtpModal
        isOpen={showOtp}
        email={pendingPayload?.email || ''}
        onVerified={handleOtpVerified}
        onClose={() => setShowOtp(false)}
      />
    </>
  );
};

export default ContactFormPopup;
