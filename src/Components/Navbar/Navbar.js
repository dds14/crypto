import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburger: false
    };
  }

  render() {
    return (
      <div className="entire-navbar">
        <div className="right-side">
          <p>pines</p>
          <p>nirvana</p>
          <p>trees</p>
        </div>
      </div>
    );
  }
}
