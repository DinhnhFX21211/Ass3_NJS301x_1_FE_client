import React from "react";
import styles from "./OrderForm.module.css";
import { USDollar } from "../../../Utils/Utils";
import { useSelector } from "react-redux";
import SubItem from "../SubItem/SubItem";

function OrderForm(props) {
  const { cartList } = useSelector((state) => state.cart);
  const totalNumber = cartList.reduce(
    (sum, current) => sum + current.quantity * current.product.price,
    0
  );

  const totalFormated = USDollar.format(totalNumber) + " VND";
  return (
    <div className={styles.container}>
      <h2>Your order</h2>
      <ul>
        {cartList.map((item, index) => (
          <SubItem key={index} data={item} />
        ))}
      </ul>
      <div className={styles.total}>
        <h4>Total</h4>
        <p>{totalFormated}</p>
      </div>
    </div>
  );
}

export default OrderForm;
