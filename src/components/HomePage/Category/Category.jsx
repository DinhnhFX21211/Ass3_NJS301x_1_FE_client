import React from "react";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";

const DUMMY_IMG_CATEGORY = [
  "/images/product_1.png",
  "/images/product_2.png",
  "/images/product_3.png",
  "/images/product_4.png",
  "/images/product_5.png",
];

function Category(props) {
  return (
    <div className={styles.container}>
      <p>Carefully created collections</p>
      <h3>Browse our categories</h3>
      <div className={styles.imgs}>
        {DUMMY_IMG_CATEGORY.map((item, index) => (
          <Link key={index} to="/shoppage" className={styles.wrapper}>
            <img src={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
