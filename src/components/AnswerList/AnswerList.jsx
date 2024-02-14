import React, { useEffect, useState } from "react";
import Answer from "../Answer/Answer";
import styles from "./AnswerList.module.css";
import RightArrow from "../UI/icons/RightArrow";
import { useDispatch } from "react-redux";
import { nextStep } from "../../store/slices/testSlice";

const AQUA = "#BBD6FF";

const AnswerList = ({ answers, correctAnswerIndex }) => {
   const dispatch = useDispatch();

   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

   useEffect(() => console.log(selectedAnswerIndex));

   const handleAnswerClick = (selectedAnswerIndex, correctAnswerIndex) => {
      dispatch(
         nextStep({
            selectedAnswerIndex,
            correctAnswerIndex,
         })
      );
   };

   const onAnswerClick = event => {
      event.preventDefault();
      handleAnswerClick(selectedAnswerIndex, correctAnswerIndex);
      setSelectedAnswerIndex(null);
   }

   return (
      <form className={styles.controls}>
         <div className={styles.answersList}>
            {answers.map((answer, i) => (
               <Answer
                  key={answer + i}
                  answer={answer}
                  id={"answer" + i}
                  value={i}
                  setSelectedAnswerIndex={setSelectedAnswerIndex}
               />
            ))}
         </div>
         <button
            type="submit"
            className={styles.submitBtn}
            onClick={onAnswerClick}
         >
            <RightArrow fill={AQUA} />
         </button>
      </form>
   );
};

export default AnswerList;
