"use client"
import React, { useState } from 'react'
import LottieAnimation from '../lootieanimation/animation'
import CaptchaModal from '../../../Components/CaptchaModal/CaptchaModal'
import OtpModal from '../../../Components/OtpModal/OtpModal'
import countryCodes from '../../../data/countryCodes'

const Contactus = () => {
  const services = [
    'Select Service',
    'RMA Facility',
    'IT Consultancy',
    'Managed IT',
    'Software AMC',
    'Hardware AMC',
    'Server Support',
    'Hardware Repair'
  ];

  const subjects = [
    'Select Subject',
    'Become Our Partner',
    'For Corporates Content',
    'Wholesale Inquiries'
  ];

  const [service, setService] = useState('Select Service')
  const [subject, setSubject] = useState('Select Subject')
  const [countryCode, setCountryCode] = useState('+971')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [formRef, setFormRef] = useState(null)
  const [pendingPayload, setPendingPayload] = useState(null)

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
    setFormRef(f);

    const name = f.elements['name']?.value;
    const email = f.elements['email']?.value;
    const phoneNum = phone;
    const serviceVal = f.elements['service']?.value || service;
    const commentsVal = f.elements['comments']?.value;

    if (!name || !email || !phoneNum || subject === 'Select Subject' || serviceVal === 'Select Service' || !commentsVal) {
      alert('Please fill all required fields');
      return;
    }

    if (!validatePhone(phoneNum)) {
      const rule = getPhoneRule();
      alert(`Please enter a valid phone number (${rule.minDigits === rule.maxDigits ? rule.minDigits : rule.minDigits + '-' + rule.maxDigits} digits for ${countryCodes.find(c => c.code === countryCode)?.country || 'selected country'})`);
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
      formRef?.reset();
      setService('Select Service');
      setSubject('Select Subject');
      setCountryCode('+971');
      setPhone('');
      setPendingPayload(null);
    } catch (err) {
      alert(err.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='contact-us h-[900px] lg:h-[700px] text-black flex flex-col items-center justify-center gap-10'>
        <div className="header text-center">
          <h1 className='text-[32px] lg:text-[47px] font-roboto font-bold'>Get In Touch</h1>
          <p className='text-[14px] lg:text-[24px] font-roboto'>Reach out to us, and we&apos;ll be happy to assist you.</p>
        </div>
        <div className="contact-details flex flex-col md:flex-row lg:flex-row items-center justify-between w-full px-[50px]">
          <div className="contact-details-left bg-[#f8f8f8] rounded shadow-2xl" style={{ padding: '20px 20px 20px 20px' }}>
            <form className='flex flex-col items-center' onSubmit={handleFormSubmit}>
              <div className="name-email flex items-center gap-5">
                <input className='border text-[13px] bg-white text-[#8692ad] rounded w-[150px] lg:w-[250px] h-[50px] outline-0' type="text" name="name" placeholder='Name *' required style={{ padding: '14px 18px 14px 18px' }} />
                <input className='border text-[13px] bg-white text-[#8692ad] rounded w-[150px] lg:w-[250px] h-[50px] outline-0' type="email" placeholder='Email *' name="email" required style={{ padding: '14px 18px 14px 18px' }} />
              </div>
              <div className="phone-subject flex items-center gap-5 mt-5">
                <div className="flex border rounded w-[150px] lg:w-[250px] h-[50px] bg-white overflow-hidden">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="text-[11px] bg-white text-[#084032] outline-0 border-r w-[70px] lg:w-[85px] shrink-0 cursor-pointer"
                    style={{ padding: '4px' }}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <input
                    className='text-[13px] bg-white text-[#8692ad] outline-0 w-full'
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
                    style={{ padding: '14px 10px' }}
                  />
                </div>
                <select name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className='border text-[13px] bg-white text-[#8692ad] rounded w-[150px] lg:w-[250px] h-[50px]' required style={{ padding: '14px 18px 14px 18px' }}>
                  {subjects.map((item, index) => (
                    <option key={index} value={item} disabled={index === 0} className='text-[13px] text-[#084032]'>{item}</option>
                  ))}
                </select>
              </div>
              <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className="border mt-5 text-[13px] bg-white text-[#8692ad] rounded w-full h-[50px]" required style={{ padding: '14px 18px 14px 18px' }}>
                {services.map((item, index) => (
                  <option key={index} value={item} disabled={index === 0} className='border text-[13px] text-[#084032] w-[150px] h-[50px] mt-5' style={{ padding: '14px 18px 14px 18px' }}>
                    {item}
                  </option>
                ))}
              </select>
              <textarea name="comments" id="comments" placeholder='Comments *' required className='border text-[13px] bg-white text-[#8692ad] rounded w-full h-[96px] mt-5' style={{ padding: '14px 18px 14px 18px' }}></textarea>
              <button disabled={loading} className='bg-[#084032] mt-5 text-white rounded-[30px] text-[16px] font-bold h-[55px] w-full cursor-pointer' style={{ padding: '14px 20px 14px 20px' }}>{loading ? 'Submitting...' : 'SUBMIT NOW'}</button>
            </form>
          </div>
          <div className="Contianer contact-details-right">
            <LottieAnimation />
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
  )
}

export default Contactus
