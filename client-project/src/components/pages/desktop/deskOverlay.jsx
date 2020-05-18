import React from "react";
const DeskOverlay = ({
  children,
  homeOverlayClass,
  hypnoOverlay,
  energyOverlay,
}) => {
  return (
    <div
      className={`${homeOverlayClass ? "homeOverlayClass" : ""} ${
        hypnoOverlay ? "hypnoOverlay" : ""
      } ${energyOverlay ? "energyOverlay" : ""} overlaybox col-md-4`}
    >
      {children}
    </div>
  );
};

export default DeskOverlay;
