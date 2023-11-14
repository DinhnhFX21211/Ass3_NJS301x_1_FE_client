import React, { useEffect, useState } from "react";
import styles from "./ContainerSearch.module.css";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ProductResult from "../ProductsResult/ProductResult";
import { ProductAPI } from "../../../apis/productAPIs";
import { useDispatch, useSelector } from "react-redux";
import { FilterSearchActions } from "../../../stores/search-product-filter";

function ContainerSearch(props) {
  const { category, productName, page } = useSelector(
    (state) => state.filterSearch
  );
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await ProductAPI.searchProduct(
        { productName, category },
        page
      );
      if (res.status === 200) {
        setProducts(res.data);
        dispatch(FilterSearchActions.setCurrentPage(res.data.page));
        dispatch(FilterSearchActions.setTotalPage(res.data.total_pages));
      }
    };
    fetchProduct();
  }, [category, productName, page]);

  return (
    <div className={styles.container}>
      <CategoryFilter />
      {products.results?.length === 0 && <p>Product not found</p>}
      {products.results?.length > 0 && <ProductResult products={products} />}
    </div>
  );
}

export default ContainerSearch;
