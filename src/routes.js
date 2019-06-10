import React from "react";
import { Switch, Route } from "react-router-dom";
import BitcoinOpenClose from "./Components/BitcoinOpenClose/BitcoinOpenClose";
import { Prices } from "./Components/Prices/Prices";

export default (
  <Switch>
    <Route exact path="/" component={Prices} />
  </Switch>
);
