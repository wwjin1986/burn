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
  Legend
} from "recharts";

class Health extends Component {
  state = {
    height: 160,
    weight: 55,
    age: 33,
    unit: "kg",
    show: "collapse",
    newWeight: 0,
    showAlert: "alert alert-success alert-dismissible fade",
    showInfo: "",
    weights: []
  };

  async componentDidMount() {
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ weight: data.weight })
    );
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ height: data.height })
    );
    fetchGetAPI(config.apiEndPoint + "/profiles/Weiwei").then(data =>
      this.setState({ age: data.age })
    );
    fetchGetAPI(config.apiEndPoint + "/profiles/weiwei/weights").then(data =>
      this.setState({ weights: data })
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
  handleEdit = () => {
    //collapse div to add new weight
    this.setState({
      show: this.state.show === "collapse" ? "collapse show" : "collapse"
    });
  };
  handleCancel = () => {
    this.setState({ show: "collapse" });
  };
  handleNewWeightInput = event => {
    this.setState({ newWeight: event.target.value });
  };
  handleAddWeight = async () => {
    if (this.state.newWeight > 0) {
      let newWeight = this.state.newWeight;
      let time = new Date();
      console.log(time);

      //update weight records,convert to kg first. Weights stored in unit kg
      if (this.state.unit === "lb")
        newWeight = Math.round(this.state.newWeight * 0.45359237);

      let body = JSON.stringify({
        name: "Weiwei",
        weight: newWeight,
        time: time.toLocaleString()
      });

      await fetchPostAPI(config.apiEndPoint + "/profiles/Weiwei", "POST", body);
      fetchGetAPI(config.apiEndPoint + "/profiles/weiwei/weights").then(
        data => {
          this.setState({
            weights: data,
            showAlert: "alert alert-success alert-dismissible fade show"
          });
          console.log(data);
        }
      );

      //update profile
      let body2 = JSON.stringify({
        name: "Weiwei",
        weight: newWeight,
        height: 160,
        age: 33,
        dailyGoal: 500
      });
      fetchPostAPI(config.apiEndPoint + "/profiles", "POST", body2);

      //update alert infomation
      if (this.state.newWeight > this.state.weight) {
        this.setState({
          showInfo:
            "Succeed! Your new weight is " +
            this.state.newWeight +
            " " +
            this.state.unit +
            ". You gained " +
            (this.state.newWeight - this.state.weight) +
            " " +
            this.state.unit
        });
      } else {
        this.setState({
          showInfo:
            "Succeed! Your new weight is " +
            this.state.newWeight +
            " " +
            this.state.unit +
            ". You lost " +
            (this.state.weight - this.state.newWeight) +
            " " +
            this.state.unit
        });
      }

      this.setState({ weight: this.state.newWeight });
    }
  };

  handleDelete = async event => {
    //currentTarget the target that listens to event which is button instead of font awesome
    await fetchDeleteAPI(
      config.apiEndPoint + "/profiles/Weiwei/" + event.currentTarget.name
    );
    let records = fetchGetAPI(
      config.apiEndPoint + "/profiles/weiwei/weights"
    ).then(data => {
      return data;
    });
    records.then(data => this.setState({ weights: data }));
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
          className="card  mb-3 ml-5 "
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
              <h5>Weiwei's Personal Profile</h5>
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
                          min="0"
                          placeholder="Enter new weight here"
                          step="2.5"
                          className="mb-2"
                          onChange={this.handleNewWeightInput}
                        />
                      </div>
                      <div className="col-3">
                        {this.state.unit === "kg" ? " kg" : " lb"}
                      </div>
                    </div>
                    <div className="row ">
                      <button
                        className="btn btn-sm ml-3 btn-outline-secondary"
                        onClick={this.handleAddWeight}
                      >
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
        <div>
          <div name="show records" id="left">
            <table className="table  table-hover">
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">Weight</th>
                  <th scope="col">BMI</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.weights.map(record => (
                  <tr key={record.id}>
                    <td>{record.time}</td>
                    <td>{record.weight} Kg</td>
                    <td>
                      {Math.round(
                        (record.weight * 100000) /
                          this.state.height /
                          this.state.height
                      ) / 10}
                    </td>
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
          <div id="right">
            <LineChart width={500} height={300} data={this.state.weights}>
              <XAxis dataKey="time">
                <Label value="Date" offset={0} position="insideBottom" />
              </XAxis>
              <YAxis
                dataKey="weight"
                label={{ value: "weight", angle: -90, position: "insideLeft" }}
              />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Legend verticalAlign="top" height={36} />

              <Line
                name="weight records"
                type="monotone"
                dataKey="weight"
                stroke="#82ca9d"
              />

              <Tooltip />
            </LineChart>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Health;
