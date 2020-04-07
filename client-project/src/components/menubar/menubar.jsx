import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./menubar.css";
// import Logo from "../logo";
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
    return (
      <React.Fragment>
        <nav className="customNavBar">
          <ul className={`nav-links p-4 ${this.addNavSlide()}`}>
            <NavLink className="home" to="/" onClick={this.slideNav} exact>
              HOME
            </NavLink>
            <NavLink to="/hypnotherapy" onClick={this.slideNav} exact>
              HYPNOTHERAPY
            </NavLink>
            <NavLink to="/energyhealing" onClick={this.slideNav} exact>
              ENERGY HEALING
            </NavLink>
            <NavLink to="/faq" onClick={this.slideNav} exact>
              FAQ
            </NavLink>
            <NavLink to="/aboutme" onClick={this.slideNav} exact>
              ABOUT ME
            </NavLink>
            <NavLink to="/resources" onClick={this.slideNav} exact>
              RESOURCES
            </NavLink>
          </ul>
        </nav>
        <div
          className={`burger ml-auto p-1 pt-2 ${this.addBurgerClass()} ${this.addBtnShadow()}`}
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
