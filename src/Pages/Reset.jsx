import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Assets/css/Login.module.scss";

//Firebase
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const Reset = () => {
  const [emailInput, setEmailInput] = useState("");

  const resetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, emailInput)
      .then(() => {
        toast.success("Ellenőrizd email fiókodat a további teendőkért!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <section className={styles.centered}>
        <div className={styles.form}>
          <h2>Elfelejtett jelszó</h2>
          <form onSubmit={resetPassword}>
            <input
              type="text"
              placeholder="Email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <button className="btn" type="submit">
              Elküld
            </button>
            <div>
              <p>
                <Link to="/">- Vissza -</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Reset;
