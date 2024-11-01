import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutUs from "./Components/AboutUs";
import CoreFeatures from "./Components/CoreFeatures";
import Testimonials from "./Components/Testimonials";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Blog from "./Components/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <CoreFeatures />
        <Testimonials />
        <Team />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
