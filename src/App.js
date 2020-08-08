import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Switch, Route, Link, useLocation } from "react-router-dom";

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

const Container = styled.div`
  width: 100vw;
  display: inline-block;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
`;

const Back = styled(Link)`
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-decoration: none;
  color: #3f93ff;
  font-weight: bold;
  font-size: 1.5rem;
`;

const App = () => {
  const location = useLocation();

  return (
    <>
      <GloablStyle />
      <Store>
        {location.pathname !== "/" && (
          <Container>
            <Back to="/"> 🔙 </Back>
          </Container>
        )}
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
      </Store>
    </>
  );
};

export default App;
