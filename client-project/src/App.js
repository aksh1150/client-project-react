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
import HomeDesk from "./components/pages/desktop/home";
import DeskHypnotherapy from "./components/pages/desktop/hypnotherapy";
import Deskenergy from "./components/pages/desktop/energyhealing";
import DeskFaq from "./components/pages/desktop/faq";
import DeskAbout from "./components/pages/desktop/about";
import DeskResources from "./components/pages/desktop/resources";
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="d-block d-sm-block d-md-block d-lg-block d-xl-none">
          <MenuBar />
          <Logo mobileLogo />
          <div className="comonents mx-auto">
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
        <div className="d-none d-sm-none d-md-none d-lg-none d-xl-block">
          <div className="container-fluid desktopWidth">
            <div className="row">
              <Logo />
              <MenuBar deskTopVersion />
              <Switch>
                <Route path="/" component={HomeDesk} exact />
                <Route path="/hypnotherapy" component={DeskHypnotherapy} />
                <Route path="/energyhealing" component={Deskenergy} />
                <Route path="/faq" component={DeskFaq} />
                <Route path="/aboutme" component={DeskAbout} />
                <Route path="/resources" component={DeskResources} />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
