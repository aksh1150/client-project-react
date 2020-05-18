import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MENUBAR_DATA from "../../data/menubar";
import "./menubar.css";
// import Logo from "../logo";
class MenuBar extends Component {
  state = {
    togglebtn: false,
    navSlide: false,
    getMenu: MENUBAR_DATA,
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
        <nav className={deskTopVersion ? "col-md-10" : "customNavBar"}>
          <div
            className={`${
              deskTopVersion ? "nav-links-desktop" : "nav-links"
            } p-4 ${this.addNavSlide()}`}
          >
            {this.state.getMenu.map((menu) => (
              <NavLink
                key={menu.id}
                to={menu.link}
                onClick={this.slideNav}
                exact
              >
                {menu.title}
              </NavLink>
            ))}
          </div>
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
