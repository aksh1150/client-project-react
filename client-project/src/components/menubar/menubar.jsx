import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

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
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={this.addShadow}
          className={this.addBtnShadow()}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="d-inline p-2 home" to="/">
              HOME
            </NavLink>
            <NavLink className="d-inline p-2" to="/hypnotherapy">
              HYPNOTHERAPY
            </NavLink>
            <NavLink className="d-inline p-2" to="/energyhealing">
              ENERGY HEALING
            </NavLink>
            <NavLink className="d-inline p-2" to="/faq">
              FAQ
            </NavLink>
            <NavLink className="d-inline p-2" to="/aboutme">
              ABOUT ME
            </NavLink>
            <NavLink className="d-inline p-2" to="/resources">
              RESOURCES
            </NavLink>
            <NavLink className="d-inline p-2" to="/booksession">
              BOOK A SESSION
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;
