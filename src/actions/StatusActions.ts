import * as actionTypes from "../types";

export const incrementCorrect = () => {
  return {
    type: actionTypes.INCREMENT_CORRECT,
  };
};

export const incrementWrong = () => {
  return {
    type: actionTypes.INCREMENT_WRONG,
  };
};

export const incrementPassed = () => {
  return {
    type: actionTypes.INCREMENT_PASSED,
  };
};

export const resetStatus = () => {
  return {
    type: actionTypes.RESET_STATUS,
  };
};
