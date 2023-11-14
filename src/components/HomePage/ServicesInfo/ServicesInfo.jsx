import React from "react";
import styles from "./ServicesInfo.module.css";

function ServicesInfo(props) {
  return (
    <ul className={styles.services}>
      <li className={styles.info}>
        <div className={styles.inner}>
          <h2>Free Shipping</h2>
          <p>Free shipping worlwide</p>
        </div>
      </li>
      <li className={styles.info}>
        <div className={styles.inner}>
          <h2>24 X 7 services</h2>
          <p>Free shipping worlwide</p>
        </div>
      </li>
      <li className={styles.info}>
        <div className={styles.inner}>
          <h2>Festival offer</h2>
          <p>Free shipping worlwide</p>
        </div>
      </li>
    </ul>
  );
}

export default ServicesInfo;
