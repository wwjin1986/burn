import React, { Component } from "react";
import { SelectList } from "react-widgets";
import fetchPostAPI from "./commons/fetchPostAPI";
import fetchGetAPI from "./commons/fetchGetAPI";
import config from "./config.json";
import fetchDeleteAPI from "./commons/fetchDeleteAPI";
import todayDate from "./commons/Time";
class Exercise extends Component {
  state = {
    calorie: 10,
    workout: "running",
    time: "minutes",
    duration: 0,
    todayTotal: 0,
    records: [],
    dailyGoal: 300,
    show: "collapse",
    newDailyGoal: 0
  };
  date = todayDate("yyyy-mm-dd");

  async componentDidMount() {
    this.setState({
      todayTotal: await fetchGetAPI(
        config.apiEndPoint + "/calories/" + this.date + "/total"
      )
    });
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ dailyGoal: data.dailyGoal })
    );
    this.setState({
      records: await fetchGetAPI(config.apiEndPoint + "/calories/" + this.date)
    });
  }
  fetchCalorie = async query => {
    //fetch calories burned based on profile and workout info
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
        this.setState({ calorie: Math.round(data.exercises[0].nf_calories) });
      }); // parses JSON response into native Javascript objects
  };
  handleSelectExercise(workout) {
    this.setState({ workout: workout });
    if (this.state.duration > 0) {
      let duration = this.state.duration;
      if (this.state.time === "hours") {
        duration = 60 * duration;
      }
      let query = workout + " " + duration + " " + "minutes";
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

      let query = this.state.workout + " " + duration + " " + "minutes";
      this.fetchCalorie(query);
    }
  };

  handleTimeChange = async event => {
    this.setState({ duration: event.target.value });
    let duration = event.target.value;
    if (this.state.time === "hours") {
      duration = 60 * event.target.value;
    }
    let query = this.state.workout + " " + duration + " " + "minutes";
    this.fetchCalorie(query);
  };

  handleSubmit = async () => {
    let time = new Date();
    let workout = this.state.workout;
    let calorieBurned = this.state.calorie;
    let duration = this.state.duration;
    if (this.state.time === "hours") duration = duration * 60;
    let body = JSON.stringify({
      time: time.toLocaleString(),
      calorieBurned: calorieBurned,
      workout: workout,
      date: this.date,
      duration: duration
    });
    await fetchPostAPI(config.apiEndPoint + "/calorie/", "POST", body);
    this.setState({
      todayTotal: await fetchGetAPI(
        config.apiEndPoint + "/calories/" + this.date + "/total"
      ),
      records: await fetchGetAPI(config.apiEndPoint + "/calories/" + this.date)
    });
  };

  render() {
    const colors = [
      "running",
      "walking",
      "hiit",
      "cardio",
      "yoga",
      "elliptial",
      "weight"
    ];
    return (
      <React.Fragment>
        <div
          className="card  mb-3 ml-5 mt-5"
          style={{
            borderColor: "#9cd1f8",
            width: "40%"
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
                  {this.state.workout}. <br />
                  Total calories estimated: {Math.round(
                    this.state.calorie
                  )}{" "}
                  Calories.
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

        <div
          name="show records"
          id="left"
          style={{
            borderColor: "#9cd1f8"
          }}
        >
          <table className="table  table-hover">
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Workout</th>
                <th scope="col">Duration/minutes</th>
                <th scope="col">Calories</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.records.map(record => (
                <tr key={record.id}>
                  <td>{record.time}</td>
                  <td>{record.workout}</td>
                  <td>{record.duration}</td>
                  <td>{record.calorieBurned}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      name={record.id}
                      onClick={this.handleDelete}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default Exercise;
