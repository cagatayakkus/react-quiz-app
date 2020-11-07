import React from "react";
import "./Card.css";

interface CardProps {
  text: string;
  id: string;
  click: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ text, click, id }) => {
  return <div className="CardWrapper" onClick={() => click(id)}>{text}</div>;
};

export default Card;
