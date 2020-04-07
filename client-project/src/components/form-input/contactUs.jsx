import React, { Component } from "react";
import FormInput from "./form-input";

class ContactUs extends Component {
  state = {
    userName: "",
    email: "",
    phone: "",
    message: "",
    homebtn: this.props.homebtn,
    aboutbtn: this.props.aboutbtn,
  };
  handleSubmit = async (event) => {
    event.preventDefault();
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { userName, email, phone, message, homebtn, aboutbtn } = this.state;
    return (
      <div className="col-12 contactForm">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="userName"
            value={userName}
            onChange={this.handleChange}
            placeholder="Your Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />

          <FormInput
            type="number"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            placeholder="Phone"
            required
          />

          <textarea
            type="text"
            name="message"
            value={message}
            onChange={this.handleChange}
            placeholder="Message"
            rows="5"
            className="form-control"
            required
          />
          <button
            className={`btn btn-primary mt-4 ${aboutbtn ? "aboutbtn" : ""} ${
              homebtn ? "homebtn" : ""
            }`}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
