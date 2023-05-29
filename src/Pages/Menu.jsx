import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../customHooks/useFetchCollection";
import {
  GET_PRICE_RANGE,
  selectProducts,
  STORE_PRODUCTS,
} from "../redux/slice/productSlice";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";

const Menu = ({ toggleState }) => {
  const { data } = useFetchCollection("kunpaosproducts");
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );

    dispatch(
      GET_PRICE_RANGE({
        products: data,
      })
    );
  }, [dispatch, data]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className={toggleState === 8 ? "content  active-content" : "content"}>
      <div className="box-center">
        <aside>
          <ProductFilter />
        </aside>

        <div>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
