import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { USDollar } from "../../../Utils/Utils";
import AmountInput from "../../../UI/AmountInput/AmountInput";
import { useDispatch } from "react-redux";
import { CartActions } from "../../../stores/cart";
import { ShopAPI } from "../../../apis/shopAPIs";
import { enqueueSnackbar } from "notistack";

function CartItem(props) {
  const {
    cartItem: { quantity, product },
  } = props;
  const [itemAmount, setItemAmount] = useState(quantity);
  const dispatch = useDispatch();

  const updateStateCart = async (amount) => {
    const obj = {
      productId: product._id,
      quantity: amount,
    };
    const res = await ShopAPI.updateItemQuantity({
      productId: product._id,
      quantity: amount,
    });
    if (res.status === 200) {
      dispatch(CartActions.updateCartItem(obj));
    } else {
      enqueueSnackbar(res.data.message, { variant: "error" });
    }
  };

  useEffect(() => {
    setItemAmount(quantity);
  }, [quantity]);

  useEffect(() => {
    if (quantity !== itemAmount) {
      updateStateCart(itemAmount);
    }
  }, [itemAmount]);

  const handleDecreaseAmount = () => {
    setItemAmount((prev) => prev - 1);
  };

  const handleIncreaseAmount = () => {
    setItemAmount((prev) => prev + 1);
  };

  const handleChangeAmount = (event) => {
    if (event.target.value < 0) {
      handleUpdateAmount(Number(event.target.value) * -1);
    } else if (event.target.value > 0) {
      handleUpdateAmount(Number(event.target.value));
    } else {
      handleUpdateAmount(1);
    }
  };

  const handleUpdateAmount = (newValue) => {
    setItemAmount(newValue);
  };

  const handleDeleteItem = async () => {
    const res = await ShopAPI.removeItemFromCart({ productId: product._id });
    if (res.status === 200) {
      dispatch(CartActions.deleteCartItem(product._id));
      enqueueSnackbar("Remove item success", { variant: "success" });
    } else {
      enqueueSnackbar("Remove item fail", { variant: "error" });
    }
  };

  const price = USDollar.format(product.price) + " VND";
  const totalPrice = USDollar.format(itemAmount * product.price) + " VND";
  return (
    <tr className={styles.container}>
      <td className={styles.wrapper}>
        <img alt={product.name} src={`${product.img1}`} />
      </td>
      <td>
        <h4>{product.name}</h4>
      </td>
      <td>{price}</td>
      <td>
        <AmountInput
          handleChangeAmount={handleChangeAmount}
          handleDecreaseAmount={handleDecreaseAmount}
          handleIncreaseAmount={handleIncreaseAmount}
          amount={itemAmount}
        />
      </td>
      <td>{totalPrice}</td>
      <td className={styles.actions}>
        <button onClick={handleDeleteItem}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
