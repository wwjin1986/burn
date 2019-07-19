import React, { Component } from "react";

class Planner extends Component {
  handleClick = day => {
    console.log(day);
  };
  render() {
    return (
      <div name="weekly planner" id="centered" style={{ width: "60%" }}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: "15%" }} scope="col">
                Days
              </th>
              <th scope="col">Plans</th>
            </tr>
          </thead>
          <tbody>
            <tr
              id="sunday"
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Sunday"
              onClick={() => this.handleClick("Sunday")}
            >
              <th scope="row">Sunday</th>

              <td />
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Monday"
              onClick={() => this.handleClick("Monday")}
            >
              <th scope="row">Monday</th>
              <td />
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Tuesday"
              onClick={() => this.handleClick("Tuesday")}
            >
              <th scope="row">Tuesday</th>
              <td />
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Wednesday"
              onClick={() => this.handleClick("Wednesday")}
            >
              <th scope="row">Wednesday</th>
              <td />
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Thursday"
              onClick={() => this.handleClick("Thursday")}
            >
              <th scope="row">Thursday</th>
              <td />
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Friday"
              onClick={() => this.handleClick("Friday")}
            >
              <th scope="row">Friday</th>
              <td />
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Saturday"
              onClick={() => this.handleClick("Saturday")}
            >
              <th scope="row">Saturday</th>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Planner;
