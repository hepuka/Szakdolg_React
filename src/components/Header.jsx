import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase/config";
import ShowOnLogin from "./hiddenLink";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../redux/slice/authSlice";
import style from "../Assets/css/Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();

  //monitor that user is login or logout
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);

        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");

        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sikeres kijelentkezés!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className={style.headers}>
      <ShowOnLogin>
        <h1>KunPao's Coffee</h1>
        <div className={style.headlinks}>
          <p>Bejelentkezve: {displayName}</p>
          <NavLink to="/" onClick={logoutUser}>
            Kijelentkezés
          </NavLink>
        </div>
      </ShowOnLogin>
    </div>
  );
};

export default Header;
