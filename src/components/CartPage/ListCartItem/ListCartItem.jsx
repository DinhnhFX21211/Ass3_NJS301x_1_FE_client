import React from "react";
import styles from "./ListCartItem.module.css";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

function ListCartItem(props) {
  const { cart } = props;

  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr className={styles.header}>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))}
        </tbody>
      </table>
      <div className={styles.actions}>
        <Link to="/shoppage">
          <i className="fa-solid fa-left-long"></i> Continue shopping
        </Link>

        <Link to="/checkout" className={`${styles["check-out"]}`}>
          Proceed to check out <i className="fa-solid fa-right-long"></i>
        </Link>
      </div>
    </div>
  );
}

export default ListCartItem;
