import React from "react";
import classes from "./PassIcon.module.css";

interface PassIconProps {
  click: () => void;
}

const PassIcon: React.FC<PassIconProps> = ({ click }) => {
  return (
    <div className={classes.PassIconContainer} onClick={click}>
      PASS
    </div>
  );
};

export default PassIcon;
