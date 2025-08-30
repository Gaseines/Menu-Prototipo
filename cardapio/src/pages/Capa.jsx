import React, { useState } from "react";
import logo from "../assets/images/teste.png";
import styles from "./Capa.module.css";
import ReservationForm from "../components/ReservationForm";
import seta from "../assets/images/seta.png"

const Capa = () => {

  const [reservaOpen, setReservaOpen] = useState(false)

  const handleReserva = () =>{
    setReservaOpen(!reservaOpen)
  }

  return (
    <div className={styles.all}>
      <div className={styles.container_img}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles.container_nav}>
        <div className={`${styles.nav_1} ${styles.nav}`}>
          <a
            className={styles.link}
            href="docs/Menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={styles.option}>Menu</h1>
          </a>
        </div>
        <div className={`${styles.nav_2} ${styles.nav}`}>
          <h1 className={styles.option} onClick={handleReserva}>Reserva</h1>
        </div>
      </div>
      <div className={`${styles.container_contato} ${reservaOpen ? styles.container_open : styles.container_lock}`}>
        <img onClick={handleReserva} className={styles.seta} src={seta} alt="voltar" />
        <div className={styles.contato}>
          <h1>Reserva</h1>
          <ReservationForm
            whatsappNumber="554999828876"
            restaurantName="Food Park"
          />
        </div>
      </div>
    </div>
  );
};

export default Capa;
