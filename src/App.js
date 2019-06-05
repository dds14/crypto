import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BitcoinPrice } from "./BitcoinPrice/BitcoinPrice";

function App() {
  return (
    <div className="App">
      <h1>HELLO, BITCOIN</h1>
      <BitcoinPrice />
    </div>
  );
}

export default App;
