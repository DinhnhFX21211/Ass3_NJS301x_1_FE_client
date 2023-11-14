import React, { useContext } from "react";
import styles from "./RelatedProduct.module.css";
import ProductDetailContext from "../../../stores/productDetailContext";
import ProductItem from "../../HomePage/ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";

function RelatedProduct(props) {
  const { relatedProducts } = useContext(ProductDetailContext);
  const navigate = useNavigate();
  const handleSelect = (data) => {
    navigate(`/products/${data._id}`);
  };
  return (
    <>
      <h3>Related Product</h3>
      <ul className={styles.container}>
        {relatedProducts.map((product, index) => (
          <ProductItem
            key={index}
            data={product}
            onSelectProduct={handleSelect}
          />
        ))}
      </ul>
    </>
  );
}

export default RelatedProduct;
