import React from "react";
import styles from "./OrderItem.module.css";
import { USDollar } from "../../../Utils/Utils";
import { Link } from "react-router-dom";

function OrderItem(props) {
  const { order } = props;
  const totalPrice = USDollar.format(Number(order.price)) + " VND";
  return (
    <tr className={styles.container}>
      <td>
        <p className={styles.id}>{order._id}</p>
      </td>
      <td>
        <p className={styles.id}>{order.user}</p>
      </td>
      <td>{order.customerInfo.fullName}</td>
      <td>{order.customerInfo.phone}</td>
      <td>{order.customerInfo.address}</td>
      <td>{totalPrice}</td>
      <td>{order.delivery}</td>
      <td>{order.status}</td>
      <td className={styles.actions}>
        <Link className={styles.show_detail} to={`${order._id}`}>
          View
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </td>
    </tr>
  );
}

export default OrderItem;
