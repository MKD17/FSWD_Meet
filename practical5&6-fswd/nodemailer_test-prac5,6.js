const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Predefined admin email
const adminEmail = 'admin@example.com';

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service here
  auth: {
    user: '', // Your email
    pass: '' // Your password
  }
});

// Contact Us API
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: email,
    to: adminEmail,
    subject: `New Contact Form Submission from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email' });
    }
    console.log('Email sent:', info.response);
    res.json({ message: 'Email sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
