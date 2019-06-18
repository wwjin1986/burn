import React from "react";
import "./App.css";
import NavBar from "./components/commons/NavBar";
import DailyCalories from "./components/DailyCalories";
import Exercise from "./components/Exercise";
import Health from "./components/Health";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <Switch>
          <Route path="/home" component={DailyCalories} />
          <Route path="/profile" component={Health} />
          <Route path="/" component={Exercise} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
