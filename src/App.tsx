import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Card from "./components/Card/Card";
import Quiz from "./containers/Quiz/Quiz";
import * as actions from "./actions";
import "./App.css";

interface Setup {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch();

  const running: boolean = useSelector(
    (state: RootStateOrAny) => state.running
  );

  const setupOptions: Array<Setup> = [
    {
      id: "start",
      text: "Start Quiz",
    },
  ];

  const _cardClickHandler = (id: string) => {
    if (id === "start") {
      dispatch(actions.startRunning());
    }
  };

  const _cardShowHandler = () => {
    return setupOptions.map((option) => {
      return (
        <Card
          key={option.id}
          id={option.id}
          text={option.text}
          click={_cardClickHandler}
        />
      );
    });
  };
  return (
    <div className="SetupWrapper">
      {running ? <Quiz /> : _cardShowHandler()}
    </div>
  );
};

export default App;
