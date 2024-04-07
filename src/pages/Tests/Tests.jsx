import React from "react";
import TestCard from "../../components/UI/TestCard/TestCard";
import styles from "./Tests.module.css";
import EmptyTests from "../../components/EmptyTests/EmptyTests";
import useFilter from "../../hooks/useFilter";
import TestsPanel from './../../components/UI/TestsPanel/TestsPanel';
import Loading from "../../components/Loading/Loading";

const Tests = () => {
   const { previews, error, isLoading } = useFilter();

   return (
      <main className={styles.tests}>
         <TestsPanel />
         
         {isLoading ? <Loading/> : (
         <div className={[styles.testsContent, "wrapper"].join(" ")}>
            <div className={styles.testCards}>
               {previews && previews.length ?
                  previews.map((preview) => 
                     <TestCard key={preview.id} test={preview} />
                  )
                : <EmptyTests />
               }
            </div>
         </div>)}
         
      </main>
   );
};

export default Tests;
