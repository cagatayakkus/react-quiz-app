import * as actionTypes from "../types";

interface Action {
  type: string;
}

interface State {
  correct: number;
  wrong: number;
  passed: number;
}

const initialState = {
  correct: 0,
  wrong: 0,
  passed: 0,
};

const statusReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_CORRECT:
      return { ...state, correct: state.correct + 1 };
    case actionTypes.INCREMENT_WRONG:
      return { ...state, wrong: state.wrong + 1 };
    case actionTypes.INCREMENT_PASSED:
      return { ...state, passed: state.passed + 1 };
    case actionTypes.RESET_STATUS:
      return initialState;
    default:
      return state;
  }
};

export default statusReducer;
