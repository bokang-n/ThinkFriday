// CoreFeatures.jsx
import React from "react";
import "../css/CoreFeatures.css"; // Import CSS file for styling

const CoreFeatures = () => {
  return (
    <section className="core" id="core">
      <h1 className="heading">Outstanding Core Features of The Product</h1>

      <div className="row">
        <div className="image">
          <img src="images/core-img.png" alt="Core Features" />
        </div>

        <div className="box-container">
          <div className="box">
            <h3>
              <i className="fas fa-user"></i> B-BBEE Advisory & Consulting
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat exercitationem quasi natus aliquid consequuntur, consectetur rerum molestiae optio doloremque.
            </p>
          </div>

          <div className="box">
            <h3>
              <i className="fas fa-shield-alt"></i> Human Resource (HR) Consulting
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat exercitationem quasi natus aliquid consequuntur, consectetur rerum molestiae optio doloremque.
            </p>
          </div>

          <div className="box">
            <h3>
              <i className="fas fa-sync-alt"></i> Skills Development
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat exercitationem quasi natus aliquid consequuntur, consectetur rerum molestiae optio doloremque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
