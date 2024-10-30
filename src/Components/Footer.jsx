// Footer.jsx
import React from "react";
import "../css/Footer.css"; // Ensure you have this CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="share">
        <h3>Follow Us</h3>
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-pinterest"></a>
      </div>
      <h1 className="credit">
        Created by <a href="#">ThinkFriday</a> | All rights reserved
      </h1>
    </div>
  );
};

export default Footer;
