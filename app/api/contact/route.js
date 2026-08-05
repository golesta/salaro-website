import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));

async function verifyTurnstile(token, ip) {
  if (!token) return false;
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: ip,
    }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(request) {
  try {
    const { name, email, company, message, website, turnstileToken } = await request.json();

    // Honeypot: real visitors never see or fill this in — bots that blindly fill every field do
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    const isHuman = await verifyTurnstile(turnstileToken, ip);
    if (!isHuman) {
      return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : '';
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Notification to Salaro
    await resend.emails.send({
      from: 'Salaro Contact Form <team@salaro.com>',
      to: 'sal@salaro.com',
      replyTo: email,
      subject: `New enquiry from ${safeName}${safeCompany ? ` · ${safeCompany}` : ''}`,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // Confirmation to the sender
    await resend.emails.send({
      from: 'Salaro <team@salaro.com>',
      to: email,
      subject: `We've received your message — Salaro`,
      html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for getting in touch. We've received your message and will reply within one morning.</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:24px 0"/>
        <p style="color:#666;font-size:13px"><strong>Your message:</strong></p>
        ${safeCompany ? `<p style="color:#666;font-size:13px"><strong>Company:</strong> ${safeCompany}</p>` : ''}
        <p style="color:#666;font-size:13px">${safeMessage}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:24px 0"/>
        <p style="color:#999;font-size:12px">Salaro · Build · Migrate · Advise · <a href="https://www.salaro.com">salaro.com</a></p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
