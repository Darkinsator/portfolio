import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.css';

const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      from_email: email,
      message: message,
    }, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-me">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
      {isSent && <p className="confirmation">Your message has been sent successfully!</p>}
    </div>
  );
};

export default ContactMe;
