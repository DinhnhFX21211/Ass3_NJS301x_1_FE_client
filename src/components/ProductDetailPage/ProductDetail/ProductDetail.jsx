import React from "react";
import styles from "./ProductDetail.module.css";
import ProductImg from "../ProductImg/ProductImg";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductDescription from "../ProductDescription/ProductDescription";
import RelatedProduct from "../RelatedProduct/RelatedProduct";

function ProductDetail(props) {
  return (
    <div className={styles.container}>
      <div className={`${styles["img-info"]}`}>
        <ProductImg />
        <ProductInfo />
      </div>
      <div className={`${styles["descript-related"]}`}>
        <ProductDescription />
        <RelatedProduct />
      </div>
    </div>
  );
}

export default ProductDetail;
