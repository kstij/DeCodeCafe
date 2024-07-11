// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3 className="footer-logo">Your Community Name</h3>
          <p className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium nibh at ante pulvinar.</p>
          <div className="footer-social">
            <a href="#" className="footer-social-link">Facebook</a>
            <a href="#" className="footer-social-link">Twitter</a>
            <a href="#" className="footer-social-link">Instagram</a>
            <a href="#" className="footer-social-link">LinkedIn</a>
          </div>
        </div>
        <div className="footer-right">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Community Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
