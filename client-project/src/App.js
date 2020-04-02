import React, { Component } from "react";
import "./App.css";
import MenuBar from "./components/menubar/menubar";
import Home from "./components/pages/home";
import Second from "./components/pages/second";
import Third from "./components/pages/third";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <h2 className="m-3 d-flex justify-content-center">
            <b>This is React JS with API</b>
          </h2>
          <h5 className="m-3 d-flex justify-content-center">
            New project routing pages
          </h5>

          <MenuBar />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/second" component={Second} />
            <Route path="/third" component={Third} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
