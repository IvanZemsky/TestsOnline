import React from "react";
import styles from "./TestsSearch.module.css";

const TestsSearch = ({ searchInputValue, setSearchInputValue }) => {
   return (
      <input
         type="text"
         className={styles.testsSearch}
         placeholder="Поиск"
         onChange={(event) =>
            setSearchInputValue(event.target.value)
         }
         value={searchInputValue}
      />
   );
};

export default TestsSearch;
