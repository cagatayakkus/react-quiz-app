import * as actionTypes from "../types";

interface Action {
  type: string;
}

const initialState: number = 0;

const questionCounterReducer = (
  state: number = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.RESET_QUESTION_COUNTER:
      state = 0;
      return state;
    case actionTypes.INCREMENT_QUESTION_COUNTER:
      state += 1;
      return state;

    default:
      return state;
  }
};

export default questionCounterReducer;
