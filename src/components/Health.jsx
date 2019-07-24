import React, { Component } from "react";
import fetchPostAPI from "./commons/fetchPostAPI";
import fetchGetAPI from "./commons/fetchGetAPI";
import config from "./config.json";
import fetchDeleteAPI from "./commons/fetchDeleteAPI";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  ReferenceLine
} from "recharts";

class Health extends Component {
  state = {
    height: 160,
    heightincm: 160,
    weight: 55,
    age: 33,
    unit: "kg",
    show: "collapse",
    newWeight: 0,
    showAlert: "alert alert-success alert-dismissible fade",
    showInfo: ""
  };

  async componentDidMount() {
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ weight: data.weight })
    );
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ height: data.height, heightincm: data.height })
    );
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ age: data.age })
    );
  }

  handleSelectMeter = event => {
    this.setState({ unit: event.target.name });

    //lb/ft -> kg/cm
    if (event.target.name === "kg")
      this.setState({
        weight: Math.round(this.state.weight * 0.45359237),
        height: Math.round(this.state.height * 30.48 * 10) / 10
      });
    else
      this.setState({
        weight: Math.round(this.state.weight * 2.20462262185),
        height: Math.round(this.state.height * 0.0328084 * 100) / 100
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.state.showAlert} role="alert">
          {this.state.showInfo}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              this.setState({
                showAlert: "alert alert-success alert-dismissible fade"
              })
            }
          >
            <span aria-hidden="true">&times;</span>
          </button>{" "}
        </div>
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
                {this.state.weight}
                {this.state.unit === "kg" ? " kg" : " lb"}
              </div>
            </div>
            <div className="row">
              <div className="col-3 ml-5">Height</div>
              <div className="col-7">
                {this.state.height}
                {this.state.unit === "kg" ? "cm" : "ft"}
              </div>
            </div>
            <div className="row">
              <div className="col-3 ml-5">Age</div>
              <div className="col-7">{this.state.age}</div>
            </div>
          </div>

          <div
            className="card-footer bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div style={{ display: "inline-block" }} />
            <div style={{ display: "inline-block" }}>
              <button
                type="button"
                className="btn btn-sm ml-2"
                style={{ backgroundColor: "#9cd1f8", color: "white" }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Health;
