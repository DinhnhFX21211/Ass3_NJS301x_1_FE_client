import React from "react";
import styles from "./SubItem.module.css";
import { USDollar } from "../../../Utils/Utils";

function SubItem(props) {
  const {
    data: { product, quantity },
  } = props;
  const price = USDollar.format(product.price) + " VND";
  return (
    <li className={styles.container}>
      <h5>{product.name}</h5>
      <p>{`${price} x ${quantity}`}</p>
    </li>
  );
}

export default SubItem;
