import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import GameDetailHomePage from "./GameDetailHomePage";
import styles from "./GameDetail.module.scss";

const GameDetail = () => {
  return (
    <div className={styles.body}>
      <Header />
      <GameDetailHomePage />
      <Footer />
    </div>
  );
};

export default GameDetail;
