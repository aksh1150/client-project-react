import React, { Component } from "react";
import "./App.css";
import MenuBar from "./components/menubar/menubar";
import Home from "./components/pages/home";
import Hypnotherapy from "./components/pages/hypnotherapy";
import EnergyHealing from "./components/pages/energyhealing";
import Resources from "./components/pages/resources";
import AboutMe from "./components/pages/aboutme";
import Faq from "./components/pages/faq";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logo from "./components/logo";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuBar />
          <Logo />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/hypnotherapy" component={Hypnotherapy} />
            <Route path="/energyhealing" component={EnergyHealing} />
            <Route path="/faq" component={Faq} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/resources" component={Resources} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
