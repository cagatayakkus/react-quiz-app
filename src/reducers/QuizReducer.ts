import { v4 } from "uuid";
import { Question_ } from "../interfaces/Question_";

interface Action {
  type: String;
  payload?: Object;
}

const initialState: Array<Question_> = [
  {
    id: v4(),
    question: "How many teeth does an adult human have?",
    options: ["31", "32", "33", "34"],
    correct: "32",
  },
  {
    id: v4(),
    question: "What is the capital of Hawaii?",
    options: ["Los Santos", "Ankara", "Honolulu", "Bruxelles"],
    correct: "Honolulu",
  },
  {
    id: v4(),
    question: "What is Lady Gaga's real name?",
    options: ["Stefani Germanotta", "Cagatay Akkus", "John Doe", "Donald Trump"],
    correct: "Stefani Germanotta",
  },
];

const quizReducer = (
  state: Array<Question_> = initialState,
  actions: Action
) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default quizReducer;
