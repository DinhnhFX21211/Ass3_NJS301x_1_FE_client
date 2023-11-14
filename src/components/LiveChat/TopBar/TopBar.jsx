import React from "react";
import styles from "./TopBar.module.css";

function TopBar(props) {
  return (
    <div className={styles.container}>
      <h4>Customer suport</h4>
      <button>Let's chat app</button>
    </div>
  );
}

export default TopBar;
