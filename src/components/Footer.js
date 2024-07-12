// Footer.js

import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing Font Awesome icons
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinUsClick = () => {
    // Here you can implement the logic to store the email address in your backend
    console.log(`Email address ${email} submitted.`);
    // You may want to add backend integration here
    setEmail(''); // Clear the input field after submission
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3 className="footer-logo">DecodeCafe Community</h3>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium nibh at ante pulvinar.
          </p>
        </div>
        <div className="footer-right">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </div>
        <div className="footer-join-us">
          <p>Join us and keep in touch:</p>
          <div className="footer-newsletter">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
              className="footer-email-input"
            />
            <button onClick={handleJoinUsClick} className="footer-join-button">
              Join Us
            </button>
          </div>
          <div className="footer-social">
            <a href="#" className="footer-social-link"><FaFacebook /></a>
            <a href="#" className="footer-social-link"><FaTwitter /></a>
            <a href="#" className="footer-social-link"><FaInstagram /></a>
            <a href="#" className="footer-social-link"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DecodeCafe Community. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
