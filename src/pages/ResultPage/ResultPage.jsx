import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ResultPage.module.css";
import ResultQuestion from "../../components/ResultQuestion/ResultQuestion";

const ResultPage = () => {
   const { id } = useParams();

   const test = useSelector((state) => state.test.currentTest);
   const resultCounter = useSelector(
      (state) => state.test.currentResultCounter
   );
   const results = useSelector((state) => state.test.results).find(
      (result) => result.testId === +id
   ).results;
   console.log(results);

   return (
      <div className={styles.resultPage}>
         <div className={[styles.cotent, "wrapper"].join(" ")}>
            <h1 className={styles.testName}>{test.name}</h1>
            <p className={styles.resultCounter}>
               Результат: {resultCounter} / {test.questions.length}
            </p>

            <section className={styles.questions}>
               {test.questions.map((question, i) => (
                  <ResultQuestion
                     key={i}
                     question={question}
                     results={results}
                     index={i}
                  />
               ))}
            </section>
         </div>
      </div>
   );
};

export default ResultPage;
