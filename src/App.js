import React from "react";
import "./App.css";
import NavBar from "./components/commons/NavBar";
import DailyCalories from "./components/DailyCalories";
import Exercise from "./components/Exercise";
import Health from "./components/Health";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <DailyCalories />
      <Exercise />
      <Health />
    </React.Fragment>
  );
}

export default App;
