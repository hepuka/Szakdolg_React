import React from "react";

const AllProducts = ({ toggleState }) => {
  return (
    <div className={toggleState === 7 ? "content  active-content" : "content"}>
      <h2>AllProducts</h2>
    </div>
  );
};

export default AllProducts;
