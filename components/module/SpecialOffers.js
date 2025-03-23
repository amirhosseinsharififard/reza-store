import React from "react";
import SwiperSpecialOffers from "./SwiperSpecialOffers";
import styles from "./SpecialOffers.module.css";
const SpecialOffers = () => {
  return (
    <div className={styles.container}>
    <div className={styles.m1}>

      <div className={styles.header}>
        <h3>پیشنهاد ویژه</h3>
        <span>10:20:30</span>
      </div>
      <div>
        <SwiperSpecialOffers />
      </div>
    </div>
    </div>
  );
};

export default SpecialOffers;
