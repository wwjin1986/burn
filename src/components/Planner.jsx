import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Planner extends Component {
  handleClick = () => {
    toast(
      "Clicking to edit exercise plans is under construction. Thanks for patient."
    );
  };
  render() {
    return (
      <React.Fragment>
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
                onClick={this.handleClick}
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
                onClick={this.handleClick}
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
                onClick={this.handleClick}
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
                onClick={this.handleClick}
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
                onClick={this.handleClick}
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
                onClick={this.handleClick}
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
                onClick={this.handleClick}
              >
                <th scope="row">Saturday</th>
                <td>Yoga 30 minutes</td>
                <td>30</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Planner;
