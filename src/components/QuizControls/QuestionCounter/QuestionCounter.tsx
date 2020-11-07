import React from "react";

interface QuestionCounterProps {
    count: number;
}

const QuestionCounter: React.FC<QuestionCounterProps> = ({ count }) => {
  return (
      <div>
          {count}
      </div>
  )
};

export default QuestionCounter;
