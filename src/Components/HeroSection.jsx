import React, {useState} from "react";
import { GoogleLogin } from "@react-oauth/google";
import "../css/Navbar.css";
import "../css/HeroSection.css";
import banner from '../images/banner.png';

const HeroSection = () => {
  return (
    <section className="home" id="home">
      {<img src={banner} alt="Banner Image"/>}
      <div className="content">
        <h1>Conceptualizing, Designing, & Delivering Excellence</h1>
        <p>
          We are a Business Consulting Organisation that provides end-to-end \
          Business Strategies, Advisory, and Consulting.
        </p>
      </div>
      <a href="#about" className="btn btn-primary">Read More</a>
    </section>
  );
};
export default HeroSection;
