import React from "react";
import styles from "./FormControl.module.css";

function FormControl(props) {
  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <input {...props} />
    </div>
  );
}

export default FormControl;
