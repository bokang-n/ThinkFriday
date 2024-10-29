import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "./Navbar.css";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Think Friday</div>
      <div className="navbar-links">
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse?.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
