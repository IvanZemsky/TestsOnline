import React, { useState } from "react";
import TestCard from "../../components/UI/TestCard/TestCard";
import styles from "./Tests.module.css";
import EmptyTests from "../../components/EmptyTests/EmptyTests";
import useFilter from "../../hooks/useFilter";
import TestsPanel from "./../../components/UI/TestsPanel/TestsPanel";
import Loading from "../../components/Loading/Loading";
import Wrapper from "./../../components/UI/Wrapper/Wrapper";

const Tests = () => {
   const { previews, error, isLoading } = useFilter();

   return (
      <main className={styles.tests}>
         <TestsPanel />

         {isLoading ? <Loading />
          : (
            <Wrapper additonalStyles={[styles.testsContent]}>
               <div className={styles.testCards}>
                  {error || !previews.length ? <EmptyTests />
                  : (
                     previews.map((preview) => (
                        <TestCard key={preview.id} test={preview} />
                     ))
                  )}
               </div>
            </Wrapper>
         )}
      </main>
   );
};

export default Tests;
