import React from "react";
import styles from "./EmptyResult.module.css";
import { Link } from "react-router-dom";

const EmptyResult = ({ testId }) => {
   return (
      <div className={[styles.emptyResult, "wrapper"].join(" ")}>
         <div className={styles.content}>
            <h1 className={styles.title}>Вы ещё не прошли этот тест</h1>
            <div className={styles.links}>
               <Link to={`/tests/${testId}`} className={styles.link}>
                  Перейти к тесту
               </Link>
               <Link to="/tests" className={styles.link}>
                  На страницу тестов
               </Link>
            </div>
         </div>
      </div>
   );
};

export default EmptyResult;
