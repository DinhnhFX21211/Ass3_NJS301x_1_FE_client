import React from "react";
import styles from "./CategoryFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FilterSearchActions } from "../../../stores/search-product-filter";

const DUMMY_CATEGORY = [
  { title: "apple", categories: ["all"] },
  { title: "iphone & mac", categories: ["iphone", "ipod", "macbook"] },
  { title: "wireless", categories: ["airpod", "watch"] },
  { title: "other", categories: ["mouse", "keyboard", "other"] },
];

function CategoryFilter(props) {
  const { category } = useSelector((state) => state.filterSearch);
  const dispatch = useDispatch();
  const handleSelectCate = (categoryText) => {
    if (categoryText === "all") {
      dispatch(FilterSearchActions.setFilterCategory(""));
    } else {
      dispatch(FilterSearchActions.setFilterCategory(categoryText));
    }
  };

  const isCategorySelected = (cate) => {
    return cate === category ? styles["is-selected"] : "";
  };
  return (
    <ul className={styles.container}>
      <h3>Categories</h3>
      {DUMMY_CATEGORY.map((category, index) => (
        <li key={index}>
          <h4>{category.title}</h4>
          {category.categories.map((subCate, subIndex) => (
            <p
              className={isCategorySelected(subCate)}
              onClick={() => handleSelectCate(subCate)}
              key={subIndex}
            >
              {subCate}
            </p>
          ))}
        </li>
      ))}
    </ul>
  );
}

export default CategoryFilter;
