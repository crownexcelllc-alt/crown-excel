import { NextResponse } from 'next/server';

// NEW reCAPTCHA v3 secret key
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '6LeH9ocsAAAAAGqrzw0rTg1xc599mbNmnlVW_QAQ';

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      console.error('NO TOKEN RECEIVED');
      return NextResponse.json({ ok: false, error: 'Token is required' }, { status: 400 });
    }

    console.log('=== reCAPTCHA VERIFY ===');
    console.log('Token length:', token?.length);
    console.log('Token first 50:', token?.substring(0, 50));
    console.log('Secret key first 15:', RECAPTCHA_SECRET_KEY.substring(0, 15));

    const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const body = `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`;
    
    const res = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    const data = await res.json();
    console.log('Google response:', JSON.stringify(data));

    if (data.success && (data.score === undefined || data.score >= 0.5)) {
      console.log('=== CAPTCHA PASSED, score:', data.score, '===');
      return NextResponse.json({ ok: true, score: data.score });
    } else {
      console.error('=== CAPTCHA FAILED ===', JSON.stringify(data));
      return NextResponse.json({ ok: false, error: 'Captcha verification failed', details: data }, { status: 400 });
    }
  } catch (err) {
    console.error('Captcha verification error:', err);
    return NextResponse.json({ ok: false, error: 'Verification failed' }, { status: 500 });
  }
}
