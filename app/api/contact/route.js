import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await request.formData();
  const name = formData.get('name') || '';
  const email = formData.get('email') || '';
  const company = formData.get('company') || '';
  const message = formData.get('message') || '';

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  await resend.emails.send({
    from: 'Salaro Contact Form <onboarding@resend.dev>',
    to: 'sal@salaro.com',
    replyTo: email,
    subject: `New enquiry from ${name}${company ? ` · ${company}` : ''}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
