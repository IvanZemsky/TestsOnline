import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ResultPage.module.css";
import ResultQuestion from "../../components/ResultQuestion/ResultQuestion";
import EmptyResult from "../../components/EmptyResult/EmptyResult";
import { testAPI } from "../../services/TestService";

const Result = () => {
   let { id } = useParams();
   id = +id;

   const testResults = useSelector((state) => state.test.results).find(
      (result) => result.testId === id
   );

   const {data: test, error, isLoading} = testAPI.useFetchTestQuery(id)

   if (!testResults) return <EmptyResult testId={id}/>

   const resultCounter = testResults.resultCounter

   return (
      isLoading ? (<p>Loading</p>) :
      <main className={styles.resultPage}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <header className={styles.resultHeader}>
               <h1 className={styles.testName}>{test.name}</h1>
               <p className={styles.resultCounter}>
                  Результат: {resultCounter} / {test.questions.length}
               </p>
            </header>

            <ul className={styles.questions}>
               {test.questions.map((question, i) => (
                  <ResultQuestion
                     key={i}
                     question={question}
                     results={testResults.results}
                     index={i}
                  />
               ))}
            </ul>
         </div>
      </main>
   );
};

export default Result;
