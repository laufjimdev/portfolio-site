import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaFolderOpen } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="custom-navbar fixed-top d-flex justify-content-between align-items-center px-4">
      {/* Left Side - Logo */}
      <NavLink to="/" className="navbar-left" style={{ textDecoration: "none" }}>
        <h1 className="navbar-title">LauDev</h1>
      </NavLink>

      {/* Right Side */}
      <div className="navbar-right d-flex align-items-center gap-3">

        {/* ===== MOBILE VERSION (icons only) ===== */}
        <div className="d-flex gap-3 d-md-none">
          <a href="https://github.com/laufjimdev" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} color="#fff" />
          </a>
          <a href="https://linkedin.com/in/laura-jimenez-8a6592344" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} color="#fff" />
          </a>
          <NavLink to="/contact">
            <FaEnvelope size={22} color="#fff" />
          </NavLink>
        </div>

        {/* ===== DESKTOP/TABLET VERSION (menu with icons) ===== */}
        <div className="d-none d-md-flex gap-4 align-items-center">
          <NavLink to="/" end className="nav-link d-flex align-items-center gap-2">
            <FaHome /> Home
          </NavLink>
          <NavLink to="/about" className="nav-link d-flex align-items-center gap-2">
            <FaUser /> About
          </NavLink>
          <NavLink to="/projects" className="nav-link d-flex align-items-center gap-2">
            <FaFolderOpen /> Projects
          </NavLink>
          <NavLink to="/contact" className="nav-link d-flex align-items-center gap-2">
            <FaEnvelope /> Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
