import React, { Component } from "react";
import "./Home.scss";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      something: true
    };
  }

  render() {
    return (
      <div className="entire-home-div">
        <h1>Welcome Home!</h1>
      </div>
    );
  }
}
