import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
      </div>
    </Router>
    /*  <div className="App">
      <header className="App-header">
        <p>Google Auth Interation</p>
        <span>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          ;
        </span>
      </header>
    </div> */
  );
}

export default App;
