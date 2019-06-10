import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import BitcoinOpenClose from "./BitcoinOpenClose/BitcoinOpenClose";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <BitcoinOpenClose />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
