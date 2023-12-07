import React from "react";
import styles from "./ShardsIntro.module.scss";

const ShardsIntro = () => {
  return (
    <>
      <div className={styles.sqs_html_content}>
        <div className={styles.contact_container}>
          <div>
            <h2>$SHARDS</h2>
          </div>
          <div className={styles.sqs_phe_content}>
            <p>
              $SHARDS are the ultimate utility token for the Flux Point
              ecosystem. 50% was airdropped on 8.10.23 to holders of Flux Point
              Team Passes (Cardano policy ID
              0889a2d542897f0c7eefed47d2d809bd8d8ec78881bd4ff9464f683a). The
              remaining 50% will be distributed through in-game rewards and
              other game mechanisms.
            </p>
          </div>
          <div className={styles.sqs_phe_info}>
            <p>
              Max Supply: 525,000 <br />
              Cardano Policy ID:
              ea153b5d4864af15a1079a94a0e2486d6376fa28aafad272d15b243a
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShardsIntro;
