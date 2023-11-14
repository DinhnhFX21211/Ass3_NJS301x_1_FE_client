import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserAction from "../UserAction/UserAction";

function Header(props) {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div className={styles.container}>
      <ul className={`${styles["right-site"]}`}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/shoppage"
          >
            Shop
          </NavLink>
        </li>
        {currentUser && (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/history"
            >
              History
            </NavLink>
          </li>
        )}
      </ul>
      <h2>Boutique</h2>
      <ul className={`${styles["left-site"]}`}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/cart"
          >
            <i className="fa-solid fa-cart-flatbed"></i>
            Cart
          </NavLink>
        </li>
        <li>
          <i className="fa-solid fa-user"></i>
          {!currentUser && <NavLink to="/login">Login</NavLink>}
          {currentUser && <UserAction user={currentUser} />}
        </li>
      </ul>
    </div>
  );
}

export default Header;
