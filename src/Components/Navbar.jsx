// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import LoginModal from "./LoginModal";
import logo from "../images/logo-white.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Think Friday Logo" />
      </div>
      <div className="navbar-links">
        <Link to="#home">Home</Link>
        <Link to="#about">About Us</Link>
        <Link to="#services">Services</Link>
        <Link to="#contact">Contact Us</Link>
        <div className="logn-button" onClick={isModalOpen}>
          Login
        </div>
      </div>
      <LoginModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
