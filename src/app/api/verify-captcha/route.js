import { NextResponse } from 'next/server';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '6LeH9ocsAAAAAGqrzw0rTg1xc599mbNmnlVW_QAQ';

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ ok: false, error: 'Token is required' }, { status: 400 });
    }

    const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const body = `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`;
    
    const res = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({ ok: true });
    } else {
      console.error('Captcha failed:', JSON.stringify(data));
      return NextResponse.json({ ok: false, error: 'Captcha verification failed', details: data }, { status: 400 });
    }
  } catch (err) {
    console.error('Captcha verification error:', err);
    return NextResponse.json({ ok: false, error: 'Verification failed' }, { status: 500 });
  }
}
