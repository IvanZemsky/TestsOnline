import React, { useState } from "react";
import tests from "../../tests";
import TestCard from "../../components/UI/TestCard/TestCard";
import styles from "./Tests.module.css";
import TestsSearch from "../../components/TestsSearch/TestsSearch";
import EmptyTests from "../../components/EmptyTests/EmptyTests";
import { useSelector } from "react-redux";

const Tests = () => {
   const [filterInputValue, setFilterInputValue] = useState("");
   const theme = useSelector((state) => state.theme.theme);
   console.log(theme);

   // state for tests
   // getting from useEffect
   // loader

   const filtered = tests.filter(
      // DEBOUNCE !!!
      (test) => {
         const value = filterInputValue.toLowerCase();
         return (
            test.name.toLowerCase().includes(value) ||
            test.desc.toLowerCase().includes(value)
         );
      }
   );

   return (
      <div className={[styles.tests, styles[theme]].join(" ")}>
         <div className={[styles.testsContent, "wrapper"].join(" ")}>
            <div className={styles.panel}>
               <TestsSearch
                  filterInputValue={filterInputValue}
                  setFilterInputValue={setFilterInputValue}
               />
               <div className={styles.categories}>
                  <button
                     className={[styles.category, styles.current].join(" ")}
                  >
                     Все
                  </button>
                  <button className={styles.category}>Программирование</button>
                  <button className={styles.category}>Математика</button>
                  <button className={styles.category}>Языки</button>
                  <button className={styles.category}>История</button>
               </div>
            </div>

            <div className={styles.testCards}>
               {filtered.length ? (
                  filtered.map((test) => <TestCard key={test.id} test={test} />)
               ) : (
                  <EmptyTests />
               )}
            </div>
         </div>
      </div>
   );
};

export default Tests;
