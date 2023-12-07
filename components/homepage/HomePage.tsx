import Header from '../header/Header'
import ContactUs from './ContactUs'
import Footer from '../footer/Footer'
import React from 'react'
import Slider from './Slider'
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.body}>
      <Header />
      <Slider/>
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default HomePage;