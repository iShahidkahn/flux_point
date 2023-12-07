import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import GameHomePage from './GameHomePage'
import styles from "./Game.module.scss";

const Games = () => {
  return (
    <div className={styles.body}>
      <Header/>
      <GameHomePage/>
      <Footer/>
    </div>
  )
}

export default Games