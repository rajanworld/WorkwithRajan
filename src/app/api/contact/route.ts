import { NextResponse } from "next/server";
import { Resend } from "resend";

// Validate environment variables
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not set');
}
if (!process.env.CONTACT_EMAIL) {
  throw new Error('CONTACT_EMAIL is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    try {
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev', // Use this exact address for testing
        to: process.env.CONTACT_EMAIL,
        reply_to: email,
        subject: `Contact Form: ${name}`,
        html: `
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (data.id) {
        return NextResponse.json({ 
          success: true, 
          message: 'Email sent successfully',
          id: data.id 
        });
      } else {
        throw new Error('Failed to send email');
      }

    } catch (sendError: any) {
      console.error('Resend API Error:', sendError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service error',
          details: sendError.message 
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Server error',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
