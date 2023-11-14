import React from "react";
import styles from "./UserAction.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../../stores/auth";
import { AuthAPI } from "../../../apis/authAPIs";
import { enqueueSnackbar } from "notistack";
import { CartActions } from "../../../stores/cart";

function UserAction(props) {
  const { user } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await AuthAPI.logout();
    if (res.status === 200) {
      enqueueSnackbar("Logout success!", { variant: "success" });
      dispatch(AuthActions.onLogout());
      dispatch(CartActions.resetCart());
      navigate("/login");
    } else {
      enqueueSnackbar("Logout Fail!", { variant: "error" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <h3>{user.fullName}</h3>
        <i className="fa-solid fa-sort-down"></i>
      </div>
      <button onClick={handleLogout}>(Logout)</button>
    </div>
  );
}

export default UserAction;
