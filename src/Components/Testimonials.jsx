// Testimonials.jsx
import React from "react";
import "../css/Testimonials.css"; // Import your CSS file here

const Testimonials = () => {
  return (
    <section className="features" id="features">
      <h1 className="heading">Testimonials</h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-bell"></i>
          <h3>Notification Alert</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vel
            repellendus necessitatibus amet doloribus aut quia ad asperiores
            deserunt ullam!
          </p>
        </div>

        <div className="box">
          <i className="fas fa-comments"></i>
          <h3>Live Chat</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vel
            repellendus necessitatibus amet doloribus aut quia ad asperiores
            deserunt ullam!
          </p>
        </div>

        <div className="box">
          <i className="fas fa-heartbeat"></i>
          <h3>Heart Beat Tracker</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vel
            repellendus necessitatibus amet doloribus aut quia ad asperiores
            deserunt ullam!
          </p>
        </div>

        <div className="box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>GPS Tracker</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vel
            repellendus necessitatibus amet doloribus aut quia ad asperiores
            deserunt ullam!
          </p>
        </div>

        <div className="box">
          <i className="fas fa-wifi"></i>
          <h3>WiFi Facility</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vel
            repellendus necessitatibus amet doloribus aut quia ad asperiores
            deserunt ullam!
          </p>
        </div>

        <div className="box">
          <i className="fas fa-cloud-sun"></i>
          <h3>Weather Updates</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vel
            repellendus necessitatibus amet doloribus aut quia ad asperiores
            deserunt ullam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
