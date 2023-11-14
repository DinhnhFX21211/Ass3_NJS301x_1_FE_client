import React, { useState } from "react";
import styles from "./Products.module.css";
import { json, useLoaderData } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import ModalProductContainer from "../../Modal/ProductDetailModal";
import { PopupActions } from "../../../stores/popup-detail";
import { ProductAPI } from "../../../apis/productAPIs";

function Products(props) {
  const data = useLoaderData();
  const dispatch = useDispatch();
  const { isDisplay } = useSelector((state) => state.popup);
  const [resetPopup, setResetPopup] = useState(false);

  const handleClickProduct = (data) => {
    dispatch(PopupActions.showPopup());
    dispatch(PopupActions.setCurrentProduct(data));
    setResetPopup(true);
  };

  return (
    <div className={styles.container}>
      <p>Made the hard way</p>
      <h3>Top trending products</h3>
      <ul className={styles.products}>
        {data.map((product, index) => (
          <ProductItem
            onSelectProduct={handleClickProduct}
            key={index}
            data={product}
          />
        ))}
      </ul>
      {resetPopup && isDisplay && <ModalProductContainer />}
    </div>
  );
}

export default Products;

export const loader = async () => {
  const response = await ProductAPI.trending();
  if (response?.status !== 200) {
    throw json({ message: "Something went wrong" }, { status: 500 });
  }
  return response?.data || [];
};
