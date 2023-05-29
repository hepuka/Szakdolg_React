import React, { useState } from "react";
import styles from "../Assets/css/Registration.module.scss";

//Firebase Import
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const Registration = ({ toggleState }) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    if (passwordInput !== passwordConfirm) {
      toast.error("Hibás bejelentkezési adat!");
    }

    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        toast.success("Sikeres regisztráció!");
        navigate("/workpage");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className={toggleState === 2 ? "content  active-content" : "content"}>
      <div className="box-center">
        <section className={styles.centered}>
          <div className={styles.form}>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Add meg a felhasználó email címét"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <input
                type="password"
                placeholder="Regisztrálandó jelszó"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <input
                type="password"
                placeholder="Adja meg újra a regisztrálandó jelszavat"
                required
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />

              <button type="submit" className="btn">
                Regisztráció
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;
