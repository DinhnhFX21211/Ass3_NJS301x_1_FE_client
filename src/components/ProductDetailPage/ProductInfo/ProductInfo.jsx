import React, { useContext } from "react";
import styles from "./ProductInfo.module.css";
import ProductDetailContext from "../../../stores/productDetailContext";
import { USDollar } from "../../../Utils/Utils";
import AddToCart from "../AddToCart/AddToCart";

function ProductInfo(props) {
  const { productDetail } = useContext(ProductDetailContext);
  const price = USDollar.format(productDetail.price) + " VND";
  return (
    <div className={styles.container}>
      <h1>{productDetail.name}</h1>
      <h3>{price}</h3>
      <p className={styles.desc}>{productDetail.short_desc}</p>

      <div className={styles.category}>
        <h5>Category:</h5>
        <p>{productDetail.category}</p>
      </div>

      <AddToCart product={productDetail} />
    </div>
  );
}

export default ProductInfo;
