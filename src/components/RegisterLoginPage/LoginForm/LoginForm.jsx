import React, { useState } from "react";
import TextField from "../../../UI/TextField/TextField";
import { Form, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../stores/auth";
import { AuthAPI } from "../../../apis/authAPIs";
import { enqueueSnackbar } from "notistack";
import { CartActions } from "../../../stores/cart";

function LoginForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await AuthAPI.login({
      email: email,
      password: password,
    });
    if (res.status !== 200) {
      setErrors(res.data.message);
      enqueueSnackbar("Login Fail!", { variant: "error" });
    } else {
      enqueueSnackbar("Login Success!", { variant: "success" });
      handleUserLogin(res.data.user);
    }
  };
  const handleUserLogin = (user) => {
    dispatch(CartActions.setCurrentUserCart(user.cart.items));
    dispatch(AuthActions.onLogin(user));
    navigate("/");
  };
  return (
    <Form onSubmit={handleSubmit} method="post">
      {errors && (
        <>
          <p className={`${styles["error-text"]}`}>{errors}</p>
        </>
      )}
      <TextField
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{ marginBlock: "1rem" }}
        type="submit"
        className={styles.button}
      >
        Sign in
      </button>
    </Form>
  );
}

export default LoginForm;
