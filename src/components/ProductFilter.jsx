import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../redux/slice/productSlice";
import { FILTER_BY_CATEGORY } from "../redux/slice/filterSlice";
import "../Assets/css/ProductFilter.module.scss";

const ProductFilter = () => {
  const products = useSelector(selectProducts);
  const [category, setCategory] = useState("Összes");
  const dispatch = useDispatch();

  const allCategories = [
    "Összes",
    ...new Set(products.map((item) => item.category)),
  ];

  const filterProducts = (category) => {
    setCategory(category);

    dispatch(FILTER_BY_CATEGORY({ products, category: category }));
  };

  return (
    <div className="filter">
      <h4>Kategória</h4>

      <div className="category">
        {allCategories.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${category}` === item ? "active" : null}
              onClick={() => filterProducts(item)}
            >
              &#8250; {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
