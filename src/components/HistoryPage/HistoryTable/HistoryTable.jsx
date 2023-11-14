import React from "react";
import styles from "./HistoryTable.module.css";
import OrderItem from "../OrderItem/OrderItem";

function HistoryTable(props) {
  const {
    data: { results },
  } = props;
  return (
    <div className={styles.container}>
      {results.length === 0 && <p>You don't have any orders yet</p>}
      {results.length !== 0 && (
        <table>
          <thead>
            <tr className={styles.header}>
              <th>ID Order</th>
              <th>ID User</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Total</th>
              <th>Delivery</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => (
              <OrderItem key={index} order={item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HistoryTable;
