import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className={styles.container}>
      <img src="/images/banner1.jpg" />
      <div className={styles.inner}>
        <p>New inspiration 2020</p>
        <h1>20% off on new season</h1>
        <Link to="/shoppage">Browse collections</Link>
      </div>
    </div>
  );
}

export default Banner;
