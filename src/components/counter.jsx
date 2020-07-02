import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../store/store";
import { increment, decrement } from "../store/actions";

const Button = styled.button``;

const CountStyled = styled.div``;

const Counter = () => {
  const { state, dispatch } = useContext(Context);
  const { count } = state;

  return (
    <div>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <CountStyled>{count}</CountStyled>
    </div>
  );
};

export default Counter;
