import React from "react";

const AddNewProduct = ({ toggleState }) => {
  return (
    <div className={toggleState === 6 ? "content  active-content" : "content"}>
      <h2>AddNewProduct</h2>
    </div>
  );
};

export default AddNewProduct;
