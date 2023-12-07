import React from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  return (
    <div className={styles.sqs_html_content}>
      <div className={styles.contact_container}>
        <div>
          <h3>
            We are a gaming studio dedicated to producing high-quality &
            engaging gaming experiences by integrating blockchain & AI
            technology where it makes sense.
          </h3>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.sliderContent}>
            <div className={styles.ticker_news}>
              <span>
                <span>GAME THE SYSTEM</span>
                <span> GAME THE SYSTEM</span>
                <span> GAME THE SYSTEM</span>
              </span>
            </div>
            <div className={styles.img_set_div}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/654a74bd1fa6e4670f8000e5/cb1b1271-38d6-48c2-a60c-3aee13d5ca07/NewLogo_Circle.png?format=1500w"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.ticker_news}>
        <span>
          <span>GAME THE SYSTEM</span>
          <span> GAME THE SYSTEM</span>
          <span> GAME THE SYSTEM</span>
        </span>
      </div> */}
    </div>
  );
};

export default Slider;
