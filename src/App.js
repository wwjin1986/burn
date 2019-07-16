import React from "react";
import "./App.css";
import NavBar from "./components/commons/NavBar";
import DailyCalories from "./components/DailyCalories";
import Exercise from "./components/Exercise";
import Health from "./components/Health";
import Today from "./components/Today";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <Switch>
          <Route path="/today" component={Today} />
          <Route path="/addexercise" component={Exercise} />
          <Route path="/addweight" component={Health} />

          <Route path="/profile" component={Health} />
          <Route path="/" component={Today} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
