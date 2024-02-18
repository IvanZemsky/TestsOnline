import React, { memo } from "react";
import styles from "./QuestionTitle.module.css";

const QuestionTitle = memo(({questionTitle}) => {
   return (
      <div className={styles.questionTitleWrap}>
         <h2 className={styles.questionTitle}>{questionTitle}</h2>
         <p className={styles.questionSelection}>
            <span>0</span>
            <span>/</span>
            <span>1</span>
         </p>
      </div>
   );
});

export default QuestionTitle;
