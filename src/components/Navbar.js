import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Make sure you have a logo.svg file in the src/assets directory

const Navbar = () => {
  return (
    <nav className="navbar">
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
