import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import styles from "../../styles/header/header.module.css";

const LoggedUserNavBurger = ({ user }) => {

  const [name, lastname] = user;
  const { admin } = useContext(UserContext);

  return (
    <div className={styles.blockUserBurger}>
      <div className={styles.avatar}>
        {user.length > 0 ? name.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase() : ""}
      </div>
      <div className={styles.userHeader}>
        <p>Hola,</p>
        <p className={styles.userlogHeader}>{name + ' ' + lastname}</p>
      </div>
      {
        admin ?
        <div className={styles.userAdmin}>
          <Link to="/admin">
            <h3>Administración</h3>
          </Link>
        </div> : ""
       }
    </div>
  );
}

export default LoggedUserNavBurger