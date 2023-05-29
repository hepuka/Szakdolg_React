import React from "react";
import style from "../Assets/css/Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={style.footer}>
      <em>
        <p>Created by ZOLTAN KUN-FAGYAL - All Rights Reserved</p>
        <p>Computer Science Engineering</p>
        <p>&copy; 2021 - {year}</p>
      </em>
    </div>
  );
};

export default Footer;
