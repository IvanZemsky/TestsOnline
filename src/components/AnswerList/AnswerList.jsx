import React from "react";
import Answer from "../Answer/Answer";
import styles from './AnswerList.module.css'

const AnswerList = ({ answers }) => {
   return (
      <div className={styles.answersList}>
         {answers.map((answer, i) => (
            <Answer key={answer + i} answer={answer} />
         ))}
      </div>
   );
};

export default AnswerList;
