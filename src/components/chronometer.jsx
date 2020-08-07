import React, { useState, useEffect } from "react";
import { generate as id } from "shortid";
import styled from "styled-components";

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
  const [clock, setClock] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  });

  const [running, setRunning] = useState(false);
  const [allTimestamps, setAllTimestamps] = useState([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(tick, 100);
      return () => clearInterval(interval);
    }
  }, [running, clock]);

  const handleStartClick = () => {
    if (!running) {
      setRunning(true);
      setStarted(true);
    }
  };

  const tick = () => {
    let { hours, minutes, seconds, miliseconds } = clock;
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

    updateTimer(hours, minutes, seconds, miliseconds);
  };

  const handleStopClick = () => {
    if (running) {
      setRunning(false);
    }
  };

  const handleTimestamp = () => {
    const timestamp = {
      hours: clock.hours,
      minutes: clock.minutes,
      seconds: clock.seconds,
      miliseconds: clock.miliseconds,
    };

    setAllTimestamps([...allTimestamps, timestamp]);
  };

  const handleReset = () => {
    updateTimer(0, 0, 0, 0);
    setAllTimestamps([]);
    setStarted(false);
  };

  const updateTimer = (hours, minutes, seconds, miliseconds) => {
    setClock({ hours, minutes, seconds, miliseconds });
  };

  const addZero = (value) => (value < 10 ? `0${value}` : value);

  let { hours, minutes, seconds, miliseconds } = clock;

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  miliseconds = addZero(miliseconds);

  return (
    <Container>
      <Img src={chronoImg} alt="Chrono" />
      <Time>{`${hours} : ${minutes} : ${seconds} : ${miliseconds}`}</Time>
      <Button disabled={running} onClick={handleStartClick}>
        START
      </Button>
      <Button disabled={!running} onClick={handleStopClick}>
        STOP
      </Button>
      <Button disabled={!running} onClick={handleTimestamp}>
        TIMESTAMP
      </Button>
      {started && (
        <Button disabled={running} onClick={handleReset}>
          RESET
        </Button>
      )}

      <List>
        {allTimestamps.map((timestamp, idx) => (
          <Item key={id()}>
            {`
              ${idx + 1} - 
              ${addZero(timestamp.hours)} : 
              ${addZero(timestamp.minutes)} : 
              ${addZero(timestamp.seconds)} :
              ${addZero(timestamp.miliseconds)}
            `}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Chronometer;
