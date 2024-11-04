import nodemailer from 'nodemailer';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

// Set up your SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});



// Function to generate a 6-digit verification code
const generateVerificationCode = () => {
  return crypto.randomInt(100000, 999999).toString();
};

// Function to send a verification email
const sendVerificationEmail = async (email, name) => {
  const verificationCode = generateVerificationCode();

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Verification Code',
    html: `
      <h3>Hello ${name},</h3>
      <p>Your verification code is: <strong>${verificationCode}</strong></p>
      <p>Please enter this code in the application to verify your email.</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to ${email}`);
    
    // Return the code for storage in database or session (if needed for later validation)
    return verificationCode;
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error('Failed to send verification email');
  }
};

export { sendVerificationEmail };
