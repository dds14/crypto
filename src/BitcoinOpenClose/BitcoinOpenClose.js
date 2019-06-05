import React, { Component } from "react";
import axios from "axios";

export class BitcoinOpenClose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BitcoinPrice: 0,
      XlmPrice: 0,
      BatPrice: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Hey</h1>
      </div>
    );
  }
}
