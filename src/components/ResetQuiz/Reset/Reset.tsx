import React from "react";
import classes from "./Reset.module.css";

interface ResetProps {
  click: () => void;
}

const Reset: React.FC<ResetProps> = ({ click }) => {
  return (
    <div className={classes.Reset} onClick={click}>
      Reset
    </div>
  );
};

export default Reset;
