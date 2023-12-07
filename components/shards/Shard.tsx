import React from "react";
import Header from "../header/Header";
import ShardsIntro from "./ShardsIntro";
import UtilitiesOfShards from "./UtilitiesOfShards";
import Footer from "../footer/Footer";
import styles from "./Shard.module.scss";

const Shard = () => {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <ShardsIntro />
        <UtilitiesOfShards />
        <Footer />
      </div>
    </>
  );
};

export default Shard;
