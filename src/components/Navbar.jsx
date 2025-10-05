import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar fixed-top d-flex justify-content-between align-items-center px-4">
      <Link to="/" className="navbar-left" style={{ textDecoration: "none"}}>
        <h1 className="navbar-title">LauDev</h1>
      </Link>
      <div className="navbar-right d-flex gap-3">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="#fff" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="#fff" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
