import React, { Component } from "react";
class DailyCalories extends Component {
  render() {
    const tempDate = new Date();
    const date =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    // " " +
    // tempDate.getHours() +
    // ":" +
    // tempDate.getMinutes() +
    // ":" +
    // tempDate.getSeconds();
    const currDate = date;

    return (
      <div className="Row">
        <div
          className="card  mb-3 ml-5 mt-5"
          style={{
            display: "inline-block",
            borderColor: "#9cd1f8"
          }}
        >
          <div className="card-header bg-transparent">
            <h5>{currDate}</h5>
          </div>
          <div className="card-body ">
            <span
              className="card-title mr-2"
              style={{ display: "inline-block" }}
            >
              Walking 30 minutes : 100 Calorie
            </span>
            <a
              className="btn btn-outline-secondary btn-sm mb-2"
              href="#"
              style={{ display: "inline-block" }}
            >
              <i className="fa fa-trash-o fa-lg" />
            </a>
          </div>

          <div
            className="card-footer bg-transparent"
            style={{ borderColor: "#9cd1f8" }}
          >
            <div style={{ display: "inline-block" }} />
            <div style={{ display: "inline-block" }}>
              Last updated : 2019-6-12 14:35
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyCalories;
