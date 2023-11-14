import React from "react";
import styles from "./ProductDetailModal.module.css";
import ReactDOM from "react-dom";
import { USDollar } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PopupActions } from "../../stores/popup-detail";

function ProductDetailModal(props) {
  const { productDetail: product } = useSelector((state) => state.popup);
  const price = USDollar.format(product.price) + " VND";
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(PopupActions.hidePopup());
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <button onClick={handleClick} className={styles.close}>
          <i className="fa-regular fa-circle-xmark fa-xl"></i>
        </button>
        <div className={styles.wrapper}>
          <img alt={product.name} src={`${product.img1}`} />
        </div>
        <div className={styles.info}>
          <div className={styles.inner}>
            <h3>{product.name}</h3>
            <p>{price}</p>
            <p className={styles.desc}>{product.short_desc}</p>
            <Link to={`products/${product._id}`}>
              <i className="fa-solid fa-cart-shopping"></i> View detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalProductContainer(props) {
  return ReactDOM.createPortal(
    <ProductDetailModal />,
    document.getElementById("root-modal")
  );
}

export default ModalProductContainer;
