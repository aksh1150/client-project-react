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
    emailstatus: "",
  };

  handleSubmit = async (event) => {
    // console.log(this.state);
    // create a new XMLHTTPREQUEST
    const { userName, email, phone, message } = this.state;

    var xhr = new XMLHttpRequest();
    // get a callback when server responds
    xhr.addEventListener("load", () => {
      // update the emailstatus with the response
      // console.log(xhr.responseText);
      this.setState({ emailstatus: xhr.responseText });
    });
    xhr.open(
      "GET",
      "http://tstsrv.onstore.ca/sendemail/index.php?email=" +
        email +
        "&name=" +
        userName +
        "&phone=" +
        phone +
        "&message=" +
        message
    );
    // send the request
    xhr.send();
    event.preventDefault();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  btnClass = () => {
    const { aboutbtn, homebtn } = this.state;
    if (aboutbtn === true) return "aboutbtn";
    if (homebtn === true) return "homebtn";
  };
  render() {
    const { userName, email, phone, message, emailstatus } = this.state;
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
            className={`btn btn-primary mt-4 ${this.btnClass()}`}
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
