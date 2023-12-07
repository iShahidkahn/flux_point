import React from "react";
import styles from "./UtilitiesOfShards.module.scss";

const UtilitiesOfShards = () => {
  return (
    <div className={styles.sqs_block_content}>
      <div className={styles.sqs_block_main_content}>
        <div className={styles.sqs_html_content}>
          <div className={styles.utility_title_content}>
            <h4>THE 13 UTILITIES OF $SHARDS</h4>
          </div>
          <div className={styles.sub_title_content}>
            <p>1. Governance Voting</p>
            <p>2. Crafting Material</p>
            <p>3. Access to Exclusive Products, Events, and Areas</p>
            <p>4. Daily/Weekly Quests Rewards</p>
            <p>5. Skill-Based Rewards</p>
            <p>6. Time-Locked Mechanics</p>
            <p>7. Decay Mechanisms</p>
            <p>8. Stake on Skill</p>
            <p>9. Skill Multipliers</p>
            <p>10. Leaderboard Incentives</p>
            <p>11. Sponsorship & Patronage</p>
            <p>12. Community Pools</p>
            <p>13. Skill Development</p>
          </div>
        </div>
        <div className={styles.sqs_icon}>
          <img src="./static/images/shards.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UtilitiesOfShards;
