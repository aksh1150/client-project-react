import React from "react";

const Logo = ({ mobileLogo }) => {
  return (
    <div className={mobileLogo ? "col mb-4" : "col-md-2 p-2 fixed-top logo"}>
      <img
        src={require("../images/logo.png")}
        alt="logo"
        className="d-block p-2"
        width="200"
      />
    </div>
  );
};

export default Logo;
