import React, { Component } from "react";
import "./SearchACoin.scss";
import axios from "axios";

export class SearchACoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickerBeingSearched: "",
      priceOfCoinBeingSearched: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(this.state.tickerBeingSearched);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    axios
      .get(
        "https://api.nomics.com/v1/prices?key=5f031f3c4f276ef2b4f4f3fbf2703f08"
      )
      .then(response => {
        console.log("axios call HIT" + this.state.tickerBeingSearched);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data.currency == this.state.tickerBeingSearched) {
            let searchedCoinPrice = response.data[i].price;
            this.setState({ priceOfCoinBeingSearched: searchedCoinPrice });
          }
        }
      });
  }

  render() {
    console.log(
      "current state of ticker is: " + this.state.tickerBeingSearched
    );
    return (
      <div className="entire-search-div">
        <h1>Search Our Universe Of Coins</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Coin Ticker (ex: BTC)"
              name="tickerBeingSearched"
              onChange={this.handleChange}
              value={this.state.tickerBeingSearched}
            />
            <button className="search-form-submit-button">Search</button>
          </form>
          <h1>here</h1>
          <h1>{this.state.priceOfCoinBeingSearched}</h1>
        </div>
      </div>
    );
  }
}
