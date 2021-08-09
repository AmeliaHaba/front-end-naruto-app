import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-title">
          <h1>
            <Link to="/">Sensei and Shinobi</Link>
          </h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/HowTo">How To</Link>
            </li>
            <li>
              <Link to="/About">About Naruto</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
