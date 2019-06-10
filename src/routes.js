import React from "react";
import { Switch, Route } from "react-router-dom";
import BitcoinOpenClose from "./BitcoinOpenClose/BitcoinOpenClose";
import MoonOrDead from "./MoonOrDead/MoonOrDead";
import { BitcoinPrice } from "./BitcoinPrice/BitcoinPrice";

export default (
  <Switch>
    {/* <Route path="/open-close" component={BitcoinOpenClose} /> */}
    <Route path="/prices" component={BitcoinPrice} />
    <Route exact path="/" component={BitcoinOpenClose} />
  </Switch>
);
