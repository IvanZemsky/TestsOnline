import React from "react";
import styles from "./TestsSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../store/slices/filterSlice";

const TestsSearch = () => {
   const dispatch = useDispatch();

   const searchText = useSelector(state => state.filter.filters.searchText)

   return (
      <input
         type="text"
         className={styles.testsSearch}
         placeholder="Поиск"
         onChange={(event) =>
            dispatch(setSearchText((event.target.value)))
         }
         value={searchText}
      />
   );
};

export default TestsSearch;
