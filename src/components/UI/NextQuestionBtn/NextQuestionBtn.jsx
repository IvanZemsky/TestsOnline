import React from "react";
import styles from './NextQuestionBtn.module.css'
import RightArrow from "../icons/RightArrow";

const AQUA = "#BBD6FF";

const NextQuestionBtn = ({onNextQuestionClick}) => {
   return (
      <button
         type="submit"
         className={styles.nextQuestionBtn}
         onClick={onNextQuestionClick}
      >
         <RightArrow fill={AQUA} />
      </button>
   );
};

export default NextQuestionBtn;
