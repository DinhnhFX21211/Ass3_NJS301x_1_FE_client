import React from "react";
import styles from "./OrderDetailPage.module.css";
import { USDollar } from "../../../Utils/Utils";
import OrderDetailTable from "../OrderDetailTable/OrderDetailTable";

function OrderDetails(props) {
  const { order } = props;
  const totalPrice = USDollar.format(Number(order.price)) + " VND";
  return (
    <div className={styles.container}>
      <div className={styles.customer_info}>
        <h2>Information Order</h2>
        <p>ID User: {order.user}</p>
        <p>Full Name: {order.customerInfo.fullName}</p>
        <p>Phone: {order.customerInfo.phone}</p>
        <p>Address: {order.customerInfo.address}</p>
        <p>Total: {totalPrice}</p>
      </div>
      <OrderDetailTable products={order.products} />
    </div>
  );
}

export default OrderDetails;
