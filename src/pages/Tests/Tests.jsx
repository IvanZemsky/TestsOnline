import React, { useEffect, useState } from "react";
import TestCard from "../../components/UI/TestCard/TestCard";
import styles from "./Tests.module.css";
import TestsSearch from "../../components/TestsSearch/TestsSearch";
import EmptyTests from "../../components/EmptyTests/EmptyTests";
import CategoryList from "../../components/CategoryList/CategoryList";
import { testAPI } from './../../services/TestService';

const Tests = () => {
   const [category, setCategory] = useState("Все");
   const [searchInputValue, setSearchInputValue] = useState("")

   const {data: testPreviews, error, isLoading} = testAPI.useFetchPreviewsQuery('');

   const handleCategoryClick = (category) => {
      setSearchInputValue("");
      setCategory(category);
   };

   return (
      <main className={styles.tests}>
         <div className={[styles.testsContent, "wrapper"].join(" ")}>
            <div className={styles.panel}>
               <TestsSearch
                  searchInputValue={searchInputValue}
                  setSearchInputValue={setSearchInputValue}
               />
               <CategoryList handleCategoryClick={handleCategoryClick} />
            </div>

            <div className={styles.testCards}>
               {testPreviews ? (
                  testPreviews.map((preview) => <TestCard key={preview.id} test={preview} />)
               ) : (
                  <EmptyTests />
               )}
            </div>
         </div>
      </main>
   );
};

export default Tests;
