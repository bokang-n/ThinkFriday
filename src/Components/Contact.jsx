// Contact.jsx
import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <form action="">
        <input className="box" type="text" placeholder="Name" />
        <input className="box" type="email" placeholder="Your Email" />
        <input className="box" type="number" placeholder="Your Number" />
        <textarea cols="30" rows="10" placeholder="Message"></textarea>
        <input type="submit" className="btn" value="Send Message" />
      </form>

      <div className="content">
        <h3>Get In Touch With Us</h3>
        <div className="icons">
          <i className="fas fa-map-marker-alt"></i>
          <p>Unit 8, Northlands Retail Park, 210 Epsom Ave, Hoogland, Northriding, 2169</p>
        </div>
        <div className="icons">
          <i className="fas fa-globe"></i>
          <p>www.ThinkFriday.com</p>
        </div>
        <div className="icons">
          <i className="fas fa-phone"></i>
          <p>+27 10 880 3795</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
