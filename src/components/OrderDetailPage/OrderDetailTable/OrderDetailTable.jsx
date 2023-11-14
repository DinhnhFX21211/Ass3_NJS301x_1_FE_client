import React from "react";
import styles from "./OrderDetailTable.module.css";
import ProductDetailsItem from "../ProductDetailsItem/ProductDetailsItem";

function OrderDetailTable(props) {
  const { products } = props;
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr className={styles.header}>
            <th>ID Product</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <ProductDetailsItem key={index} product={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetailTable;
