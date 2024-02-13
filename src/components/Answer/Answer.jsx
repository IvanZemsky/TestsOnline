import React from "react";
import { useDispatch } from "react-redux";
import styles from './Answer.module.css'

const Answer = ({answer}) => {

   return (
      <button type="button"
         className={styles.answerBtn}
      >
         {answer}
      </button>
   );
};

export default Answer;
