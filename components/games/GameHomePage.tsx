import React from "react";
import styles from "./GameHomePage.module.scss";
import Link from "next/link";
const GameHomePage = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.cards_container}>
        <div className={styles.outer_container}>
          <Link href="/games/game-detail">
            <div className={styles.cards_contain}>
              <div className={styles.service_card}>
                <img src="./static/images/PFPPB_Logo_Transparent.png" alt="" />
              </div>
              <div className={styles.service_card_container}>
                <div className={styles.service_card_text}>
                  <p>Pit Brawl</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.outer_container}>
          <Link href="/games/trib3">
            <div className={styles.cards_contain}>
              <div className={styles.service_card}>
                <img src="./static/images/char.png" alt="" />
              </div>
              <div className={styles.service_card_container}>
                <div className={styles.service_card_text}>
                  <p>Trib3</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.outer_container}>
          <Link href="web-development-services">
            <div className={styles.cards_contain}>
              <div className={styles.service_card}>
                <img src="./static/images/char.png" alt="" />
              </div>
              <div className={styles.service_card_container}>
                <div className={styles.service_card_text}>
                  
                    <p>Trib3</p>
                  
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameHomePage;
