import React, { Component } from "react";
import "./SearchACoin.scss";

export class SearchACoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickerBeingSearched: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(this.state.tickerBeingSearched);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    console.log(
      "The coin you are searching for is " + this.state.tickerBeingSearched
    );
  }

  render() {
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
        </div>
      </div>
    );
  }
}
