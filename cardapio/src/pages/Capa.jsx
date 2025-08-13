import React from 'react'
import logo from "../assets/images/teste.png"
import styles from "./Capa.module.css"

const Capa = () => {
  return (
    <div className={styles.all}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.container_nav}>
          <div className={`${styles.nav_1} ${styles.nav}`}>
            <h1>Menu</h1>
          </div>
          <div className={`${styles.nav_2} ${styles.nav}`}>
            <h1>Reserva</h1>
          </div>
      </div>
    </div>
  )
}

export default Capa
