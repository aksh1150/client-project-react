import React, { Component } from "react";
import { Link } from "react-scroll";
import "./menubar.css";

class MenuBar extends Component {
  state = {
    togglebtn: false,
    navSlide: false,
  };

  addBtnShadow() {
    return !this.state.togglebtn ? "box-shadow" : "";
  }
  slideNav = () => {
    this.setState({
      navSlide: !this.state.navSlide,
      togglebtn: !this.state.togglebtn,
    });
  };
  addNavSlide() {
    return this.state.navSlide ? "nav-active" : "";
  }
  addBurgerClass() {
    return this.state.navSlide ? "toggle" : "";
  }

  render() {
    const { deskTopVersion } = this.props;
    return (
      <React.Fragment>
        <nav
          className={
            deskTopVersion
              ? "navbar navbar-expand-lg fixed-top"
              : "customNavBar"
          }
        >
          <div
            className={`${
              deskTopVersion ? "navbar-nav ml-auto" : "nav-links"
            } p-4 ${this.addNavSlide()}`}
          >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="nav-link font-weight-bold"
              onClick={this.slideNav}
            >
              Home
            </Link>

            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="nav-link font-weight-bold"
              onClick={this.slideNav}
            >
              Services
            </Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="nav-link font-weight-bold"
              onClick={this.slideNav}
            >
              About Us
            </Link>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="nav-link font-weight-bold"
              onClick={this.slideNav}
            >
              Contact Us
            </Link>
          </div>
        </nav>
        <div
          className={`burger ml-auto p-2 pt-2 ${this.addBurgerClass()} ${this.addBtnShadow()}`}
          onClick={this.slideNav}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuBar;
