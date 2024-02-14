import React, { memo } from "react";
import { useDispatch } from "react-redux";
import styles from "./Answer.module.css";

const Answer = memo(({ answer, id, value, setSelectedAnswerIndex }) => {
   return (
      <div className={styles.answer}>
         <input
            className={styles.answerRadio}
            type="radio"
            id={id}
            name="answer"
            value={value}
            onClick={(e) => setSelectedAnswerIndex(e.target.value)}
         />
         <label className={styles.answerText} htmlFor={id}>
            {answer}
         </label>
      </div>
   );
});

export default Answer;
