import React from "react";

const Logo = () => {
  return (
    <div className="col mb-4">
      <img
        src={require("../images/logo.png")}
        alt="logo"
        className="mx-auto d-block mt-4"
        width="200"
      />
    </div>
  );
};

export default Logo;
