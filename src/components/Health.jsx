import React, { Component } from "react";
class Health extends Component {
  state = {
    height: 160,
    weight: 55,
    age: 33,
    meter: "cm",
    show: "collapse"
  };
  handleSelectMeter = event => {
    this.setState({ meter: event.target.name });
    console.log(this.state.meter);

    //ft/lb -> cm/kg
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
  handleEdit = () => {
    //collapse div to add new weight
    this.setState({
      show: this.state.show === "collapse" ? "collapse show" : "collapse"
    });
    console.log("edit");
  };
  handleCancel = () => {
    this.setState({ show: "collapse" });
  };

  render() {
    return (
      <div
        className="card  mb-3 ml-5 mt-5"
        style={{
          display: "inline-block",
          borderColor: "#9cd1f8",
          width: "500px",
          overflow: "auto"
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
            <div className="col-3 ml-5">Weight</div>
            <div className="col-7">
              {this.state.weight}
              {this.state.meter === "cm" ? " kg" : " lb"}

              <i
                className="fa fa-pencil-square-o ml-2"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
                onClick={this.handleEdit}
              />

              <div className={this.state.show} id="collapseExample">
                <div className="card card-body">
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="number"
                        placeholder="Enter new weight here"
                        className="mb-2"
                      />
                    </div>
                    <div className="col-3">
                      <h7>{this.state.meter === "cm" ? " kg" : " lb"}</h7>
                    </div>
                  </div>
                  <div className="row ">
                    <button className="btn btn-sm ml-3 btn-outline-secondary">
                      Add new weight
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
          <div className="row">
            <div className="col-3 ml-5">Height</div>
            <div className="col-7">
              {this.state.height}
              {this.state.meter === "cm" ? " cm" : " ft"}
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
    );
  }
}

export default Health;
