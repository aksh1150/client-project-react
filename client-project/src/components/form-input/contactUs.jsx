import React, { Component } from "react";
import FormInput from "./form-input";
import Select from "./select";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
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
      "https://dubaihypnotherapist.com/sendemail/index.php?email=" +
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
  handleClickOutside = () => {
    this.setState({ selectClass: false });
  };
  onChange(value) {
    console.log("Captcha value:", value);
  }
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
      selectClass,
    } = this.state;
    return (
      <div className="col-12 contactForm">
        {emailstatus ? emailstatus : null}

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-lg-12 col-xl-6">
              <FormInput
                type="text"
                name="userName"
                value={userName}
                onChange={this.handleChange}
                placeholder="Your Name"
                error={errors.userName}
              />

              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
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
            </div>
            <div className="col-lg-12 col-xl-6">
              <Select
                handleSelectChange={this.handleSelectChange}
                errors={errors.referance}
                selectClass={selectClass}
                handleClick={() => this.setState({ selectClass: !selectClass })}
              />
              {referance === "Others" ? (
                <FormInput
                  type="text"
                  name="other"
                  value={other}
                  onChange={this.handleChange}
                  placeholder="Please specify:"
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
                  className="form-control form-txt"
                />
                {errors.message && (
                  <div className="alert alert-danger">{errors.message}</div>
                )}
              </div>
            </div>
            <ReCAPTCHA
              className="col-lg-12"
              sitekey="6LdHqwEVAAAAAEUyEQYDXYiSK6XN-1fJL2kodNf3"
              onChange={this.onChange}
            />
            <div className="form-group col-12 DeskbtnClass">
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUs;
