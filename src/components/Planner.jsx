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
              <th style={{ width: "55%" }} scope="col">
                Plans
              </th>
              <th scope="col">Total duration</th>
              <th scope="col">Total Calories</th>
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
              <td>HIIT 30 minutes</td>
              <td>30</td>
              <td>180</td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Monday"
              onClick={() => this.handleClick("Monday")}
            >
              <th scope="row">Monday</th>
              <td>Cardio 30 minutes</td>
              <td>30</td>
              <td>100</td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Tuesday"
              onClick={() => this.handleClick("Tuesday")}
            >
              <th scope="row">Tuesday</th>
              <td>Abs 15 minutes, Arms 15 minutes</td>
              <td>30</td>
              <td>60</td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Wednesday"
              onClick={() => this.handleClick("Wednesday")}
            >
              <th scope="row">Wednesday</th>
              <td>Cardio 30 minutes</td>
              <td>30</td>
              <td>100</td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Thursday"
              onClick={() => this.handleClick("Thursday")}
            >
              <th scope="row">Thursday</th>
              <td>Running 30 minutes</td>
              <td>30</td>
              <td>150</td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Friday"
              onClick={() => this.handleClick("Friday")}
            >
              <th scope="row">Friday</th>
              <td>Legs 20 minutes, Elliptical 15 minutes</td>
              <td>45</td>
              <td>100</td>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="top"
              title="Click to edit plans for Saturday"
              onClick={() => this.handleClick("Saturday")}
            >
              <th scope="row">Saturday</th>
              <td>Yoga 30 minutes</td>
              <td>30</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Planner;
