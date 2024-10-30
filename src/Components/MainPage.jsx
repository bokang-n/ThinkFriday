// MainPage.jsx
import React from "react";
import Breadcrumb from "./Breadcrumb";
import BlogSection from "./BlogSection";
import FeatureGrid from "./FeatureGrid";

const MainPage = () => {
  return (
    <div>
      <Breadcrumb />
      <BlogSection />
      <FeatureGrid />
    </div>
  );
};

export default MainPage;
