import React, { useEffect, useState } from "react";
import TestCard from "../../components/UI/TestCard/TestCard";
import styles from "./Tests.module.css";
import TestsSearch from "../../components/TestsSearch/TestsSearch";
import EmptyTests from "../../components/EmptyTests/EmptyTests";
import CategoryList from "../../components/CategoryList/CategoryList";
import useFilter from "../../hooks/useFilter";

const Tests = () => {

   const {previews, error, isLoading} = useFilter();

   return (
      <main className={styles.tests}>
         <div className={[styles.testsContent, "wrapper"].join(" ")}>
            <div className={styles.panel}>
               <TestsSearch/>
               <CategoryList/>
            </div>

            <div className={styles.testCards}>
               {previews ? (
                  previews.map((preview) => <TestCard key={preview.id} test={preview} />)
               ) : (
                  <EmptyTests />
               )}
            </div>
         </div>
      </main>
   );
};

export default Tests;
