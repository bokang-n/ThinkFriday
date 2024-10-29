import React, {useState} from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "../css/Navbar.css";
import { jwtDecode } from "jwt-decode";
import LoginModal from "./LoginModal";
import "../css/LoginModal.css";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false); //state to manage modal visibility

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

 return (
 <nav className="navbar">
  <div className="navbar-logo">Think Friday</div>
  <div className="navbar-links">
    <Link to="#home">Home</Link>
    <Link to="#whyus">Why Us</Link>
    <Link to="#services">Services</Link>
    <Link to="#testimonials">Testimonials</Link>
    <Link to="#team">Our Team</Link>
    <Link to="#contact">Contact Us</Link>
    <a href="#" onClick={openModal}>Login</a>
  </div>
  <LoginModal isOpen={isModalOpen} onClose={closeModal}/>
 </nav>
 )
};

export default Navbar;
