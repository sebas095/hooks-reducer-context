import { START, STOP, RESET, TIMESTAMP, UPDATE_TIME } from "../types";

export const start = () => ({
  type: START,
});

export const stop = () => ({
  type: STOP,
});

export const reset = () => ({
  type: RESET,
});

export const timestamp = () => ({
  type: TIMESTAMP,
});

export const updateTime = (hours, minutes, seconds, miliseconds) => ({
  type: UPDATE_TIME,
  payload: { hours, minutes, seconds, miliseconds },
});
