import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/commons/NavBar";
import DailyCalories from "./components/DailyCalories";
import Exercise from "./components/Exercise";
import Health from "./components/Health";
import Today from "./components/Today";
import { Route, Switch } from "react-router-dom";
import config from "./components/config.json";
import Planner from "./components/Planner";
import fetchDeleteAPI from "./components/commons/fetchDeleteAPI";
import fetchGetAPI from "./components/commons/fetchGetAPI";
import fetchPostAPI from "./components/commons/fetchPostAPI";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <Switch>
            <Route path="/today" component={Today} />
            <Route path="/addexercise" component={Exercise} />
            <Route path="/addweight" component={Health} />

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
