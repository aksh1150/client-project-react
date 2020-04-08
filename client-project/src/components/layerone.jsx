import React from "react";
const LayerOne = ({
  children,
  homeLayerOne,
  hypnoLayerOne,
  energyLayerOne,
  faqLaterOne,
  aboutLayerOne,
  resourceLayerOne,
}) => {
  return (
    <div
      className={`${homeLayerOne ? "homeLayerOne" : ""} ${
        hypnoLayerOne ? "hypnoLayerOne" : ""
      } ${energyLayerOne ? "energyLayerOne" : ""} ${
        faqLaterOne ? "faqLayerOne" : ""
      } ${aboutLayerOne ? "aboutLayerOne" : ""} ${
        resourceLayerOne ? "resourceLayerOne" : ""
      } col layerOne`}
    >
      {children}
    </div>
  );
};

export default LayerOne;
