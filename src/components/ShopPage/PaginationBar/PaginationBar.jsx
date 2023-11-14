import React from "react";
import styles from "./PaginationBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FilterSearchActions } from "../../../stores/search-product-filter";

function PaginationBar(props) {
  const { page, totalPage } = useSelector((state) => state.filterSearch);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(FilterSearchActions.setCurrentPage(Number(page) + 1));
  };
  const handlePrev = () => {
    dispatch(FilterSearchActions.setCurrentPage(Number(page) - 1));
  };
  return (
    <div className={styles.container}>
      {page > 1 && (
        <i onClick={handlePrev} className="fa-solid fa-angles-left fa-xs"></i>
      )}
      <p>{page}</p>
      {page < totalPage && (
        <i onClick={handleNext} className="fa-solid fa-angles-right fa-xs"></i>
      )}
    </div>
  );
}

export default PaginationBar;
