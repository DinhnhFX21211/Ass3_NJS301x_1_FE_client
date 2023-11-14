import React from "react";
import styles from "./FormSubcribe.module.css";

function FormSubcribe(props) {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <h2>Let's be friends!</h2>
        <p>Nisi nisi tempor consequat laboris nisi.</p>
      </div>
      <form>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </form>
    </div>
  );
}

export default FormSubcribe;
