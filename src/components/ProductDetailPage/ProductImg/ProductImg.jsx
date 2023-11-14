import React, { useContext } from "react";
import styles from "./ProductImg.module.css";
import ProductDetailContext from "../../../stores/productDetailContext";
import { BASE_URL } from "../../../stores/deployUrl";

function ProductImg(props) {
  const { productDetail } = useContext(ProductDetailContext);
  const arrayImg = [
    productDetail.img1,
    productDetail.img2,
    productDetail.img3,
    productDetail.img4,
  ];

  const handleOnClick = (event) => {
    const bigImg = document.getElementById("big-img");
    const clickedImg = event.target.src;
    bigImg.src = clickedImg;
  };

  return (
    <div className={styles.container}>
      <ul className={`${styles["small-img"]}`}>
        {arrayImg.map((img, index) => (
          <li key={index} onClick={handleOnClick}>
            <img src={`${img}`} alt={`small${index}`} />
          </li>
        ))}
      </ul>
      <div className={`${styles["big-img"]}`}>
        <img alt="main" id="big-img" src={`${productDetail.img1}`} />
      </div>
    </div>
  );
}

export default ProductImg;
