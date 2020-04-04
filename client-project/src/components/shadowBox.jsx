import React from "react";
const ShadowBox = ({ children, homeBoxClass, hypnoBox, energyBox }) => {
  return (
    <div
      className={`${homeBoxClass ? "homeBoxClass" : ""} ${
        hypnoBox ? "hypnoBox" : ""
      } ${energyBox ? "energyBox" : ""} shadowbox mx-auto d-block`}
    >
      {children}
    </div>
  );
};

export default ShadowBox;
