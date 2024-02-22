import React from "react";
import styles from './NextQuestionBtn.module.css'
import RightArrow from "../icons/RightArrow";

const AQUA = "#BBD6FF";

const NextQuestionBtn = ({onNextQuestionClick, selectedAnswerIndex}) => {
   const isAnswerSelected = !selectedAnswerIndex;
   return (
      <button
         type="button"
         className={styles.nextQuestionBtn}
         onClick={onNextQuestionClick}
         disabled={isAnswerSelected}
      >
         <RightArrow fill={AQUA} />
      </button>
   );
};

export default NextQuestionBtn;
