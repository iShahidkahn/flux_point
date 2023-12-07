import React from "react";
import styles from "./JobPostings.module.scss";

const JobPostings = () => {
  return (
    <div>
      <div className={styles.JobPostings_container}>
        <h2>Job Postings</h2>
        
      </div>
      <div className={styles.JobPostings_block_contain}>
        <div className={styles.JobPostings_block}>
          <ul data-rte-list="default" className={styles.jobul}>
            <li>
              <h3>
                <a href="">Social Media Manager (X)</a>
              </h3>
            </li>
          </ul>
          <ul data-rte-list="default" className={styles.jobul}>
            <li>
              <h3>
                <a href="">Community Manager (DISCORD)</a>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobPostings;
