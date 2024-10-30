// BlogSection.jsx
import React from "react";

const BlogSection = () => {
  return (
    <section className="w3l-about py-5" id="about">
      <div className="container py-lg-5 py-md-3">
        <div className="grid-info">
          <h3 className="title-big">What's New</h3>
          <p className="mt-3">
            In the dynamic landscape of South Africa's business environment, companies are continually challenged to navigate regulatory frameworks while striving for growth and sustainability.
          </p>
          <div className="grid-btn text-lg-right">
            <a href="#consultant" className="btn btn-style btn-primary">
              Read More <span className="fa fa-long-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
