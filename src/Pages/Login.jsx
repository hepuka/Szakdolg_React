import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../Assets/css/Login.module.scss";

//Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";

const Login = () => {
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        //const user = userCredential.user;
        navigate("/workpage");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <section className={styles.centered}>
        <div className={styles.form}>
          <h2>KunPao's Coffee Management</h2>

          <form onSubmit={loginUser}>
            <input
              type="text"
              placeholder="Email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <input
              type="password"
              placeholder="Jelszó"
              required
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button className="btn" type="submit">
              Tovább
            </button>

            <div>
              <Link to="/reset">Elfelejtett jelszó</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
