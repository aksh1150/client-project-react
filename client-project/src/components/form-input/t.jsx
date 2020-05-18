import React, { Component } from "react";
import FormInput from "./form-input";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      phone: "",
      message: "",
      referance: "",
      other: "",
      homebtn: this.props.homebtn,
      aboutbtn: this.props.aboutbtn,
      emailstatus: "",
      isLoading: false,
      selectClass: false,
      errors: {},
    };
  }
  validate = () => {
    const errors = {};
    const { userName, email, phone, message, referance } = this.state;
    if (userName.trim() === "") errors.userName = "Name is required.";

    if (email.trim() === "") errors.email = "Email is required.";
    if (referance.trim() === "") errors.referance = "Refferal is required.";

    if (phone.trim() === "") errors.phone = "Phone number is required.";
    if (message.trim() === "") errors.message = "Sort message is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    // console.log(errors);
    if (errors) return;

    // console.log(this.state);
    // create a new XMLHTTPREQUEST
    const { userName, email, phone, message, referance, other } = this.state;

    this.setState({ isLoading: true });
    let commas = ": ";
    const refrences =
      referance === "Others" ? referance + commas + other : referance;

    var xhr = new XMLHttpRequest();
    // get a callback when server responds
    xhr.addEventListener("load", () => {
      // update the emailstatus with the response
      // console.log(xhr.responseText);
      this.setState({ emailstatus: xhr.responseText, isLoading: false });
    });
    xhr.open(
      "GET",
      "http://tstsrv.onstore.ca/sendemail/index.php?email=" +
        email +
        "&name=" +
        userName +
        "&phone=" +
        phone +
        "&referance=" +
        refrences +
        "&message=" +
        message
    );
    // send the request
    xhr.send();
  };

  // selectChange = (event) => {
  //   const { referance } = this.state;

  //   this.setState({ referance: event.target.value });
  //   console.log(referance);
  //   // if (referance === "Others") return this.setState({ isOther: false });
  //   // return this.setState({ isOther: true });
  // };
  handleChange = (event) => {
    console.log(this.state);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSelectChange = (event) => {
    this.setState({ referance: event.target.value });
    this.setState({ selectClass: !this.state.selectClass });
  };

  btnClass = () => {
    const { aboutbtn, homebtn } = this.state;
    if (aboutbtn === true) return "aboutbtn";
    if (homebtn === true) return "homebtn";
  };
  addClass() {
    return this.state.selectClass === true ? "selectdiv open" : "selectdiv";
  }
  handleClickOutside = () => {
    this.setState({ selectClass: false });
  };
  render() {
    document.addEventListener("keydown", this.handleClickOutside, true);
    document.addEventListener("click", this.handleClickOutside, true);
    document.addEventListener("mouseout", this.handleClickOutside, true);
    const {
      userName,
      email,
      phone,
      message,
      referance,
      emailstatus,
      errors,
      other,
    } = this.state;
    return (
      <div className="col-12 contactForm">
        {emailstatus ? emailstatus : null}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="userName"
            value={userName}
            onChange={this.handleChange}
            placeholder="Your Name"
            aria-label="Your Name"
            error={errors.userName}
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
            aria-label="Email"
            error={errors.email}
          />
          <div className="form-group">
            <PhoneInput
              country={"ae"}
              name="phone"
              value={phone}
              onChange={(phone) => this.setState({ phone })}
              placeholder="Phone"
              aria-label="Phone no"
              enableSearch
              inputProps={{
                name: "phone",
                required: true,
              }}
            />
            {errors.phone && (
              <div className="alert alert-danger">{errors.phone}</div>
            )}
          </div>
          <div className="form-group">
            <div
              onClick={() =>
                this.setState({ selectClass: !this.state.selectClass })
              }
              className={this.addClass()}
            >
              <select
                className="form-control"
                name="referance"
                onChange={this.handleSelectChange}
                aria-label="Refferal"
              >
                <option value="" hidden>
                  How did you hear about the site?
                </option>
                <option value="Google search">Google search</option>
                <option value="Other search engine">Other search engine</option>
                <option value="thefourwinds.com">thefourwinds.com</option>
                <option value="Referral">Referral</option>
                <option value="LinkedIn profile">LinkedIn profile</option>
                <option value="Others">Others</option>
              </select>
              {errors.referance && (
                <div className="alert alert-danger">{errors.referance}</div>
              )}
            </div>
          </div>
          {referance === "Others" ? (
            <FormInput
              type="text"
              name="other"
              value={other}
              onChange={this.handleChange}
              placeholder="Please specify:"
              aria-label="Refferal"
            />
          ) : (
            ""
          )}

          <div className="form-group">
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
              placeholder="Message"
              aria-label="Your Message"
              rows="5"
              className="form-control"
            />
            {errors.message && (
              <div className="alert alert-danger">{errors.message}</div>
            )}
          </div>

          <button
            className={`btn btn-primary mt-4 ${this.btnClass()}`}
            type="submit"
            disabled={this.state.isLoading}
          >
            <span
              className={
                this.state.isLoading ? "spinner-grow spinner-grow-sm" : ""
              }
            />
            {this.state.isLoading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
