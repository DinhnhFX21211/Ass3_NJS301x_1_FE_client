import React, { useState } from "react";
import styles from "./AddToCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../../stores/cart";
import AmountInput from "../../../UI/AmountInput/AmountInput";
import { ShopAPI } from "../../../apis/shopAPIs";
import { enqueueSnackbar } from "notistack";

function AddToCart(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const [amount, setAmount] = useState(1);
  const [outOfStockErr, setErr] = useState();
  const isLogin = currentUser ? true : false;

  const handleDecreaseAmount = () => {
    setAmount((prev) => prev - 1);
  };

  const handleIncreaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const handleChangeAmount = (event) => {
    if (event.target.value < 0) setAmount(event.target.value * -1);
    else if (event.target.value > 0) setAmount(event.target.value);
    else setAmount(1);
  };

  const handleAddToCart = async () => {
    const cartItem = {
      quantity: amount,
      product: product,
    };
    const res = await ShopAPI.addToCart({
      productId: product._id,
      quantity: amount,
    });
    if (res.status === 200) {
      dispatch(CartActions.addItemToCart(cartItem));
      enqueueSnackbar("Add to cart Success!", { variant: "success" });
    } else {
      enqueueSnackbar("Add to cart Fail!", { variant: "error" });
      setErr(res.data.message);
    }
  };

  if (!isLogin) {
    return (
      <p className={styles.nofi}>
        You need to log in to add products to your shopping cart.
      </p>
    );
  }

  if (product.inventoryQuantity === 0) {
    return <p className={styles.nofi}>This product is out of stock</p>;
  }

  return (
    <>
      <div className={styles.container}>
        <span>quantity</span>
        <AmountInput
          handleChangeAmount={handleChangeAmount}
          handleDecreaseAmount={handleDecreaseAmount}
          handleIncreaseAmount={handleIncreaseAmount}
          amount={amount}
        />

        <button onClick={handleAddToCart} className={`${styles["add-button"]}`}>
          Add to cart
        </button>
      </div>
      {outOfStockErr && <p>{outOfStockErr}</p>}
    </>
  );
}

export default AddToCart;
