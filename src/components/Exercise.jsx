import React, { Component } from "react";
import { SelectList } from "react-widgets";
import fetchPostAPI from "./commons/fetchPostAPI";
import fetchGetAPI from "./commons/fetchGetAPI";
import config from "./config.json";
import fetchDeleteAPI from "./commons/fetchDeleteAPI";
class Exercise extends Component {
  state = {
    exercise: "run",
    calorie: 10,
    value: "running",
    time: "minutes",
    duration: 0
  };
  async componentDidMount() {
    console.log(this.state.exercise);
  }
  fetchCalorie = async query => {
    await fetch("https://trackapi.nutritionix.com/v2/natural/exercise", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "x-app-key": "d1f7ab9e52b72ffdcace031cd9fb3e75",
        "x-app-id": "04ca317f"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        query: query,
        gender: "female",
        weight_kg: 50,
        height_cm: 160,
        age: 33
      }) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.exercises[0]);

        this.setState({ calorie: data.exercises[0].nf_calories });
      }); // parses JSON response into native Javascript objects
  };
  handleSelectExercise(value) {
    this.setState({ value: value });
    if (this.state.duration > 0) {
      let duration = this.state.duration;
      if (this.state.time === "hours") {
        duration = 60 * duration;
      }
      let query = value + " " + duration + " " + "minutes";
      this.fetchCalorie(query);
    }
    //call back function to get the updated value for console
  }
  handleSelectTime = event => {
    this.setState({ time: event.target.name });
    if (this.state.duration > 0) {
      let duration = this.state.duration;
      if (event.target.name === "hours") {
        duration = 60 * duration;
      }

      let query = this.state.value + " " + duration + " " + "minutes";
      this.fetchCalorie(query);
    }
  };

  handleTimeChange = async event => {
    this.setState({ duration: event.target.value });
    let duration = event.target.value;
    if (this.state.time === "hours") {
      duration = 60 * event.target.value;
    }
    let query = this.state.value + " " + duration + " " + "minutes";
    this.fetchCalorie(query);
  };

  handleSubmit = async () => {
    let time = new Date();
    let workout = this.state.value;
    let calorieBurned = this.state.calorie;
    let body = JSON.stringify({
      time: time.toLocaleString(),
      calorieBurned: calorieBurned,
      workout: workout
    });
    await fetchPostAPI(config.apiEndPoint + "/calorie/", "POST", body);
  };
  render() {
    //let { DropdownList } = ReactWidgets;

    const colors = [
      "running",
      "walking",
      "hiit",
      "cardio",
      "yoga",
      "elliptial"
    ];
    return (
      <React.Fragment>
        <div
          className="card  mb-3 ml-5 mt-5"
          style={{
            display: "inline-block",
            borderColor: "#9cd1f8"
          }}
        >
          <div
            className="card-header bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <h5>Add new exercise</h5>
          </div>
          <div className="card-body ">
            <div>
              <label>
                <span>Exercise</span>
                <SelectList
                  data={colors}
                  defaultValue={"running"}
                  onChange={value => this.handleSelectExercise(value)}
                />
              </label>
            </div>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                placeholder="Time"
                aria-label="Time"
                aria-describedby="button-addon4"
                onChange={this.handleTimeChange}
              />

              <div className="btn-group btn-group-toggle" data-toggle="button">
                <label
                  className={
                    this.state.time === "minutes"
                      ? "btn btn-outline-secondary active"
                      : "btn btn-outline-secondary"
                  }
                >
                  <input
                    type="radio"
                    name="minutes"
                    checked={this.state.time === "minutes"}
                    onChange={this.handleSelectTime}
                  />
                  minutes
                </label>
                <label
                  className={
                    this.state.time === "hours"
                      ? "btn btn-outline-secondary active"
                      : "btn btn-outline-secondary"
                  }
                >
                  <input
                    type="radio"
                    name="hours"
                    checked={this.state.time === "hours"}
                    onChange={this.handleSelectTime}
                  />
                  hours
                </label>
              </div>
            </div>

            <div className="mt-2">
              {this.state.duration > 0 && (
                <span>
                  I did {this.state.duration} {this.state.time}{" "}
                  {this.state.value}. <br />
                  Total calories estimated: {this.state.calorie} Calories.
                </span>
              )}
            </div>
          </div>
          <div
            className="card-footer bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div style={{ display: "inline-block" }}>
              <button
                type="button"
                className="btn btn-sm ml-2"
                style={{ backgroundColor: "#9cd1f8", color: "white" }}
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Exercise;
