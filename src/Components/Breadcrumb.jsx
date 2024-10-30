// Breadcrumb.jsx
import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about py-5">
          <div className="container py-lg-5 py-md-3">
            <h2 className="title">Blog</h2>
          </div>
        </div>
      </section>
      <section className="w3l-breadcrumb">
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li><a href="#url">Home</a></li>
            <li className="active">
              <span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> Blog
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
