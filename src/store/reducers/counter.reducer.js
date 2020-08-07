import { DECREMENT, INCREMENT } from "../types";

const reducer = (state, action) => {
  const { counter } = state;

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: { ...counter, count: counter.count + 1 },
      };

    case DECREMENT:
      return {
        ...state,
        counter: { ...counter, count: counter.count - 1 },
      };

    default:
      return state;
  }
};

export default reducer;
