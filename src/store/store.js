import React, { createContext, useReducer, useMemo } from "react";

import counterReducer from "./reducers/counter.reducer";

const init = (initialCount) => {
  return { count: initialCount };
};

export const Context = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, 0, init);

  // Performance Concerns
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Store;
