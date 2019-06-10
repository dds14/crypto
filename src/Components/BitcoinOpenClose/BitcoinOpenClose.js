import React, { Component } from "react";
import axios from "axios";
import "./BitcoinOpenClose.scss";

export default class BitcoinOpenClose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bitcoinCoinName: "",
      bitcoinDayOpen: 0
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.nomics.com/v1/dashboard?key=5f031f3c4f276ef2b4f4f3fbf2703f08"
      )
      .then(response => {
        // console.log(response);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].currency === "BTC") {
            let newCoinName = response.data[i].currency;
            let newCoinOpen = response.data[i].dayOpen;
            this.setState({ bitcoinDayOpen: newCoinOpen });
            this.setState({ bitcoinCoinName: newCoinName });
          }
        }
      });
  }

  render() {
    return (
      <div className="entire-open-close">
        <h1>The opening price of {this.state.bitcoinCoinName}</h1>
        <h1>{this.state.bitcoinDayOpen}</h1>
      </div>
    );
  }
}
