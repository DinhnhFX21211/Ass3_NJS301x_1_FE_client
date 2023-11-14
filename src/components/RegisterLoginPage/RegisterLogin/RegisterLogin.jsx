import React from "react";
import styles from "./RegisterLogin.module.css";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Link, useSearchParams } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

function RegisterLogin(props) {
  const [searchParams] = useSearchParams();
  const modeAuth = searchParams.get("mode") || "login";
  const modeText = modeAuth === "login" ? "register" : "login";
  const isLogin = modeAuth === "login" ? true : false;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>{isLogin ? "Sign in" : "Sign up"}</h1>
        {!isLogin && <RegisterForm />}
        {isLogin && <LoginForm />}
        <div className={`${styles["change-site"]}`}>
          <p>{modeText}?</p>
          <Link to={`?mode=${modeText}`}>Click</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterLogin;
