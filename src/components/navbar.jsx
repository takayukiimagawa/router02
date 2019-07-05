import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/lorem">Lorem</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
