import React from "react";
import welcome from "../Assets/cafe.png";

const Welcome = ({ toggleState }) => {
  return (
    <div className={toggleState === 1 ? "content active-content" : "content"}>
      <div className="box-center">
        <img src={welcome} alt="welcome"></img>
      </div>
    </div>
  );
};

export default Welcome;
