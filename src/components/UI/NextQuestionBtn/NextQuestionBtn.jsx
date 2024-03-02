import React from "react";
import styles from './NextQuestionBtn.module.css'
import RightArrowIcon from "../icons/RightArrowIcon";

const SEA_BLUE = "#84C4FF";

const NextQuestionBtn = ({onNextQuestionClick, selectedAnswerIndex}) => {
   const isAnswerSelected = !selectedAnswerIndex;
   return (
      <button
         type="button"
         className={styles.nextQuestionBtn}
         onClick={onNextQuestionClick}
         disabled={isAnswerSelected}
      >
         <RightArrowIcon fill={SEA_BLUE} />
      </button>
   );
};

export default NextQuestionBtn;
