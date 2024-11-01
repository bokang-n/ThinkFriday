// HeroSection.jsx
import React from "react";
import "../css/HeroSection.css";
import banner from "../images/blackwallpaper.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-box">
          <h1 className="hero-heading">
            Conceptualize, Design, & Deliver Excellence
          </h1>
          <p className="hero-desc">This is the hero section paragraph.</p>
          <Link to="/Blog">
            <button className="read-more-btn">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
