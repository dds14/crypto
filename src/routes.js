import React from "react";
import { Switch, Route } from "react-router-dom";
import BitcoinOpenClose from "./Components/BitcoinOpenClose/BitcoinOpenClose";
import { Prices } from "./Components/Prices/Prices";
import { Home } from "./Components/Home/Home";
import { SearchACoin } from "./Components/SearchACoin/SearchACoin";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/prices" component={Prices} />
    <Route path="/open-close" component={BitcoinOpenClose} />
    <Route path="/search-a-coin" component={SearchACoin} />
  </Switch>
);
