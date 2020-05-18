import React, { Component } from "react";
import SELECT_DATA from "../../data/select";
class Select extends Component {
  state = {
    selectData: SELECT_DATA,
  };
  addClass() {
    return this.props.selectClass === true ? "selectdiv open" : "selectdiv";
  }
  render() {
    const { handleSelectChange, errors, handleClick } = this.props;
    return (
      <div className="form-group">
        <div onClick={handleClick} className={this.addClass()}>
          <select
            className="form-control"
            name="referance"
            onChange={handleSelectChange}
            aria-label="Refferal"
          >
            <option value="" hidden>
              How did you hear about the site?
            </option>
            {this.state.selectData.map((select) => (
              <option key={select.value} value={select.value}>
                {select.value}
              </option>
            ))}
          </select>
          {errors && <div className="alert alert-danger">{errors}</div>}
        </div>
      </div>
    );
  }
}

export default Select;
