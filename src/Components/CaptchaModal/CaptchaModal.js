"use client";
import React, { useState, useRef, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

// Google's official reCAPTCHA v2 test key (always passes). Replace with your own v2 key for production.
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Le98YgsAAAAAOfcBPgjzuelv3993Kfps6PHMiFb';

const CaptchaModal = ({ isOpen, onVerified, onClose }) => {
  const [error, setError] = useState('');
  const [verifying, setVerifying] = useState(false);
  const recaptchaRef = useRef(null);

  const handleCaptchaChange = useCallback(async (token) => {
    if (!token) {
      setError('Please complete the captcha.');
      return;
    }

    try {
      setVerifying(true);
      setError('');

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
        if (recaptchaRef.current) recaptchaRef.current.reset();
      }
    } catch (err) {
      console.error('reCAPTCHA error:', err);
      setError('Verification failed. Please try again.');
      if (recaptchaRef.current) recaptchaRef.current.reset();
    } finally {
      setVerifying(false);
    }
  }, [onVerified]);

  const handleClose = () => {
    setError('');
    setVerifying(false);
    if (recaptchaRef.current) recaptchaRef.current.reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleClose}>
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-[400px] shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-bold text-[#084032] mb-4 text-center">Verify You&apos;re Human</h3>

        <div className="flex flex-col items-center justify-center mb-4" style={{ minHeight: '100px' }}>
          {verifying && (
            <>
              <div className="w-10 h-10 border-4 border-[#084032] border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-[#084032] text-sm font-medium">Verifying...</p>
            </>
          )}

          {!verifying && (
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
                onExpired={() => { setError('Captcha expired. Please try again.'); if (recaptchaRef.current) recaptchaRef.current.reset(); }}
                onErrored={() => { setError('Captcha error. Please try again.'); }}
              />
            </div>
          )}

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleClose}
          className="w-full border border-[#084032] text-[#084032] rounded-full h-[42px] font-semibold text-[14px] cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CaptchaModal;
