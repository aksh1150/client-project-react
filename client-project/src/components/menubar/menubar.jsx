import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import Logo from "../logo";
class MenuBar extends Component {
  state = {
    togglebtn: false
  };
  addShadow = () => {
    this.setState({ togglebtn: !this.state.togglebtn });
  };
  addBtnShadow() {
    return !this.state.togglebtn ? "box-shadow" : "";
  }
  render() {
    return (
      <Navbar collapseOnSelect className="bg-primary-color" expand="lg">
        {/* <Navbar.Brand href="#home" className="d-none d-lg-block">
          <Logo />
    </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={this.addShadow}
          className={this.addBtnShadow()}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="d-inline p-2 home" to="/" exact>
              HOME
            </NavLink>
            <NavLink className="d-inline p-2" to="/hypnotherapy" exact>
              HYPNOTHERAPY
            </NavLink>
            <NavLink className="d-inline p-2" to="/energyhealing" exact>
              ENERGY HEALING
            </NavLink>
            <NavLink className="d-inline p-2" to="/faq" exact>
              FAQ
            </NavLink>
            <NavLink className="d-inline p-2" to="/aboutme" exact>
              ABOUT ME
            </NavLink>
            <NavLink className="d-inline p-2" to="/resources" exact>
              RESOURCES
            </NavLink>
            <NavLink className="d-inline p-2" to="/booksession" exact>
              BOOK A SESSION
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;
