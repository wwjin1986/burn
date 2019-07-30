import React, { Component } from "react";
import fetchPostAPI from "./commons/fetchPostAPI";
import fetchGetAPI from "./commons/fetchGetAPI";
import config from "./config.json";
import fetchDeleteAPI from "./commons/fetchDeleteAPI";
import todayDate from "./commons/Time";
class Today extends Component {
  state = {
    todayTotal: 0,
    records: [],
    showGoalForm: "collapse",
    showWeightForm: "collapse",
    newDailyGoal: 0,
    unit: "kg",
    weightInKG: 55,
    dailyGoal: 400,
    profile: { weight: 55, height: 160, age: 33, dailyGoal: 400 }
  };
  date = todayDate("yyyy-mm-dd");

  async componentDidMount() {
    this.setState({
      todayTotal: await fetchGetAPI(
        config.apiEndPoint + "/calories/" + this.date + "/total"
      )
    });

    this.setState({
      records: await fetchGetAPI(config.apiEndPoint + "/calories/" + this.date)
    });

    //update the profile by fetching profile
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei")
      .then(data =>
        Object.keys(data).length
          ? this.setState({
              profile: data,
              dailyGoal: data.dailyGoal,
              weightInKG: data.weight
            })
          : {}
      )
      .catch(error => {
        throw error;
      });
  }

  handleSelectMeter = event => {
    this.setState({ unit: event.target.name });

    //lb/ft -> kg/cm
    if (event.target.name === "kg")
      this.setState({
        profile: {
          weight: Math.round(this.state.profile.weight * 0.45359237),
          height: Math.round(this.state.profile.height * 30.48 * 10) / 10,
          age: this.state.profile.age,
          dailyGoal: this.state.profile.dailyGoal
        }
      });
    else
      this.setState({
        profile: {
          weight: Math.round(this.state.profile.weight * 2.20462262185),
          height: Math.round(this.state.profile.height * 0.0328084 * 100) / 100,
          age: this.state.profile.age,
          dailyGoal: this.state.profile.dailyGoal
        }
      });
  };

  handleCancel = () => {
    this.setState({ showGoalForm: "collapse", showWeightForm: "collapse" });
  };

  handleEditGoal = () => {
    this.setState({
      showGoalForm:
        this.state.showGoalForm === "collapse" ? "collapse show" : "collapse"
    });
  };
  handleChangeDailyGoal = event => {
    this.setState({ newDailyGoal: event.target.value });
  };
  handleSave = async () => {
    //save new daily goal
    let newDailyGoal = this.state.newDailyGoal;
    await fetchPostAPI(
      config.apiEndPoint + "/profiles/Weiwei/" + newDailyGoal,
      "POST",
      {}
    );
    this.setState({ dailyGoal: this.state.newDailyGoal });
  };

  handleDelete = async event => {
    console.log(event.currentTarget.name);

    await fetchDeleteAPI(
      config.apiEndPoint +
        "/profiles/Weiwei/calories/" +
        event.currentTarget.name
    );
    this.setState({
      records: await fetchGetAPI(config.apiEndPoint + "/calories/" + this.date),
      todayTotal: await fetchGetAPI(
        config.apiEndPoint + "/calories/" + this.date + "/total"
      )
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          id="centered"
          className="card  mb-3 mt-5"
          style={{
            borderColor: "#9cd1f8",
            width: "40%"
          }}
        >
          <div
            className="card-header bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div style={{ display: "inline-block" }}>
              <h5>Weiwei's Profile</h5>
            </div>
            <div
              className="btn-group btn-group-toggle btn-sm"
              data-toggle="button"
              style={{ display: "inline-block" }}
            >
              <label
                className={
                  this.state.unit === "kg"
                    ? "btn btn-sm btn-outline-secondary active"
                    : "btn btn-sm btn-outline-secondary"
                }
              >
                <input
                  type="radio"
                  name="kg"
                  checked={this.state.unit === "kg"}
                  onChange={this.handleSelectMeter}
                />
                cm/kg
              </label>
              <label
                className={
                  this.state.unit === "lb"
                    ? "btn btn-sm btn-outline-secondary active"
                    : "btn btn-sm btn-outline-secondary"
                }
              >
                <input
                  type="radio"
                  name="lb"
                  checked={this.state.unit === "lb"}
                  onChange={this.handleSelectMeter}
                />
                ft/lb
              </label>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-3 ml-5">Weight</div>
              <div className="col-7">
                {this.state.profile.weight}
                {this.state.unit === "kg" ? " kg" : " lb"}
              </div>
            </div>
            <div className="row">
              <div className="col-3 ml-5">Height</div>
              <div className="col-7">
                {this.state.profile.height}
                {this.state.unit === "kg" ? "cm" : "ft"}
              </div>
            </div>
            <div className="row">
              <div className="col-3 ml-5">Age</div>
              <div className="col-7">{this.state.profile.age} y</div>
            </div>
          </div>

          <div
            className="card-footer bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div>
              {" "}
              <span>
                Your weight goal is 60 kg. You need to{" "}
                {this.state.weightInKG >= 60 ? "lose " : "gain "}
                {Math.abs(this.state.weightInKG - 60)} kg
              </span>
            </div>
          </div>
        </div>
        <div
          id="centered"
          className="card  mb-3  mt-5"
          style={{
            borderColor: "#9cd1f8",
            width: "40%"
          }}
        >
          <div
            className="card-header bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <h5>Today's Workout</h5>
            {this.date}
          </div>
          <div className="card-body ">
            <span>{this.state.todayTotal} Caloreis Burned</span>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{
                  width:
                    this.state.todayTotal / this.state.dailyGoal >= 1
                      ? "100%"
                      : Math.round(
                          (this.state.todayTotal / this.state.dailyGoal) * 100
                        ) + "%"
                }}
                aria-valuenow={this.state.todayTotal}
                aria-valuemin="0"
                aria-valuemax={this.state.dailyGoal}
              >
                {this.state.todayTotal / this.state.dailyGoal >= 1
                  ? "100%"
                  : Math.round(
                      (this.state.todayTotal / this.state.dailyGoal) * 100
                    ) + " %"}
              </div>
            </div>
          </div>
          <div
            className="card-footer bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div style={{ display: "inline-block" }}>
              Your goal to burn daliy is {this.state.dailyGoal} Calories
              <i //button to edit the daily dailyGoal
                className="fa fa-pencil-square-o ml-2"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
                onClick={this.handleEditGoal}
              />
              <div //div to show the form of editing dailyGoal
                className={this.state.showGoalForm}
                id="collapseExample"
              >
                <div className="card card-body">
                  <div className="row">
                    <div className="col-8">
                      <input
                        type="number"
                        min="0"
                        placeholder="Enter your daily goal"
                        step="2.5"
                        className="mb-2"
                        onChange={this.handleChangeDailyGoal}
                      />
                    </div>
                    <div className="col-4">Calories </div>
                  </div>
                  <div className="row ">
                    <button
                      className="btn btn-sm ml-3 btn-outline-secondary"
                      onClick={this.handleSave}
                    >
                      Save
                    </button>
                    <button
                      onClick={this.handleCancel}
                      className="btn btn-sm ml-3 btn-outline-secondary"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="centered"
          name="show records"
          className="mb-3  mt-5"
          style={{
            borderColor: "#9cd1f8",
            width: "40%"
          }}
        >
          <table className="table  table-hover">
            <thead>
              <tr>
                <th colSpan="5">Today's exercise records</th>
              </tr>
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

export default Today;
