import React, { Component } from "react";
import axios from "axios";
import { BitcoinOpenClose } from "../BitcoinOpenClose/BitcoinOpenClose";

export class BitcoinPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BitcoinPrice: 0,
      XlmPrice: 0,
      BatPrice: 0
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.nomics.com/v1/prices?key=5f031f3c4f276ef2b4f4f3fbf2703f08"
      )
      .then(response => {
        console.log(response);
        let BitcoinPrice = response.data[140].price;
        this.setState({ BitcoinPrice });
        let XlmPrice = response.data[1051].price;
        this.setState({ XlmPrice });
        let BatPrice = response.data[75].price;
        this.setState({ BatPrice });
      });
  }

  render() {
    return (
      <div>
        <h1>The Current Price Of Bitcoin Is:</h1>
        <h2>{this.state.BitcoinPrice}</h2>
        <h1>The Current Price Of XLM Is:</h1>
        <h2>{this.state.XlmPrice}</h2>
        <h1>The Current Price Of BAT Is:</h1>
        <h2>{this.state.BatPrice}</h2>
        <BitcoinOpenClose />
      </div>
    );
  }
}
