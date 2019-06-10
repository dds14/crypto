import React, { Component } from "react";
import axios from "axios";
import "./Prices.scss";

export class Prices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bitcoinPrice: 0
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.nomics.com/v1/prices?key=5f031f3c4f276ef2b4f4f3fbf2703f08"
      )
      .then(response => {
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].currency === "BTC") {
            let updatedBitcoinPrice = response.data[i].price;
            this.setState({ bitcoinPrice: updatedBitcoinPrice });
          }
        }
      });
  }

  render() {
    return (
      <div className="prices-div">
        <h1>The Current Price Of Bitcoin Is:</h1>
        <h2>{this.state.bitcoinPrice}</h2>
      </div>
    );
  }
}
