import React from "react";
import styles from "./BillingDetail.module.css";
import BillingForm from "../BillingForm/BillingForm";
import OrderForm from "../OrderForm/OrderForm";

function BillingDetail(props) {
  return (
    <div className={styles.container}>
      <h2>Billing details</h2>
      <div className={styles.details}>
        <BillingForm />
        <OrderForm />
      </div>
    </div>
  );
}

export default BillingDetail;
