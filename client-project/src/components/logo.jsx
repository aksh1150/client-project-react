import React from "react";
import { NavLink } from "react-router-dom";
const Logo = ({ mobileLogo }) => {
  return (
    <div className={mobileLogo ? "col mb-4" : "col-md-2"}>
      <NavLink to="/" exact>
        <img
          src={require("../images/logo.png")}
          alt="logo"
          className={`${mobileLogo ? "mx-auto" : ""} d-block mt-4`}
          width="200"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
