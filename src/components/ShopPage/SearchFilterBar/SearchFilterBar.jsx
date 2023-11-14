import React, { useEffect, useState } from "react";
import styles from "./SearchFilterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FilterSearchActions } from "../../../stores/search-product-filter";

function SearchFilterBar(props) {
  const { productName } = useSelector((state) => state.filterSearch);
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState(productName);

  const handleChange = (event) => {
    setNameValue(event.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(FilterSearchActions.setFilterName(nameValue));
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [nameValue]);

  return (
    <div className={styles.container}>
      <input
        placeholder="Enter search here"
        className={styles.input}
        type="text"
        value={nameValue}
        onChange={handleChange}
      />
      <select>
        <option>Default sorting</option>
      </select>
    </div>
  );
}

export default SearchFilterBar;
