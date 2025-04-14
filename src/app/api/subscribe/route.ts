import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a real transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // For Gmail, you'll need to use an "App Password" if you have 2FA enabled
    // Go to your Google Account > Security > App passwords
    // Then create a new app password for "Mail" and "Other (Custom name)"
    user: 'othmane.zizi.pro@gmail.com', // Your Gmail address
    pass: 'cjyk rqtj jluc ephy', // App Password
  },
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, subject } = body;

    // Validate the required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Very simple validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Datify Newsletter" <othmane.zizi.pro@gmail.com>`, // This should be your Gmail address
      to: 'othmane.zizi.pro@gmail.com', // Where you want to receive emails
      replyTo: email, // So you can reply directly to the sender
      subject: subject || 'New Newsletter Subscription',
      text: `
New Newsletter Subscription:

Name: ${name}
Email: ${email}

This is an automated message from your Datify website.
      `,
      html: `
        <div>
          <h2>New Newsletter Subscription</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>This is an automated message from your Datify website.</p>
        </div>
      `,
    });

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Newsletter subscription successful! Thank you for subscribing.',
    });
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
} 