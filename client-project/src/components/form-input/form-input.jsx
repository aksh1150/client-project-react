import React from "react";

const FormInput = ({ handleChange, ...otherProps }) => {
  return (
    <div className="form-group">
      <input className="form-control" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
