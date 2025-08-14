import React, { useState } from 'react';
import '../styles/contact.css';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>👋 Hello, how can I help you?</h1>
        <p>
          Whether you have a question, need a custom design, or just want to say 
          we’re here for you.
        </p>
      </div>

      {/* Contact Card */}
      <div className="contact-card">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            Fill out the form below or reach us directly through WhatsApp or social media.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> support@noorcalligraphy.com</p>
            <p><strong>Phone:</strong> +91 9XXX XXXXX XX</p>
            <p><strong>Location:</strong> Pune, Maharashtra, India</p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>

          {/* Success Message */}
          {formStatus === 'success' && (
            <p className="success-message">✅ Thank you, we’ll be in touch within 24 hours.</p>
          )}
        </form>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>How long does delivery take?</h4>
          <p>Typically 5–7 business days within India. Custom pieces may take longer.</p>
        </div>
        <div className="faq-item">
          <h4>Do you offer custom calligraphy?</h4>
          <p>Yes! You can request any verse, name, or design tailored to your preference.</p>
        </div>
        <div className="faq-item">
          <h4>What payment methods do you accept?</h4>
          <p>We accept UPI, credit/debit cards, and bank transfers.</p>
        </div>
      </div>

      {/* Floating WhatsApp Chat Button */}
<a
  href="#"
  className="whatsapp-chat"
  onClick={(e) => e.preventDefault()} // prevents navigation
>
  <FaWhatsapp /> Chat with Us
</a>

    </div>
  );
}

export default Contact;
