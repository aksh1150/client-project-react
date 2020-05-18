import React from "react";

const FormInput = ({ handleChange, error, placeholder, ...otherProps }) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={placeholder}
        {...otherProps}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default FormInput;
