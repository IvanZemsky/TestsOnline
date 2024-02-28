import React from "react";
import styles from "./TestsSearch.module.css";

const TestsSearch = ({ filterInputValue, setFilterInputValue }) => {
   return (
      <input
         type="text"
         className={styles.testsSearch}
         placeholder="Поиск"
         onChange={(event) =>
            setFilterInputValue(event.target.value)
         }
         value={filterInputValue}
      />
   );
};

export default TestsSearch;
