import React from "react";
import "../css/AboutUs.css";

const AboutUs = () => {
  /* const handleReadMore = () => {
    // Define what happens when the button is clicked
    alert("Read More clicked!");
  }; */

  return (
    <div className="about-section">
      <div className="why-us-overlay">
        <h2>Why Us?</h2>
        <p className="why-us-text">
          Business consultants and advisors are key - that's why when it comes
          to client selection, we're choosy. We want to give each of you the
          time and guidance you deserve. Whether you're seeking a strategic
          alliance with the right partner or a special skillset or tool, call us
          today. Together we'll create and refine your plan for success. We
          didn't get there alone. And neither will you.
        </p>
      </div>
      <div className="inner-container">
        <h2>Our Approach</h2>
        <p className="text">
          Our service includes a comprehensive consult to help identify gaps and
          opportunities, a comprehensive report that includes a project plan
          with timelines and milestones, a cost analysis, and a schedule. We
          also offer a suite of quality products that will help you get there
          quickly and smoothly. That's how we ensure your success.
        </p>
        <h2>Our Mission</h2>
        <p className="text">
          After 18 years in various industries, we have decided to alter our
          direction and share our passion by helping others. Our ramp-up process
          is designed to empower our clients and equip them with tools they need
          to succeed. Contact us today about how we can support your growth,
          maximize your Return on Investment (ROI), and put you on a solid track
          to success and profit.
        </p>
        {/* <div className="skills">
          <button onClick={handleReadMore} className="read-more-button">
            Read More
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default AboutUs;
