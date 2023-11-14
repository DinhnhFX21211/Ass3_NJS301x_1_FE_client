import React from "react";
import styles from "./ProductItem.module.css";
import { USDollar } from "../../../Utils/Utils";

function ProductItem(props) {
  const { data, onSelectProduct } = props;
  const price = USDollar.format(data.price) + " VND";
  return (
    <li onClick={() => onSelectProduct(data)} className={styles.container}>
      <div className={styles.wrapper}>
        <img src={`${data.img1}`} />
      </div>
      <h5>{data.name}</h5>
      <p>{price}</p>
    </li>
  );
}

export default ProductItem;
