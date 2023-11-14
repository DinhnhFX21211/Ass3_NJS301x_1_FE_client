import React from "react";
import styles from "./BillingForm.module.css";
import FormControl from "../../../UI/FormControl/FormControl";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../../stores/cart";
import { ShopAPI } from "../../../apis/shopAPIs";
import { enqueueSnackbar } from "notistack";

function BillingForm(props) {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const res = await ShopAPI.order(formProps);
    if (res.status === 200) {
      dispatch(CartActions.resetCart());
      enqueueSnackbar("Order success!", { variant: "success" });
      navigate("/");
    } else {
      enqueueSnackbar("Order Fail!", { variant: "error" });
    }
  };
  return (
    <Form
      onSubmit={handleSubmit}
      method="post"
      action="/checkout"
      className={styles.container}
    >
      <FormControl
        required
        name="fullName"
        label="Full name:"
        defaultValue={currentUser.fullName}
      />
      <FormControl
        type="text"
        name="email"
        label="Email:"
        defaultValue={currentUser.email}
      />
      <FormControl
        required
        name="phone"
        label="Phone number:"
        defaultValue={currentUser.phone}
      />
      <FormControl
        required
        name="address"
        label="Address:"
        placeholder="Enter your address here"
      />
      {currentUser && <button>Place order</button>}
    </Form>
  );
}

export default BillingForm;
