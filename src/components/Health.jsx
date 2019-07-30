import React, { Component } from "react";
import fetchGetAPI from "./commons/fetchGetAPI";
import config from "./config.json";

class Health extends Component {
  state = {
    heightincm: 160,
    unit: "kg",
    profile: { weight: 55, height: 160, age: 33, dailyGoal: 400 }
  };

  async componentDidMount() {
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

  render() {
    return (
      <React.Fragment>
        <div
          className="card  mb-3  "
          id="centered"
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
              <div className="col-7">{this.state.profile.age}</div>
            </div>
          </div>

          <div
            className="card-footer bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div style={{ display: "inline-block" }} />
            <div style={{ display: "inline-block" }}>
              {/* <button
                type="button"
                className="btn btn-sm ml-2"
                style={{ backgroundColor: "#9cd1f8", color: "white" }}
              >
                Edit
              </button> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Health;
