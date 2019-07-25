import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <Link className="navbar-brand" to="">
          Burn it
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/today"}>
                Today
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={"/addexercise"}>
                Exercises
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={"/addweight"}>
                Weights
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={"/planner"}>
                Plans
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to={"/profile"}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
