import React, { Component } from "react";
import "./SearchACoin.scss";

export class SearchACoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickerBeingSearched: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(this.state.tickerBeingSearched);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="entire-search-div">
        <h1>Search Our Universe Of Coins</h1>
        <div>
          <form autocomplete="off" onSubmit={this.handleSubmit}>
            <input
              placeholder="Coin Ticker (ex: BTC)"
              name="coin"
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
