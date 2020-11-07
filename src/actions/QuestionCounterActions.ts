import * as actionTypes from "../types";

export const resetQuestionCounter = () => {
  return {
    type: actionTypes.RESET_QUESTION_COUNTER,
  };
};

export const incrementQuestionCounter = () => {
  return {
    type: actionTypes.INCREMENT_QUESTION_COUNTER,
  };
};
