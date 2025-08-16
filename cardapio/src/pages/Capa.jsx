import React from "react";
import logo from "../assets/images/teste.png";
import styles from "./Capa.module.css";

const Capa = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container_img}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles.container_nav}>
        <div className={`${styles.nav_1} ${styles.nav}`}>
          <h1 className={styles.option}>Menu</h1>
        </div>
        <div className={`${styles.nav_2} ${styles.nav}`}>
          <h1 className={styles.option}>Reserva</h1>
        </div>
      </div>
    </div>
  );
};

export default Capa;
