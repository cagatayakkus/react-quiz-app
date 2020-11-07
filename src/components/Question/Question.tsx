import React from "react";
import { Question_ } from "../../interfaces/Question_";
import "./Question.css";

interface Answer {
  selected: string | null;
  correct: string | null;
}

interface QuestionProps {
  question: Question_;
  optionClick: (option: string) => void;
  answer: Answer;
}

const Question: React.FC<QuestionProps> = ({
  question,
  optionClick,
  answer,
}) => {
  return (
    <div className="QuestionContainer">
      <div className="Question">{question.question}</div>
      <div className="OptionsWrapper">
        {question.options.map((option) => {
          let color = { background: "#fff" };
          if (
            answer &&
            answer.selected === answer.correct &&
            answer.selected === option
          ) {
            color = { background: "rgba(0,122.5,0,0.5)" };
          } else if (
            answer &&
            answer.selected !== answer.correct &&
            answer.selected === option
          ) {
            color = { background: "rgba(255, 0,0,0.7)" };
          }
          return (
            <div
              className="Option"
              key={option}
              onClick={() => optionClick(option)}
              style={color}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
