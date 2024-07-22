import React, { useState } from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing Font Awesome icons
import './Footer.css';
import divBackground from "../assets/footer_background.png"

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

  const handleTwitterClick = (e) => {
    e.preventDefault();
    const twitterIcon = e.currentTarget;
    twitterIcon.classList.add('flying');
    setTimeout(() => {
      window.location.href = 'https://twitter.com/yourTwitterHandle';
    }, 2000); // Redirect after 2 seconds
  };

  const handleInstagramClick = (e) => {
    e.preventDefault();
    const instagramIcon = e.currentTarget;
    instagramIcon.classList.add('expanding');
    setTimeout(() => {
      window.location.href = 'https://instagram.com/yourInstagramHandle';
    }, 2000); // Redirect after 2 seconds
  };

  const handleYouTubeClick = (e) => {
    e.preventDefault();
    const youtubeIcon = e.currentTarget;
    youtubeIcon.classList.add('flying'); // Add flying class
    setTimeout(() => {
      window.location.href = 'https://youtube.com/yourYouTubeChannel';
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <div className='footer-community'>
            <h3 className="footer-logo">DecodeCafe Community</h3>
            <p className="footer-desc">
              A place for coding enthusiasts to connect, learn, and grow together.
            </p>
          </div>
          <div className="footer-links">
            <div className='footer-quick'>
              <h3 className="footer-heading">Useful Links</h3>
              <div className='heading-1-links'>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">Blog</a></li>
                <li><a href="#events">Events</a></li>
              </ul>
              <ul className='heading-1-2'>
                <li><a href="#home">Blog</a></li>
                <li><a href="https://discord.gg/SUUew6jBDU">Discord</a></li>
                <li><a href="https://github.com/DeCodeCafe">Github</a></li>
              </ul>
              </div>
            </div>
            <div className='footer-quick-2'>
              <h3 className="footer-heading-2">COMPANY</h3>
              <ul className='heading-2-items'>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="https://github.com/DeCodeCafe/Code-of-Conduct">Privacy Policies</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-newsletter-container">
          <div className="footer-newsletter">
            <p className='news-main'>Join us <span className='news-sub'><br />Let's Grow Together :)</span></p>
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
            <a href="https://x.com/decodecafe_" className="footer-social-link bird" ><FaTwitter /></a>
            <a href="https://www.instagram.com/decodecafe_x/" className="footer-social-link insta" ><FaInstagram /></a>
            <a href="https://www.youtube.com/@decodecafe" className="footer-social-link youtube" ><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/decodecafe-community/" className="footer-social-link linkedin"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
          <div className='div-background'>
            <img src={divBackground} alt="Footer Background" />
          </div>
        <p className='footer-bottom-text'>&copy; {new Date().getFullYear()} DecodeCafe Community. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
