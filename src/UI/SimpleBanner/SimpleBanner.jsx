import React from "react";
import styles from "./SimpleBanner.module.css";
import { Link } from "react-router-dom";

function SimpleBanner(props) {
  const { isCheckoutBanner = false } = props;
  return (
    <div className={styles.container}>
      <h1>{props.bannerName}</h1>
      {!isCheckoutBanner && <p>{props.bannerName}</p>}
      {isCheckoutBanner && (
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <p>Checkout</p>
        </div>
      )}
    </div>
  );
}

export default SimpleBanner;
