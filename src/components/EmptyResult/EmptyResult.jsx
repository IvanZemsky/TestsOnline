import React from "react";
import styles from "./EmptyResult.module.css";
import { Link } from "react-router-dom";
import Wrapper from './../UI/Wrapper/Wrapper';

const EmptyResult = ({ testId }) => {
   return (
      <Wrapper>
         <div className={styles.emptyResult}>
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
      </Wrapper>
   );
};

export default EmptyResult;
