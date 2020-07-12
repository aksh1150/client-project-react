import React, { Component } from "react";
import "./App.css";
import MenuBar from "./controller/menu";
import Home from "./view/home";
import Service from "./view/services";
import About from "./view/about";
import Contact from "./view/contact";
import Logo from "./controller/logo";
class App extends Component {
  render() {
    return (
      <div>
        <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
          <MenuBar />
          <Logo mobileLogo />
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block">
          <Logo />
          <MenuBar deskTopVersion />
        </div>
        <Home />
        <Service />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
