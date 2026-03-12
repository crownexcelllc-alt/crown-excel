"use client";
import React, { useState, useEffect, useRef } from 'react';

// NEW reCAPTCHA v3 site key
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeH9ocsAAAAAC4j_7mgM-sYAItRc_hnIq_jEgHe';

// Load reCAPTCHA v3 script once globally
function loadRecaptchaScript() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') { reject(new Error('No window')); return; }

    // Already loaded & ready
    if (window.grecaptcha && typeof window.grecaptcha.execute === 'function') {
      resolve(window.grecaptcha);
      return;
    }

    // Script tag already exists — wait for it
    const existing = document.querySelector('script[src*="recaptcha/api.js"]');
    if (existing) {
      const poll = setInterval(() => {
        if (window.grecaptcha && typeof window.grecaptcha.execute === 'function') {
          clearInterval(poll);
          resolve(window.grecaptcha);
        }
      }, 150);
      setTimeout(() => { clearInterval(poll); reject(new Error('Timeout waiting for reCAPTCHA')); }, 10000);
      return;
    }

    // Load fresh script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      const poll = setInterval(() => {
        if (window.grecaptcha && typeof window.grecaptcha.execute === 'function') {
          clearInterval(poll);
          resolve(window.grecaptcha);
        }
      }, 150);
      setTimeout(() => { clearInterval(poll); reject(new Error('Timeout waiting for reCAPTCHA')); }, 10000);
    };
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
    document.head.appendChild(script);
  });
}

const CaptchaModal = ({ isOpen, onVerified, onClose }) => {
  const [error, setError] = useState('');
  const [verifying, setVerifying] = useState(false);
  const hasRun = useRef(false);

  const handleVerify = async () => {
    try {
      setVerifying(true);
      setError('');

      const grecaptcha = await loadRecaptchaScript();
      const token = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' });

      const res = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (data.ok) {
        onVerified();
      } else {
        setError('Verification failed. Please try again.');
      }
    } catch (err) {
      console.error('reCAPTCHA error:', err);
      setError('Verification failed. Please try again.');
    } finally {
      setVerifying(false);
    }
  };

  // Auto-execute ONCE when modal opens
  useEffect(() => {
    if (isOpen && !hasRun.current) {
      hasRun.current = true;
      handleVerify();
    }
    if (!isOpen) {
      hasRun.current = false;
      setError('');
      setVerifying(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-[400px] shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-bold text-[#084032] mb-4 text-center">Verify You&apos;re Human</h3>

        <div className="flex flex-col items-center justify-center mb-4" style={{ minHeight: '80px' }}>
          {verifying && !error && (
            <>
              <div className="w-10 h-10 border-4 border-[#084032] border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-[#084032] text-sm font-medium">Verifying you&apos;re human...</p>
            </>
          )}
          {error && (
            <>
              <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
              <button
                type="button"
                onClick={handleVerify}
                className="bg-[#084032] text-white rounded-full px-6 h-[38px] font-semibold text-[13px] cursor-pointer"
              >
                Retry
              </button>
            </>
          )}
          {!verifying && !error && (
            <p className="text-gray-400 text-sm">Initializing reCAPTCHA...</p>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full border border-[#084032] text-[#084032] rounded-full h-[42px] font-semibold text-[14px] cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CaptchaModal;
