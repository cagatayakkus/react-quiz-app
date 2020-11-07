import React, { useState } from "react";
import Question from "../../components/Question/Question";
import QuizControls from "../../components/QuizControls/QuizControls";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { Question_ } from "../../interfaces/Question_";
import * as actions from "../../actions";
import "./Quiz.css";
import ResetQuiz from "../../components/ResetQuiz/ResetQuiz";
import { delay } from "../../utilities/utilities";

interface AppProps {}

interface Answer {
  selected: string | null;
  correct: string | null;
}

const App: React.FC<AppProps> = () => {
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState<Answer>({
    selected: null,
    correct: null,
  });

  const allQuestions = useSelector((state: RootStateOrAny) => state.quiz);

  const questionIndex = useSelector(
    (state: RootStateOrAny) => state.questionCounter
  );

  const question: Question_ = allQuestions[questionIndex];

  const _optionClickHandler = async (option: string) => {
    if (question.correct === option) {
      setAnswer({ selected: option, correct: question.correct });
      await delay(450);
      dispatch(actions.incrementQuestionCounter());
      dispatch(actions.incrementCorrect());
    } else {
      setAnswer({ selected: option, correct: question.correct });
      await delay(450);
      dispatch(actions.incrementQuestionCounter());
      dispatch(actions.incrementWrong());
    }
  };

  return (
    <div className="QuizContainer">
      {question != null ? (
        <div className="QuizControlsContainer">
          <QuizControls />
        </div>
      ) : (
        ""
      )}
      <div>
        {question != null ? (
          <Question
            question={question}
            optionClick={_optionClickHandler}
            answer={answer}
          />
        ) : (
          <ResetQuiz win={questionIndex === allQuestions.length} />
        )}
      </div>
    </div>
  );
};

export default App;
