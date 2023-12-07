import React from "react";
import styles from "./GameDetailHomePage.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GameDetailHomePage = () => {
  return (
    <div className={styles.sqs_block_content}>
      <div className={styles.sqs_block_main_content}>
        <div className={styles.sqs_html_content}>
          <div className={styles.sub_title_content}>
            <p>
              Dive into the electrifying arena of PFP Pit Brawl, a turn-based
              combat game that revolutionizes the blockchain gaming space.
            </p>
            <p>
              Engage in strategic battles where every move counts, and outsmart
              your opponents to reign supreme. With its unique
              player-versus-player mechanics, PFP Pit Brawl offers an immersive
              experience that combines skill, strategy, and a touch of luck.
            </p>
            <p>
              Built in Unity WebGL, Pit Brawl offers an ultra-low barrier to
              entry for players from web2 and web3 gaming. Bring your digital
              avatars to life in a spectacle of intense combat. Each character
              is not just a fighter but an NFT, offering true ownership and a
              tangible connection to the game world.{" "}
            </p>
            <p>
              Climb the ranks, immortalize your legacy, and earn digital tokens!
            </p>
            <p>
              Join the fray and unleash your potential in the ultimate fight for
              glory in PFP Pit Brawl.
            </p>
          </div>
        </div>
        <div className={styles.sqs_icon}>
          <img src="../static/images/BattleScene_SS.png" alt="" />
        </div>
      </div>
      <div className={styles.centeredButton}>
        <button className={styles.button}>Play Pit Brawl</button>
      </div>
      <div className={styles.item_pagination_next}>
        <div>
          <a href="">TRIB3</a>
        </div>
        <div>
          <IoIosArrowForward className={styles.IoIosArrowForward} />
        </div>
      </div>
      <div className={styles.item_pagination_previus}>
        <div>
          <IoIosArrowBack className={styles.IoIosArrowForward} />
        </div>
        <div>
          <a href="">TRIB3</a>
        </div>
      </div>
    </div>
  );
};

export default GameDetailHomePage;
