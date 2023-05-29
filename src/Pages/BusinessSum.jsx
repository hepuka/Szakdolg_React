import React from "react";

const BusinessSum = ({ toggleState }) => {
  return (
    <div className={toggleState === 5 ? "content  active-content" : "content"}>
      <h2>BusinessSum</h2>
    </div>
  );
};

export default BusinessSum;
