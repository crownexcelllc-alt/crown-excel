"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import countryCodes from '@/data/countryCodes';
import { X, CheckCircle, WarningCircle, CaretDown } from 'phosphor-react';

export const WEBSITE_PRODUCT_CATEGORIES = [
  'Gaming Laptops',
  'All-in-One PCs',
  'Personal Laptops',
  'Business Laptops',
  'Desktop PCs',
  'Printers',
  'Scanners and Copiers',
  'Routers & Access Points',
  'Switching & Networking',
  'Keyboard & Mouse',
  'Accessories',
  'Biometrics',
  'Phones and CCTV',
  'Wholesale Stock List & Bulk Inventory',
];

const WHOLESALE_REQUIREMENT_TYPES = [
  'Bulk Laptop Order (10 - 50 Units)',
  'Volume / Container Order (50 - 100+ Units)',
  'Daily Wholesale Stock List & Price Sheet',
  'Retailer / Corporate Reseller Supply',
  'International Export & Port Freight',
  'Custom Specs & Fleet Configuration',
  'Other Wholesale Inquiries',
];

// Reliable graphical country flag image component (works across all OS including Windows)
function CountryFlag({ iso, country }) {
  const [hasError, setHasError] = useState(false);
  if (hasError || !iso) {
    return null;
  }
  return (
    <img
      src={`https://flagcdn.com/w40/${iso.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${iso.toLowerCase()}.png 2x`}
      width="20"
      height="14"
      alt={country || ''}
      className="w-5 h-3.5 object-cover rounded-[2px] shadow-xs border border-gray-200 shrink-0 inline-block align-middle"
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}

// Helper to determine best matching category from a subject/string
function matchCategory(subject) {
  if (!subject) return 'Gaming Laptops';
  const s = subject.toLowerCase();
  if (s.includes('gaming')) return 'Gaming Laptops';
  if (s.includes('all-in-one') || s.includes('aio')) return 'All-in-One PCs';
  if (s.includes('business')) return 'Business Laptops';
  if (s.includes('personal') || s.includes('aspire') || s.includes('ideapad')) return 'Personal Laptops';
  if (s.includes('desktop') || s.includes('tower') || s.includes('pc')) return 'Desktop PCs';
  if (s.includes('printer')) return 'Printers';
  if (s.includes('scanner') || s.includes('copier')) return 'Scanners and Copiers';
  if (s.includes('router') || s.includes('access point')) return 'Routers & Access Points';
  if (s.includes('switch') || s.includes('networking')) return 'Switching & Networking';
  if (s.includes('stock list') || s.includes('catalog') || s.includes('export')) return 'Wholesale Stock List & Bulk Inventory';
  return subject;
}

export default function WholesaleContactModal({ isOpen, onClose, preSelectedSubject = '' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('UAE');
  const [countryCode, setCountryCode] = useState('+971');
  const [countrySearch, setCountrySearch] = useState('');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Gaming Laptops');
  const [service, setService] = useState('Bulk Laptop Order (10 - 50 Units)');
  const [quantity, setQuantity] = useState('');
  const [destination, setDestination] = useState('');
  const [comments, setComments] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const formRef = useRef(null);
  const countryDropdownRef = useRef(null);
  const countryInputRef = useRef(null);

  // Close country dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryOpen(false);
        setCountrySearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Currently selected country object
  const currentCountryObj = useMemo(() => {
    return countryCodes.find((c) => c.country === selectedCountry) || countryCodes[0];
  }, [selectedCountry]);

  // Real-time filtered countries matching search term
  const filteredCountries = useMemo(() => {
    const q = countrySearch.trim().toLowerCase();
    if (!q) return countryCodes;

    const startsWith = [];
    const contains = [];

    for (const c of countryCodes) {
      const nameLower = c.country.toLowerCase();
      const codeLower = c.code.toLowerCase();
      if (nameLower.startsWith(q)) {
        startsWith.push(c);
      } else if (nameLower.includes(q) || codeLower.includes(q)) {
        contains.push(c);
      }
    }

    // Sort matching results alphabetically
    startsWith.sort((a, b) => a.country.localeCompare(b.country));
    contains.sort((a, b) => a.country.localeCompare(b.country));

    return [...startsWith, ...contains];
  }, [countrySearch]);

  // Available categories list including any custom preSelectedSubject if not already present
  const categoryOptions = useMemo(() => {
    if (preSelectedSubject && !WEBSITE_PRODUCT_CATEGORIES.includes(preSelectedSubject)) {
      return [preSelectedSubject, ...WEBSITE_PRODUCT_CATEGORIES];
    }
    return WEBSITE_PRODUCT_CATEGORIES;
  }, [preSelectedSubject]);

  // Sync category & subject when opened
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });

      if (preSelectedSubject) {
        const matched = matchCategory(preSelectedSubject);
        setSubject(matched);
      } else {
        setSubject('Gaming Laptops');
      }

      setSubmitted(false);
      setErrorMsg('');
      setIsCountryOpen(false);
      setCountrySearch('');
    } else if (visible) {
      setAnimating(false);
      const timer = setTimeout(() => {
        setVisible(false);
        resetForm();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, preSelectedSubject]);

  const resetForm = () => {
    setName('');
    setEmail('');
    setSelectedCountry('UAE');
    setCountryCode('+971');
    setCountrySearch('');
    setIsCountryOpen(false);
    setPhone('');
    setSubject(preSelectedSubject ? matchCategory(preSelectedSubject) : 'Gaming Laptops');
    setService('Bulk Laptop Order (10 - 50 Units)');
    setQuantity('');
    setDestination('');
    setComments('');
    setLoading(false);
    setErrorMsg('');
    setSubmitted(false);
  };

  const handleCountryKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsCountryOpen(true);
    } else if (e.key === 'Escape') {
      setIsCountryOpen(false);
      setCountrySearch('');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCountries.length > 0) {
        const first = filteredCountries[0];
        setSelectedCountry(first.country);
        setCountryCode(first.code);
        setIsCountryOpen(false);
        setCountrySearch('');
      }
    }
  };

  const getPhoneRule = () => {
    const found = countryCodes.find((c) => c.country === selectedCountry) || countryCodes.find((c) => c.code === countryCode);
    return found || { minDigits: 7, maxDigits: 15 };
  };

  const validatePhone = (phoneNum) => {
    const cleaned = phoneNum.replace(/\D/g, '');
    const rule = getPhoneRule();
    return cleaned.length >= rule.minDigits && cleaned.length <= rule.maxDigits;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (!validatePhone(phone)) {
      const rule = getPhoneRule();
      const country = countryCodes.find((c) => c.code === countryCode)?.country || selectedCountry;
      setErrorMsg(`Please enter a valid phone number (${rule.minDigits === rule.maxDigits ? rule.minDigits : `${rule.minDigits}-${rule.maxDigits}`} digits for ${country}).`);
      return;
    }
    if (!subject) {
      setErrorMsg('Please select a product category.');
      return;
    }
    if (!service) {
      setErrorMsg('Please select a wholesale requirement type.');
      return;
    }
    if (!comments.trim()) {
      setErrorMsg('Please describe your inquiry.');
      return;
    }

    try {
      setLoading(true);

      // Structure comments cleanly for admin review
      const formattedComments = [
        `Country: ${selectedCountry}`,
        `Product Category: ${subject}`,
        quantity.trim() ? `Order Quantity: ${quantity.trim()}` : null,
        destination.trim() ? `Destination City / Country: ${destination.trim()}` : null,
        '',
        'Inquiry Details:',
        comments.trim(),
      ].filter((x) => x !== null).join('\n');

      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: `${countryCode} ${phone.trim()}`,
        subject: subject,
        service: service,
        comments: formattedComments,
        quantity: quantity.trim(),
        isWholesale: true,
      };

      const res = await fetch('/api/contact-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to submit inquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Wholesale inquiry error:', err);
      setErrorMsg(err.message || 'Submission failed. Please check your network or try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 transition-all duration-300"
      style={{
        backgroundColor: animating ? 'rgba(0,0,0,0.65)' : 'rgba(0,0,0,0)',
        backdropFilter: animating ? 'blur(4px)' : 'none',
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-[620px] max-h-[92vh] overflow-y-auto relative transition-all duration-300 transform"
        style={{
          opacity: animating ? 1 : 0,
          transform: animating ? 'scale(1)' : 'scale(0.95)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#084032] rounded-t-2xl px-6 py-5 flex items-start justify-between text-white border-b border-[#00a63e]/30">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00a63e] animate-pulse"></span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Wholesale Laptop Inquiry</h2>
            </div>
            
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-white/10 shrink-0 ml-4"
            aria-label="Close modal"
          >
            <X size={22} weight="bold" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-6 px-2">
              <div className="w-16 h-16 bg-[#e6f9f0] text-[#00a63e] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle size={44} weight="fill" />
              </div>
              <h3 className="text-2xl font-bold text-[#084032] mb-2">Inquiry Submitted Successfully!</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-gray-800">{name}</span>! Your wholesale inquiry for{' '}
                <span className="font-semibold text-[#084032]">&quot;{subject}&quot;</span> has been received. Our B2B export sales team will review your order details and contact you shortly with wholesale pricing and stock availability.
              </p>

              {/* Inquiry Summary Box */}
              <div className="bg-[#f8fbf9] border border-[#00a63e]/20 rounded-xl p-4 text-left max-w-md mx-auto mb-6 text-xs text-gray-600 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-500">Country:</span>
                  <div className="flex items-center gap-2">
                    <CountryFlag iso={currentCountryObj.iso} country={selectedCountry} />
                    <span className="text-gray-800 font-medium">{selectedCountry}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-500">Product Category:</span>
                  <span className="text-[#084032] font-semibold">{subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-500">Requirement Type:</span>
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
                {quantity && (
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-500">Quantity:</span>
                    <span className="text-gray-800 font-medium">{quantity}</span>
                  </div>
                )}
                {destination && (
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-500">Destination:</span>
                    <span className="text-gray-800 font-medium">{destination}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-500">Email:</span>
                  <span className="text-gray-800 font-medium">{email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-500">Phone Number:</span>
                  <span className="text-gray-800 font-medium">{countryCode} {phone}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="bg-[#084032] hover:bg-[#00a63e] text-white font-semibold px-8 py-3 rounded-full text-sm transition-all duration-200 shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              {/* Error Banner */}
              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2">
                  <WarningCircle size={18} weight="fill" className="shrink-0 text-red-500" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Row 1: Contact Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"
                    required
                    className="border border-gray-300 text-[13px] bg-white text-gray-800 rounded-lg w-full h-[46px] px-3.5 outline-none focus:border-[#084032] focus:ring-1 focus:ring-[#084032] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    required
                    className="border border-gray-300 text-[13px] bg-white text-gray-800 rounded-lg w-full h-[46px] px-3.5 outline-none focus:border-[#084032] focus:ring-1 focus:ring-[#084032] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Searchable Country & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                {/* Searchable Country Dropdown */}
                <div ref={countryDropdownRef} className="relative">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="flex items-center border border-gray-300 rounded-lg w-full h-[46px] bg-white overflow-hidden focus-within:border-[#084032] focus-within:ring-1 focus-within:ring-[#084032] transition-all cursor-pointer px-3 gap-2.5 relative"
                    onClick={() => {
                      setIsCountryOpen(true);
                      countryInputRef.current?.focus();
                    }}
                  >
                    {/* Visual Country Flag Image */}
                    <CountryFlag iso={currentCountryObj.iso} country={currentCountryObj.country} />

                    <input
                      ref={countryInputRef}
                      type="text"
                      value={isCountryOpen ? countrySearch : currentCountryObj.country}
                      onChange={(e) => {
                        setCountrySearch(e.target.value);
                        if (!isCountryOpen) setIsCountryOpen(true);
                      }}
                      onFocus={() => {
                        setIsCountryOpen(true);
                      }}
                      onKeyDown={handleCountryKeyDown}
                      placeholder={isCountryOpen ? "Search Country..." : "Select Country"}
                      className="text-[13px] bg-transparent text-gray-800 outline-none w-full cursor-pointer font-medium"
                    />
                    <div className="text-gray-400 pointer-events-none flex items-center shrink-0">
                      <CaretDown size={14} weight="bold" className={`transition-transform duration-200 ${isCountryOpen ? 'rotate-180 text-[#084032]' : ''}`} />
                    </div>
                  </div>

                  {/* Dropdown Options List */}
                  {isCountryOpen && (
                    <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-56 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-2xl py-1 text-left">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((c) => (
                          <div
                            key={c.country}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              setSelectedCountry(c.country);
                              setCountryCode(c.code);
                              setIsCountryOpen(false);
                              setCountrySearch('');
                            }}
                            className={`px-3.5 py-2.5 text-xs flex items-center gap-2.5 cursor-pointer transition-colors ${
                              c.country === selectedCountry
                                ? 'bg-[#e6f9f0] text-[#084032] font-semibold'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <CountryFlag iso={c.iso} country={c.country} />
                            <span className="font-medium text-gray-800">{c.country}</span>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-xs text-gray-400 text-center">
                          No matching country found
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex border border-gray-300 rounded-lg w-full h-[46px] bg-white overflow-hidden focus-within:border-[#084032] focus-within:ring-1 focus-within:ring-[#084032] transition-all">
                    <span className="bg-gray-100 text-[#084032] font-semibold text-xs px-3.5 flex items-center border-r border-gray-300 shrink-0 select-none">
                      {countryCode}
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^\d]/g, '');
                        const rule = getPhoneRule();
                        if (val.length <= rule.maxDigits) setPhone(val);
                      }}
                      placeholder="Enter Your Phone Number"
                      maxLength={getPhoneRule().maxDigits}
                      required
                      className="text-[13px] bg-white text-gray-800 outline-none w-full px-3.5"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Product Category Dropdown & Requirement Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Product Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="border border-gray-300 text-[13px] bg-white text-gray-800 rounded-lg w-full h-[46px] px-3 outline-none focus:border-[#084032] focus:ring-1 focus:ring-[#084032] transition-all cursor-pointer font-medium"
                  >
                    <option value="" disabled>Select Product Category</option>
                    {categoryOptions.map((cat, idx) => (
                      <option key={idx} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Requirement Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="border border-gray-300 text-[13px] bg-white text-gray-800 rounded-lg w-full h-[46px] px-3 outline-none focus:border-[#084032] focus:ring-1 focus:ring-[#084032] transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select Requirement Type</option>
                    {WHOLESALE_REQUIREMENT_TYPES.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Quantity & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Estimated Order Quantity
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter Estimated Quantity"
                    className="border border-gray-300 text-[13px] bg-white text-gray-800 rounded-lg w-full h-[46px] px-3.5 outline-none focus:border-[#084032] focus:ring-1 focus:ring-[#084032] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Destination City / Country
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter Destination City or Country"
                    className="border border-gray-300 text-[13px] bg-white text-gray-800 rounded-lg w-full h-[46px] px-3.5 outline-none focus:border-[#084032] focus:ring-1 focus:ring-[#084032] transition-all"
                  />
                </div>
              </div>

              {/* Row 5: Message / Inquiry Details */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Describe Your Inquiry"
                  required
                  rows={3}
                  className="border border-gray-300 text-[13px] bg-white text-gray-800 rounded-lg w-full px-3.5 py-2.5 outline-none focus:border-[#084032] focus:ring-1 focus:ring-[#084032] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-[48px] bg-gradient-to-r from-[#00a63e] to-[#084032] hover:from-[#084032] hover:to-[#00a63e] text-white font-bold text-sm tracking-wide rounded-xl shadow-lg transition-all duration-300 transform active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <span>Submitting Wholesale Inquiry...</span>
                  </>
                ) : (
                  <span>SUBMIT WHOLESALE INQUIRY</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
