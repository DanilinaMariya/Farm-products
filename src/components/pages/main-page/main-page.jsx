import React from "react";
import About from "/src/components/blocks/about/about";
import FeaturesList from "/src/components/blocks/feature-list/feature-list";

function MainPage({ features }) {
  return (
    <>
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
