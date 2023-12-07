import React from "react";
import Footer from "../footer/Footer";
import styles from "./Career.module.scss";
import CareerHomePage from "./CareerHomePage";
import Header from "../header/Header";
import JobPostings from "./JobPostings";

const Career = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.image_container}>
          <Header />
          <CareerHomePage />
        </div>
        <JobPostings />
        <Footer />
      </div>
    </>
  );
};

export default Career;
