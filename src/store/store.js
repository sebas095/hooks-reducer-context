import React, { createContext, useReducer, useMemo } from "react";

import { combineReducers } from "../utils/combine-reducers";
import counterReducer from "./reducers/counter.reducer";
import chronoReducer from "./reducers/chrono.reducer";

const initialState = {
  counter: {
    count: 0,
  },
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

const rootReducer = combineReducers({
  counter: counterReducer,
  chrono: chronoReducer,
});

export const Context = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  // Performance Concerns
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Store;
