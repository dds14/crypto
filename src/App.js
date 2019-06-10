import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import BitcoinOpenClose from "./Components/BitcoinOpenClose/BitcoinOpenClose";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
