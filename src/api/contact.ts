import { Resend } from "resend";

// Validate environment variables
if (!import.meta.env.VITE_RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not set');
}
if (!import.meta.env.VITE_CONTACT_EMAIL) {
  throw new Error('CONTACT_EMAIL is not set');
}

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function sendContactEmail({ name, email, message }: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    // Validate input
    if (!name || !email || !message) {
      throw new Error('Missing required fields');
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: import.meta.env.VITE_CONTACT_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return { success: true, message: 'Email sent successfully' };

  } catch (error: any) {
    console.error('Email Error:', error);
    throw new Error(error.message);
  }
}
