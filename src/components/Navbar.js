import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Make sure you have a logo.svg file in the src/assets directory

const Navbar = () => {
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrollingUp ? 'visible' : 'hidden'}`}>
      <div className="logo-container">
        <img src={logo} alt="Community Logo" className="logo" />
        <h1 className="community-navname">DecodeCafe Community</h1>
      </div>
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#sponsor">Sponsor Us</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#coc">Code of Conduct</a></li>
        <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="discord-button">Join</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
