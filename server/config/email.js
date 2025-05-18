require("dotenv").config();
const nodemailer = require('nodemailer');

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or another email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (to, subject, html) => {
  // Add validation for recipient
  if (!to) {
    console.error('No recipient email provided');
    throw new Error('No recipient email provided');
  }
  
  try {
    const info = await transporter.sendMail({
      from: `"SRM Open Source Community" <${process.env.EMAIL_USER}>`,
      to, // Make sure this is a valid email address
      subject,
      html
    });
    
    console.log('Email sent: ', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Re-throw to handle in controller
  }
};

module.exports = { sendEmail };