import { START, STOP, RESET, TIMESTAMP, UPDATE_TIME } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        running: true,
        started: true,
      };

    case STOP:
      return {
        ...state,
        running: false,
      };

    case RESET:
      return {
        ...state,
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
        allTimestamps: [],
        running: false,
        started: false,
      };

    case TIMESTAMP:
      return {
        ...state,
        allTimestamps: [
          ...state.allTimestamps,
          {
            hours: state.hours,
            minutes: state.minutes,
            seconds: state.seconds,
            miliseconds: state.miliseconds,
          },
        ],
      };

    case UPDATE_TIME:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
