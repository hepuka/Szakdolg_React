import React from "react";
import { AdminOnlyLink, UserOnlyLink } from "./AdminOnlyRoute.js";
import style from "../Assets/css/Navbar.module.scss";

const Navbar = ({ toggleTab, toggleState }) => {
  return (
    <div className={style.bloctabs}>
      <button
        className={
          toggleState === 1
            ? `${style.tabs} ${style.activetabs}`
            : `${style.tabs}`
        }
        onClick={() => toggleTab(1)}
      >
        Üdvözöljük
      </button>

      <AdminOnlyLink>
        <button
          className={
            toggleState === 2
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(2)}
        >
          Regisztráció
        </button>

        <button
          className={
            toggleState === 3
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(3)}
        >
          Új dolgozó hozzáadása
        </button>

        <button
          className={
            toggleState === 4
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(4)}
        >
          Felhasználók
        </button>

        <button
          className={
            toggleState === 5
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(5)}
        >
          Üzleti összesítő
        </button>

        <button
          className={
            toggleState === 6
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(6)}
        >
          Új termék hozzáadása
        </button>
        <button
          className={
            toggleState === 7
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(7)}
        >
          Minden termék
        </button>
      </AdminOnlyLink>

      <UserOnlyLink>
        <button
          className={
            toggleState === 8
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(8)}
        >
          Menü
        </button>

        <button
          className={
            toggleState === 9
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(9)}
        >
          Leadott rendelések
        </button>

        <button
          className={
            toggleState === 10
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(10)}
        >
          Asztal 1.
        </button>

        <button
          className={
            toggleState === 11
              ? `${style.tabs} ${style.activetabs}`
              : `${style.tabs}`
          }
          onClick={() => toggleTab(11)}
        >
          Asztal 2.
        </button>
      </UserOnlyLink>

      <button
        className={
          toggleState === 12
            ? `${style.tabs} ${style.activetabs}`
            : `${style.tabs}`
        }
        onClick={() => toggleTab(12)}
      >
        Kapcsolat
      </button>
    </div>
  );
};

export default Navbar;

/* gombokat lehet egyenként kellene az adminonly szelektáció miatt */
