import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import TextField from "../../../UI/TextField/TextField";
import styles from "./RegisterForm.module.css";
import { enqueueSnackbar } from "notistack";
import { AuthAPI } from "../../../apis/authAPIs";

function RegisterForm(props) {
  const [errors, setErrors] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [fullName, setFullName] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      fullName: fullName,
      email: email,
      password: password,
      phone: phone,
      role: "CUSTOMER",
    };
    const res = await AuthAPI.signup(newUser);
    if (res.status !== 201) {
      setErrors(res.data.message);
      enqueueSnackbar("Sign Up Fail!", { variant: "error" });
    } else {
      enqueueSnackbar("Sign Up Success!", { variant: "success" });
      navigate("/login");
    }
  };

  return (
    <Form onSubmit={handleSubmit} method="post">
      {errors && (
        <>
          <p className={`${styles["error-text"]}`}>{errors}</p>
        </>
      )}
      <TextField
        type="text"
        name="fullName"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        className={styles.button}
        type="submit"
        style={{ marginBlock: "1rem" }}
      >
        Sign up
      </button>
    </Form>
  );
}

export default RegisterForm;
