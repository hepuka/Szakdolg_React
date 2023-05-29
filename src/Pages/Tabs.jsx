import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Welcome from "./Welcome";
import AddNewWorker from "./AddNewWorker";
import Registration from "./Registration";
import Contact from "./Contact";
import Users from "./Users";
import BusinessSum from "./BusinessSum";
import AddNewProduct from "./AddNewProduct";
import AllProducts from "./AllProducts";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <Navbar toggleTab={toggleTab} toggleState={toggleState} />
      <Welcome toggleState={toggleState} />
      <Registration toggleState={toggleState} />
      <AddNewWorker toggleState={toggleState} />
      <Users toggleState={toggleState} />
      <BusinessSum toggleState={toggleState} />
      <AddNewProduct toggleState={toggleState} />
      <AllProducts toggleState={toggleState} />
      <Contact toggleState={toggleState} />
    </div>
  );
};

export default Tabs;
