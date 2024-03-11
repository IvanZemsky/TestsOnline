import React, { useEffect, useState } from "react";
import tests from "../../tests";
import TestCard from "../../components/UI/TestCard/TestCard";
import styles from "./Tests.module.css";
import TestsSearch from "../../components/TestsSearch/TestsSearch";
import EmptyTests from "../../components/EmptyTests/EmptyTests";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useDebounce } from "../../hooks/useDebounce";

const Tests = () => {
   const [category, setCategory] = useState("Все");
   const [searchInputValue, setSearchInputValue] = useState("");

   useEffect(() => {
      const category = localStorage.getItem("category");
      setCategory(category ? category : "Все");
   }, []);

   useEffect(() => {
      localStorage.setItem("category", category);
   }, [category]);

   const filtered = tests
      .filter((test) =>
         category !== "Все" ? test.category === category : test
      )
      .filter(
         // DEBOUNCE !!!
         (test) => {
            const value = searchInputValue.toLowerCase();
            return (
               test.name.toLowerCase().includes(value) ||
               test.desc.toLowerCase().includes(value)
            );
         }
      );

   const handleCategoryClick = (category) => {
      setSearchInputValue("");
      setCategory(category);
   };

   return (
      <div className={styles.tests}>
         <div className={[styles.testsContent, "wrapper"].join(" ")}>
            <div className={styles.panel}>
               <TestsSearch
                  searchInputValue={searchInputValue}
                  setSearchInputValue={setSearchInputValue}
               />
               <CategoryList handleCategoryClick={handleCategoryClick} />
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
