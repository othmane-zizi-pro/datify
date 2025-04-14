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
    pass: 'cjyk rqtj jluc ephy', // Replace with your App Password (not your regular password)
  },
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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
      from: `"Datify Contact Form" <othmane.zizi.pro@gmail.com>`, // This should be your Gmail address
      to: 'othmane.zizi.pro@gmail.com', // Where you want to receive emails
      replyTo: email, // So you can reply directly to the sender
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
      html: `
        <div>
          <h2>New message from website contact form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully! We will get back to you soon.',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 