import React from "react";
import { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import styles from "../Assets/css/Contact.module.scss";

const Contact = ({ toggleState }) => {
  const form = useRef();

  console.log(form);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4661qd7",
        "template_wjdie3h",
        form.current,
        "_geOTjcVpuDwzlJcL"
      )
      .then(
        (result) => {
          console.log(form.current);
          console.log(result);
          toast.success("Üzenet elküldve!");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={toggleState === 12 ? "content  active-content" : "content"}>
      <div className="box-center">
        <div className={styles.section}>
          <div className={styles.details}>
            <h3>Lépjen kapcsolatba velünk</h3>
            <p>
              Kérjük töltse ki az űrlapot vagy keressen minket az alábbi
              elérhetőségeken
            </p>
            <div className={styles.icons}>
              <span>
                <FaPhoneAlt />
                <p>+3630 1111 222</p>
              </span>
              <span>
                <FaEnvelope />
                <p>support@hepukadev.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Debrecen, HUNGARY</p>
              </span>
              <span>
                <FaTwitter />
                <p>@hepuka</p>
              </span>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <fieldset>
              <legend>Kérjük adja meg adatait</legend>
              <label>Név</label>
              <input
                type="text"
                name="user_name"
                placeholder="Adja meg a nevét"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Adja meg email címét"
                required
              />
              <label>Tárgy</label>
              <input
                type="text"
                name="subject"
                placeholder="Üzenet tárgya"
                required
              />
              <label>Üzenet</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Küldje el nekünk észrevételét"
              ></textarea>
              <button className="btn">Küldés</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
