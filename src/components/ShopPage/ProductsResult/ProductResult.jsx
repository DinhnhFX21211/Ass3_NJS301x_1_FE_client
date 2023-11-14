import React from "react";
import styles from "./ProductResult.module.css";
import SearchFilterBar from "../SearchFilterBar/SearchFilterBar";
import ProductItem from "../../HomePage/ProductItem/ProductItem";
import PaginationBar from "../PaginationBar/PaginationBar";
import { useNavigate } from "react-router-dom";

function ProductResult(props) {
  const { products } = props;
  const navigate = useNavigate();
  const handleSelect = (data) => {
    navigate(`/products/${data._id}`);
  };
  return (
    <div className={styles.container}>
      <SearchFilterBar />
      <ul>
        {products.results.map((product, index) => (
          <ProductItem
            onSelectProduct={handleSelect}
            key={index}
            data={product}
          />
        ))}
      </ul>
      <PaginationBar />
    </div>
  );
}

export default ProductResult;
