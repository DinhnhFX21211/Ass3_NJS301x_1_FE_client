import React from "react";
import styles from "./TextField.module.css";

function TextField(props) {
  const stylesClasses = props.error?.isError
    ? `${styles["container"]} ${styles["invalid"]}`
    : `${styles["container"]}`;

  return (
    <div className={stylesClasses}>
      <input {...props} className={`${styles.input} ${props.className}`} />
      {props.error?.isError && (
        <p className={`${styles["error-text"]}`}>{props.error.messsage}</p>
      )}
    </div>
  );
}

export default TextField;
