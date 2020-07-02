import React from "react";
import { createGlobalStyle } from "styled-components";

import Counter from "./components/counter";
import Store from "./store/store";

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
        <Counter />
      </Store>
    </>
  );
};

export default App;
