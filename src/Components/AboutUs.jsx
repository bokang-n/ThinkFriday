import React from "react";
import "../css/AboutUs.css";

const AboutUs = () => {
    const handleReadMore = () => {
        // Define what happens when the button is clicked
        alert("Read More clicked!");
    };

    return (
        <div className="about-section">
            <div className="inner-container">
                <h1>About Us</h1>
                <p className="text">
                    Our service includes a comprehensive consult to help identify gaps and 
                    opportunities, a comprehensive report that includes a project plan with timelines 
                    and milestones, a cost analysis, and a schedule. We also offer a suite of quality 
                    products that will help you get there quickly and smoothly. That's how we ensure your 
                    success.
                </p>
                <div className="skills">
                    <button onClick={handleReadMore} className="read-more-button">Read More</button>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;