import React from "react";
import Reset from "./Reset/Reset";
import classes from "./ResetQuiz.module.css";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import * as actions from "../../actions";

interface ResetQuizProps {
  win: boolean;
}

const ResetQuiz: React.FC<ResetQuizProps> = ({ win }) => {
  const dispatch = useDispatch();

  const results = useSelector((state: RootStateOrAny) => state.status);

  const _win = () => {
    return (
      <div className={classes.ResultWrapper}>
        <div>You passed the quiz with</div>
        <ul>
          <li>{results.correct} correct</li>
          <li>{results.wrong} wrong</li>
          <li>{results.passed} passed</li>
        </ul>
        <div>answer(s). Conguratulations!</div>
      </div>
    );
  };

  const _error = () => {
    return <div>Something went wrong!</div>;
  };

  const _resetHandler = () => {
    dispatch(actions.resetQuestionCounter());
    dispatch(actions.resetStatus());
    dispatch(actions.abortRunning());
  };

  const inlineStyle: Object = win
    ? { background: "rgba(0,122.5,0,0.5)" }
    : { background: "rgba(255,0,0, 0.7)" };

  return (
    <div className={classes.ResetQuiz} style={inlineStyle}>
      {win ? _win() : _error()}
      <Reset click={_resetHandler} />
    </div>
  );
};

export default ResetQuiz;
