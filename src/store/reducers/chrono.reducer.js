import { START, STOP, RESET, TIMESTAMP, UPDATE_TIME } from "../types";

const reducer = (state, action) => {
  const { chrono } = state;

  switch (action.type) {
    case START:
      return {
        ...state,
        chrono: {
          ...chrono,
          running: true,
          started: true,
        },
      };

    case STOP:
      return {
        ...state,
        chrono: {
          ...chrono,
          running: false,
        },
      };

    case RESET:
      return {
        ...state,
        chrono: {
          hours: 0,
          minutes: 0,
          seconds: 0,
          miliseconds: 0,
          allTimestamps: [],
          running: false,
          started: false,
        },
      };

    case TIMESTAMP:
      return {
        ...state,
        chrono: {
          ...chrono,
          allTimestamps: [
            ...chrono.allTimestamps,
            {
              hours: chrono.hours,
              minutes: chrono.minutes,
              seconds: chrono.seconds,
              miliseconds: chrono.miliseconds,
            },
          ],
        },
      };

    case UPDATE_TIME:
      return {
        ...state,
        chrono: {
          ...chrono,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
