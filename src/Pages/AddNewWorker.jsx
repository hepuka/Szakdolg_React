import React, { useState } from "react";
import styles from "../Assets/css/AddNewWorker.module.scss";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "../redux/slice/userSlice";

const categories = [
  { id: 1, name: "Admin" },
  { id: 2, name: "Alap" },
];

const initialSate = {
  name: "",
  email: "",
  tax: "",
  pin: "",
  role: "",
};

const AddNewWorker = ({ toggleState }) => {
  const { id } = useParams();
  const users = useSelector(selectUsers);
  const userEdit = users.find((item) => item.id === id);

  const detectForm = (id, f1, f2) => {
    if (id === "ADD") {
      return f1;
    } else {
      return f2;
    }
  };

  const [user, setUser] = useState(() => {
    const newState = detectForm(id, { ...initialSate }, userEdit);
    return newState;
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const addUser = (e) => {
    e.preventDefault();

    try {
      addDoc(collection(db, "users"), {
        name: user.name,
        email: user.email,
        tax: user.tax,
        pin: user.pin,
        role: user.role,
        createdAt: Timestamp.now().toDate(),
      });

      setUser({ ...initialSate });

      toast.success("Sikeres felhasználó rögzítés!");
      navigate("/workpage");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editUser = (e) => {
    e.preventDefault();

    try {
      setDoc(doc(db, "users", id), {
        name: user.name,
        email: user.email,
        tax: user.tax,
        pin: user.pin,
        role: user.role,
        createdAt: userEdit.createdAt,
        editedAt: Timestamp.now().toDate(),
      });

      toast.success("Felhasználó adatai módosítva!");
      navigate("/workpage");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className={toggleState === 3 ? "content  active-content" : "content"}>
      <div className={styles.centered}>
        <h2>
          {detectForm(
            id,
            "Új felhasználó hozzáadása",
            "Felhasználó adatainak módosítása"
          )}
        </h2>

        <form onSubmit={detectForm(id, addUser, editUser)}>
          <label>Felhasználó neve</label>
          <input
            type="text"
            placeholder="Add meg a felhasználó nevét"
            required
            name="name"
            value={users.name}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Felhasználó email címe</label>
          <input
            type="email"
            placeholder="Regisztrációs email cím"
            required
            name="email"
            value={users.email}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Felhasználó adószáma</label>
          <input
            type="text"
            placeholder="Felhasználó adószáma"
            required
            name="tax"
            value={users.tax}
            onChange={(e) => handleInputChange(e)}
          />
          <label>PIN kód</label>
          <input
            type="text"
            placeholder="Adj meg egy PIN kódot"
            required
            name="pin"
            value={users.pin}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Jogosultság</label>
          <select
            required
            name="role"
            value={users.role}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled>
              -- Válassz jogosultságot --
            </option>
            {categories.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <button className="btn">
            {detectForm(id, "Hozzáad", "Módosít")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewWorker;
