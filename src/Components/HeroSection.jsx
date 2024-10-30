import React, {useState} from "react";
import { GoogleLogin } from "@react-oauth/google";
import "../css/Navbar.css";
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>Conceptualizing, Designing, & Delivering Excellence</h1>
        <p>
          We are a Business Consulting Organisation that provides end-to-end \
          Business Strategies, Advisory, and Consulting.
        </p>
        <a href="#about" className="btn">Read More</a>
      </div>
      <div className="image">
        <img src="/public/images/banner.png" alt="banner image" style={{width: "500px", padding:"100px"}}/>
      </div>
    </section>
  );
};
export default HeroSection;
