import React, { Component } from "react";
import "./App.css";
import MenuBar from "./components/menubar/menubar";
import Home from "./components/pages/home";
import Hypnotherapy from "./components/pages/hypnotherapy";
import EnergyHealing from "./components/pages/energyhealing";
import Resources from "./components/pages/resources";
import AboutMe from "./components/pages/aboutme";
import Faq from "./components/pages/faq";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollIntoView from "./components/menubar/ScrollIntoView";
import Logo from "./components/logo";
import Footer from "./components/footer";
import NotFound from "./components/pages/not-found";
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuBar />
          <Logo />
          <div className="comonents">
            <ScrollIntoView>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/hypnotherapy" component={Hypnotherapy} />
                <Route path="/energyhealing" component={EnergyHealing} />
                <Route path="/faq" component={Faq} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/resources" component={Resources} />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
              </Switch>
            </ScrollIntoView>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
