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
          <Link to="/">
            <p className="home-text">Home</p>
          </Link>
          <Link to="/prices">
            <p className="prices-text">Prices</p>
          </Link>
          <Link to="/open-close">
            <p>open - close</p>
          </Link>
          <Link to="search-a-coin">
            <p>Search</p>
          </Link>
        </div>
      </div>
    );
  }
}
