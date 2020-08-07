import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../store/store";
import { increment, decrement } from "../store/actions";

const CountContainer = styled.div`
  color: #3f93ff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const ButtonContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Button = styled.button`
  background-color: #3f93ff;
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 50%;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:first-child {
    margin-right: 40px;
  }

  &:hover {
    color: #3f93ff;
    background-color: white;
  }
`;

const CountStyled = styled.div`
  font-size: 150px;
  font-weight: bold;
`;

const Counter = () => {
  const { state, dispatch } = useContext(Context);
  const { count } = state.counter;

  return (
    <CountContainer>
      <h1>My Counter Example with hooks!</h1>
      <ButtonContainer>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </ButtonContainer>
      <CountStyled>{count}</CountStyled>
    </CountContainer>
  );
};

export default Counter;
