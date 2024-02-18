import React, { useEffect, useState } from "react";
import Answer from "../Answer/Answer";
import styles from "./AnswerList.module.css";
import { useDispatch } from "react-redux";
import { nextQuestion, addToResults } from "../../store/slices/testSlice";
import { useNavigate } from "react-router-dom";
import NextQuestionBtn from "../UI/NextQuestionBtn/NextQuestionBtn";

const AnswerList = (props) => {
   const { testId, answers, questionAmount, currentQuestionIndex, correctAnswerIndex } = props

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

   useEffect(() => console.log(selectedAnswerIndex));

   const onNextQuestionClick = (event) => {
      event.preventDefault();
      if (currentQuestionIndex >= questionAmount - 1) {
         dispatch(addToResults({selectedAnswerIndex, correctAnswerIndex}))
         navigate(`/test/${testId}/result`);
         return;
      }
      dispatch(addToResults({selectedAnswerIndex, correctAnswerIndex}))
      dispatch(nextQuestion({selectedAnswerIndex, correctAnswerIndex}))
      setSelectedAnswerIndex(null);
   }

   return (
      <form className={styles.controls}>
         <div className={styles.answersList}>
            {answers.map((answer, i) => (
               <Answer
                  key={answer + i + currentQuestionIndex}
                  answer={answer}
                  id={"answer" + i}
                  value={i}
                  setSelectedAnswerIndex={setSelectedAnswerIndex}
               />
            ))}
         </div>
         <NextQuestionBtn onNextQuestionClick={onNextQuestionClick}/>
      </form>
   );
};

export default AnswerList;
