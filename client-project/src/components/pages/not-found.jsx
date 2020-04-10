import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="c">
        <div className="_404">404</div>
        <hr />
        <div className="_1">THE PAGE</div>
        <div className="_2">WAS NOT FOUND</div>
        <Link className="btn-not-found" to="/">
          BACK TO HOME
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
