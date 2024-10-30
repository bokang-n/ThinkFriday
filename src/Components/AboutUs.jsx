import React from "react";
import "../css/AboutUs.css";

const AboutUs = () => {
    return(
        <section className="about" id="about">
      <h1 className="heading">Why Us</h1>

      <div className="row">
        <div className="imgWrapper">
          <img src="images/about-us.jpg" alt="About Us" />
        </div>

        <div className="contentWrapper">
          <div className="content">
            <span className="textwrapper">
              <span>New Collection</span>
            </span>
            <h2>About Us</h2>
            <p>
              Business Consultants and Advisors are key—that’s why when it comes to client selection, we’re choosy. We want to give each of you the time and guidance you deserve. Whether you’re seeking a strategic alliance with the right partner or a special skillset or tool, call us today. Together we’ll create and refine your plan for success. We didn’t get there alone. And neither will you.
            </p>
            <a href="#more">
              <button className="btn">Learn More</button>
            </a>
            
            {/* Uncomment and adjust for collapsible content if needed */}
            {/* 
            <div className="collapsable">
              <input type="checkbox" id="collapsable-head1" />
              <label htmlFor="collapsable-head1">Our Approach</label>
              <div className="collapsable-text">
                <p>Our service includes a comprehensive consult to help identify gaps and opportunities, a project plan with timelines, milestones, and a cost analysis.</p>
              </div>
            </div>
            
            <div className="collapsable">
              <input type="checkbox" id="collapsable-head2" />
              <label htmlFor="collapsable-head2">Our Mission</label>
              <div className="collapsable-text">
                <p>After 18 years in various industries, we have decided to share our passion by helping others. Our process is designed to empower clients with the tools needed for success.</p>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
    );
};export default AboutUs;