import * as actionTypes from "../types";

export const startRunning = () => {
  return {
    type: actionTypes.START_RUNNING,
  };
};

export const abortRunning = () => {
  return {
    type: actionTypes.ABORT_RUNNING,
  };
};
