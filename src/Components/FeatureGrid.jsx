// FeatureGrid.jsx
import React from "react";

const FeatureGrid = () => {
  const features = [
    {
      imgSrc: "saas-landing-page-main/images/pexels-goumbik-577210.jpg",
      title: "Workplace Skills Plan and Annual Training Report"
    },
    {
      imgSrc: "saas-landing-page-main/images/pexels-goumbik-669610.jpg",
      title: "Annual Transformation Reports"
    },
    {
      imgSrc: "saas-landing-page-main/images/samsung-memory-cNcMgLCY-wE-unsplash.jpg",
      title: "Enhancing BBBEE Compliance With WSP"
    }
  ];

  return (
    <section className="w3l-bottom-grids-6 py-5" id="who">
      <div className="container py-lg-5 py-md-4">
        <div className="grids-area-hny main-cont-wthree-fea row pt-lg-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 grids-feature">
              <div className="area-box">
                <img src={feature.imgSrc} alt={feature.title} />
                <div className="info">
                  <h4>
                    <a href="#feature" className="title-head">{feature.title}</a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
