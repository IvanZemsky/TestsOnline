import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ResultPage.module.css";
import ResultQuestion from "../../components/ResultQuestion/ResultQuestion";
import tests from "../../tests";
import ResultsError from "../../components/ResultsError/ResultsError";

const ResultPage = () => {
   const { id } = useParams();

   const test = tests.find((test) => test.id === +id); // переписать на запросы

   const testResults = useSelector((state) => state.results.results).find(
      (result) => result.testId === +id
   );

   if (!testResults) return <ResultsError testId={id}/>;

   const resultCounter = testResults.resultCounter;

   return (
      <div className={styles.resultPage}>
         <div className={[styles.content, "wrapper"].join(" ")}>
            <header className={styles.resultHeader}>
               <h1 className={styles.testName}>{test.name}</h1>
               <p className={styles.resultCounter}>
                  Результат: {resultCounter} / {test.questions.length}
               </p>
            </header>

            <section className={styles.questions}>
               {test.questions.map((question, i) => (
                  <ResultQuestion
                     key={i}
                     question={question}
                     results={testResults.results}
                     index={i}
                  />
               ))}
            </section>
         </div>
      </div>
   );
};

export default ResultPage;
