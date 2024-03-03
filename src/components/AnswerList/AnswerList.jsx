import React, { useState } from "react";
import Answer from "../Answer/Answer";
import styles from "./AnswerList.module.css";
import { useDispatch } from "react-redux";
import { nextQuestion, addToCurrentResult, addToResults } from "../../store/slices/testSlice";
import { useNavigate } from "react-router-dom";
import NextQuestionBtn from "../UI/NextQuestionBtn/NextQuestionBtn";

const AnswerList = (props) => {
   const {
      answers,
      questionAmount,
      currentQuestionIndex,
      correctAnswerIndex,
   } = props;

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

   const onNextQuestionClick = () => {
      if (currentQuestionIndex >= questionAmount - 1) {
         dispatch(addToCurrentResult({ selectedAnswerIndex, correctAnswerIndex }));
         dispatch(addToResults());
         navigate(`result`); // currentTestResult будет очищен
         return;
      }

      dispatch(addToCurrentResult({ selectedAnswerIndex, correctAnswerIndex }));
      dispatch(nextQuestion({ selectedAnswerIndex }));
      setSelectedAnswerIndex(null);
   };

   return (
      <form className={styles.controls}>
         <div className={styles.answersList}>
            {answers.map((answer, i) => (
               <Answer
                  key={answer + i + currentQuestionIndex}
                  answer={answer}
                  id={i + currentQuestionIndex}
                  value={i}
                  setSelectedAnswerIndex={setSelectedAnswerIndex}
               />
            ))}
         </div>
         <NextQuestionBtn
            onNextQuestionClick={onNextQuestionClick}
            selectedAnswerIndex={selectedAnswerIndex}
         />
      </form>
   );
};

export default AnswerList;
