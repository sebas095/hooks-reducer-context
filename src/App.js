import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Store from "./store/store";
import Menu from "./components/menu";
import Counter from "./components/counter";
import Chronometer from "./components/chronometer";

const GloablStyle = createGlobalStyle`
 body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    background-color: #f5f5dc;
    text-align: center;
    margin: 0;
  }
`;

const App = () => {
  return (
    <>
      <GloablStyle />
      <Store>
        <Router>
          <Switch>
            <Route exact path="/">
              <Menu />
            </Route>

            <Route path="/counter">
              <Counter />
            </Route>

            <Route path="/chrono">
              <Chronometer />
            </Route>
          </Switch>
        </Router>
      </Store>
    </>
  );
};

export default App;
