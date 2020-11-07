import React from "react";
import "./QuizControls.css";
import QuestionCounter from "./QuestionCounter/QuestionCounter";
import BackIcon from "./BackIcon/BackIcon";
import * as actions from "../../actions";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import PassIcon from "./PassIcon/PassIcon";

const QuizControls: React.FC = () => {
  const dispatch = useDispatch();

  const questionCounter: number = useSelector(
    (state: RootStateOrAny) => state.questionCounter
  );

  const _closeQuizHandler = () => {
    dispatch(actions.resetQuestionCounter());
    dispatch(actions.abortRunning());
  };

  const _passButtonHandler = () => {
    dispatch(actions.incrementQuestionCounter());
    dispatch(actions.incrementPassed());
  };

  return (
    <div className="QuizControls">
      <PassIcon click={_passButtonHandler} />
      <QuestionCounter count={questionCounter + 1} />
      <BackIcon click={_closeQuizHandler} />
    </div>
  );
};

export default QuizControls;
