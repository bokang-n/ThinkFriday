// CoreFeatures.jsx
import React from "react";
import "../css/CoreFeatures.css"; // Import CSS file for styling
import coreImg from "../images/core_img.jpg";

const CoreFeatures = () => {
  return (
    <section className="core" id="core">
      <h1 className="heading">Our Services</h1>

      <div className="row">
        <div className="box-container">
          <div className="box">
            <h3>
              <i className="fas fa-user"></i> B-BBEE Advisory & Consulting
            </h3>
            <p>
              We assist clients to achieve their desired level of B-BBEE
              compliance in the most efficient and cost-effective manner with
              the least disruption to their business. We provode comprehensive
              services to support our client's business by leveraging
              strategies, legislation, and best practice to ensure Growth and
              Return on Investemnt (ROI).
            </p>
          </div>

          <div className="box">
            <h3>
              <i className="fas fa-shield-alt"></i> Human Resource (HR)
              Consulting
            </h3>
            <p>
              We provide Human Resources (HR) Consulting services that form an
              integral asset to our client's HR team. By creating and
              implementing bespoke HR strategies, we work to ensure the
              organisation is effectively utilizing its personnel to achieve its
              goals, while working at optimal performance and efficiency levels.
            </p>
          </div>

          <div className="box">
            <h3>
              <i className="fas fa-sync-alt"></i> Skills Development
            </h3>
            <p>
              We provide Skills Development Consulting services that are
              designed to maximize the effect of B-BBEE Strategies within our
              client's organisation. We align training and development to
              strategic business objectives and ensure increased Return on
              Investment (ROI) in training initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
