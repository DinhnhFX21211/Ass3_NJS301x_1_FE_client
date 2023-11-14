import React from "react";
import styles from "./AmountInput.module.css";

function AmountInput(props) {
  const {
    handleChangeAmount,
    handleDecreaseAmount,
    handleIncreaseAmount,
    amount,
  } = props;

  const isDisableDecrease = amount === 1;
  return (
    <div className={`${styles["number-input"]}`}>
      <button onClick={handleDecreaseAmount} disabled={isDisableDecrease}>
        <i className="fa-solid fa-caret-left"></i>
      </button>
      <input
        onChange={handleChangeAmount}
        min={1}
        type="number"
        value={amount}
      />
      <button onClick={handleIncreaseAmount}>
        <i className="fa-solid fa-caret-right"></i>
      </button>
    </div>
  );
}

export default AmountInput;
