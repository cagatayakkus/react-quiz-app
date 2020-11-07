import * as actionTypes from "../types";

interface Action {
  type: string;
}

const initialState: boolean = false;

const runningReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.START_RUNNING:
      state = true;
      return state;
    case actionTypes.ABORT_RUNNING:
      state = false;
      return state;
    default:
      return state;
  }
};

export default runningReducer;
