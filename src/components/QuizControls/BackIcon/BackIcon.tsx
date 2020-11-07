import React from "react";
import "./BackIcon.css";

interface BackIconProps {
  click: () => void
}

const BackIcon: React.FC<BackIconProps> = ({ click }) => {
  return (
    <div className="BackIcon" onClick={click}>
      X
    </div>
  );
};

export default BackIcon;
