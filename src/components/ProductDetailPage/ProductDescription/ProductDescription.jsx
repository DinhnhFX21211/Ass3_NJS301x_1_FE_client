import React, { useContext } from "react";
import styles from "./ProductDescription.module.css";
import ProductDetailContext from "../../../stores/productDetailContext";

function ProductDescription(props) {
  const { productDetail } = useContext(ProductDetailContext);
  return (
    <div className={styles.container}>
      <h4>Description</h4>
      <h3>Product description</h3>
      <pre>{productDetail.long_desc}</pre>
    </div>
  );
}

export default ProductDescription;
