import React, { Component } from "react";
class Health extends Component {
  state = {
    height: 160,
    weight: 55,
    age: 33,
    meter: "cm"
  };
  handleSelectMeter = event => {
    this.setState({ meter: event.target.name });
    console.log(this.state.meter);
    if (event.target.name === "cm")
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
          <div style={{ display: "inline-block" }}>
            <h5>Weiwei's Personal Profile</h5>
          </div>
          <div
            className="btn-group btn-group-toggle btn-sm"
            data-toggle="button"
            style={{ display: "inline-block" }}
          >
            <label
              className={
                this.state.meter === "cm"
                  ? "btn btn-sm btn-outline-secondary active"
                  : "btn btn-sm btn-outline-secondary"
              }
            >
              <input
                type="radio"
                name="cm"
                checked={this.state.meter === "cm"}
                onChange={this.handleSelectMeter}
              />
              cm/kg
            </label>
            <label
              className={
                this.state.meter === "ft"
                  ? "btn btn-sm btn-outline-secondary active"
                  : "btn btn-sm btn-outline-secondary"
              }
            >
              <input
                type="radio"
                name="ft"
                checked={this.state.meter === "ft"}
                onChange={this.handleSelectMeter}
              />
              ft/lb
            </label>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-4">Weight</div>
            <div className="col-7">
              {this.state.weight}
              {this.state.meter === "cm" ? "kg" : "lb"}
              <i
                className="fa fa-pencil-square-o ml-2"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">Height</div>
            <div className="col-7">
              {this.state.height}
              {this.state.meter === "cm" ? "cm" : "ft"}
              <i
                className="fa fa-pencil-square-o ml-2"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">Age</div>
            <div className="col-7">
              {this.state.age}
              <i
                className="fa fa-pencil-square-o ml-2"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        <div
          className="card-footer bg-transparent"
          style={{ borderColor: "#9cd1f8" }}
        >
          <div style={{ display: "inline-block" }} />
          <div style={{ display: "inline-block" }}>
            <button
              className="btn btn-sm ml-2"
              style={{ backgroundColor: "#9cd1f8", color: "white" }}
            >
              Clear
            </button>
            <button
              className="btn btn-sm ml-2"
              style={{ backgroundColor: "#9cd1f8", color: "white" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Health;
