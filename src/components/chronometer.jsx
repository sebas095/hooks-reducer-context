import React, { useContext, useEffect } from "react";
import { generate as id } from "shortid";
import styled from "styled-components";

import { Context } from "../store/store";
import { start, stop, reset, timestamp, updateTime } from "../store/actions";

import chronoImg from "../img/chrono.png";

const Container = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 25px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

const Time = styled.h3`
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? "transparent" : "#387EF5")};
  border: ${({ disabled }) => (disabled ? "1px solid #387EF5" : "none")};
  outline: none;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 15px;
  padding: 0.5rem;
  margin: 0.5rem;
  color: ${({ disabled }) => (disabled ? "#444" : "#FFF")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li`
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Chronometer = () => {
  const { state, dispatch } = useContext(Context);
  let {
    hours,
    minutes,
    seconds,
    miliseconds,
    allTimestamps,
    started,
    running,
  } = state.chrono;

  useEffect(() => {
    if (running) {
      const interval = setInterval(tick, 100);
      return () => clearInterval(interval);
    }
  }, [running]);

  const tick = () => {
    miliseconds++;

    if (miliseconds === 10) {
      miliseconds = 0;
      seconds++;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    dispatch(updateTime(hours, minutes, seconds, miliseconds));
  };

  const addZero = (value) => (value < 10 ? `0${value}` : value);

  return (
    <Container>
      <Img src={chronoImg} alt="Chrono" />
      <Time>
        {` 
          ${addZero(hours)} : 
          ${addZero(minutes)} : 
          ${addZero(seconds)} : 
          ${addZero(miliseconds)}
        `}
      </Time>
      <Button disabled={running} onClick={() => dispatch(start())}>
        START
      </Button>
      <Button disabled={!running} onClick={() => dispatch(stop())}>
        STOP
      </Button>
      <Button disabled={!running} onClick={() => dispatch(timestamp())}>
        TIMESTAMP
      </Button>
      {started && (
        <Button disabled={running} onClick={() => dispatch(reset())}>
          RESET
        </Button>
      )}

      <List>
        {allTimestamps.map((time, idx) => (
          <Item key={id()}>
            {`
              ${idx + 1} - 
              ${addZero(time.hours)} : 
              ${addZero(time.minutes)} : 
              ${addZero(time.seconds)} :
              ${addZero(time.miliseconds)}
            `}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Chronometer;
