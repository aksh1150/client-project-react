import React from "react";
const DeskTopLayerOne = ({
  children,
  deskhomeLayerOne,
  deskhypnoLayerOne,
  deskenergyLayerOne,
  deskfaqLaterOne,
  deskaboutLayerOne,
  deskresourceLayerOne,
}) => {
  return (
    <div
      className={`${deskhomeLayerOne ? "deskhomeLayerOne" : ""} ${
        deskhypnoLayerOne ? "deskhypnoLayerOne" : ""
      } ${deskenergyLayerOne ? "deskenergyLayerOne" : ""} ${
        deskfaqLaterOne ? "deskfaqLaterOne" : ""
      } ${deskaboutLayerOne ? "deskaboutLayerOne" : ""} ${
        deskresourceLayerOne ? "deskresourceLayerOne" : ""
      } col-md-12 DesklayerOne`}
    >
      {children}
    </div>
  );
};

export default DeskTopLayerOne;
