import React, { Component } from "react";
class Health extends Component {
  state = {
    height: 160,
    weight: 55,
    age: 33
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
          <h5>Weiwei's Personal Profile</h5>
        </div>
        <div className="card-body ">
          <div className="row mr-5">
            <label>
              Weight: <input type="number" />
            </label>
            <label>
              Height: <input type="number" />
            </label>
            <label>
              Age: <input type="number" />
            </label>
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
