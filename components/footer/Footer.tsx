import React from 'react'
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
        <div className={styles.email}>contact@fluxpointstudios.com</div>
        <div className={styles.fluid_engine}>
            <div>2023 – Infinity</div>
            <div>Made with Squarespace</div>
        </div>
    </div>
  )
}

export default Footer