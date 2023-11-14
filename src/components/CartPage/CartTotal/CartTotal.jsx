import React from "react";
import styles from "./CartTotal.module.css";
import { useSelector } from "react-redux";
import { USDollar } from "../../../Utils/Utils";
import CouponInput from "../CouponInput/CouponInput";

function CartTotal(props) {
  const { cartList } = useSelector((state) => state.cart);
  const totalNumber = cartList.reduce(
    (sum, current) => sum + current.quantity * current.product.price,
    0
  );

  const totalFormated = USDollar.format(totalNumber) + " VND";
  return (
    <div className={styles.container}>
      <h2>Cart total</h2>
      <div className={styles.sub}>
        <h4>Subtotal</h4>
        <p>{totalFormated}</p>
      </div>
      <div className={styles.total}>
        <h4>Total</h4>
        <p>{totalFormated}</p>
      </div>
      <CouponInput />
    </div>
  );
}

export default CartTotal;
