import React from "react";
import styles from "./CouponInput.module.css";

function CouponInput(props) {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Enter your coupon" />
      <button>
        <i className="fa-solid fa-gift"></i>Apply coupon
      </button>
    </div>
  );
}

export default CouponInput;
