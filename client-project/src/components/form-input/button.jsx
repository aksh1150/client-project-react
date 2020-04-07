import React from "react";

const Button = ({ aboutbtn, homebtn }) => {
  return (
    <button
      className={`btn btn-primary mt-4 ${aboutbtn ? "aboutbtn" : ""} ${
        homebtn ? "homebtn" : ""
      }`}
      type="submit"
    >
      Send
    </button>
  );
};
export default Button;
