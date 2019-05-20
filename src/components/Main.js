import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";

export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Main;
