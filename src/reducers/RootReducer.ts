import { combineReducers } from "redux";
import quizReducer from "./QuizReducer";
import questionCounterReducer from "./QuestionCounterReducer";
import runningReducer from "./RunningReducer";
import statusReducer from "./StatusReducer";

const rootReducer = combineReducers({
  quiz: quizReducer,
  questionCounter: questionCounterReducer,
  running: runningReducer,
  status: statusReducer,
});

export default rootReducer;
