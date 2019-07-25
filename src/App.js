import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/commons/NavBar";
import Exercise from "./components/Exercise";
import Health from "./components/Health";
import Today from "./components/Today";
import { Route, Switch } from "react-router-dom";
import Planner from "./components/Planner";
import Weight from "./components/Weight";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <Switch>
            <Route path="/today" component={Today} />
            <Route path="/addexercise" component={Exercise} />
            <Route path="/addweight" component={Weight} />
            <Route path="/profile" component={Health} />
            <Route path="/planner" component={Planner} />
            <Route path="/" component={Today} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
