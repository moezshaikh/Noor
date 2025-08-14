import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
           Noor Calligraphy celebrates the timeless beauty of handcrafted lettering.
Each piece blends tradition with contemporary design, creating artwork that inspires, uplifts, and transforms any space.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="https://www.instagram.com/mo_arts10?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-icon"><FaInstagram /></a>
           <a 
  href="https://www.linkedin.com/in/moez-shaikh" 
  className="social-icon" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaLinkedinIn />
</a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/submit">Custom Design</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* Collections */}
        <div className="footer-section">
          <h4>Collections</h4>
          <ul>
            <li><a href="#">Classical Calligraphy</a></li>
            <li><a href="#">Contemporary Art</a></li>
            <li><a href="#">Quranic Verses</a></li>
            <li><a href="#">99 Names of Allah</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>📍 Shrirampur, Ahmednagar, India</li>
            <li>📞 +91-99XX XXXXX</li>
            <li>✉️ info@noorcalligraphy.com</li>
            <li>🕒 Mon–Sat: 9 AM – 6 PM</li>
          </ul>
        </div>

      </div>

<div className="footer-bottom">
  <p>
    &copy; 2025 Noor Calligraphy. All rights reserved. | 
    <a href="/terms"> Terms of Service</a> | 
    <a href="/privacy"> Privacy Policy</a>
  </p>
  <p className="footer-author">
   -  by <a href="https://www.linkedin.com/in/moez-shaikh" target="_blank" rel="noopener noreferrer">Moez Shaikh</a>
  </p>
</div>


    </footer>
  );
};

export default Footer;
