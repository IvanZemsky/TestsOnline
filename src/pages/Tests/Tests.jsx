import React, { useState } from "react";
import tests from "../../tests";
import TestCard from "../../components/UI/TestCard/TestCard";
import styles from "./Tests.module.css";
import TestsSearch from "../../components/TestsSearch/TestsSearch";

const Tests = () => {
   const [filterInputValue, setFilterInputValue] = useState("");

   // state for tests
   // getting from useEffect
   // loader

   const filtered = tests.filter(
      // DEBOUNCE !!!
      (test) => {
         const value = filterInputValue.toLowerCase();
         return (
            test.name.toLowerCase().includes(value)
            || test.desc.toLowerCase().includes(value)
         );
      }
   );

   return (
      <div className="tests">
         <div className={[styles.testsContent, "wrapper"].join(" ")}>
            <TestsSearch
               filterInputValue={filterInputValue}
               setFilterInputValue={setFilterInputValue}
            />
            <div className={styles.tests}>
               {filtered.map((test) => (
                  <TestCard key={test.id} test={test} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Tests;
