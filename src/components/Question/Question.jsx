import React, { useMemo } from "react";
import tests from "../../tests";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../../store/slices/testSlice";
import AnswerList from "../AnswerList/AnswerList";
import styles from "./Question.module.css";
import ProgressLine from "../UI/ProgressLine/ProgressLine";
import RightArrow from '../UI/icons/RightArrow'

const Question = ({ testId }) => {
   const currentQuestionIndex = useSelector(
      (state) => state.test.currentQuestionIndex
   );
   const dispatch = useDispatch();

   const test = useMemo(() => tests.find((test) => test.id === +testId));
   console.log(test);
   const currentQuestion = test.questions[currentQuestionIndex];
   const answers = currentQuestion.answers;
   const questionAmount = test.questions.length;

   const handleAnswerClick = (selectedAnswerIndex, correctAnswerIndex) => {
      dispatch(
         nextStep({
            selectedAnswerIndex,
            correctAnswerIndex,
         })
      );
   };

   return (
      <section className={styles.question}>
         <h1 className={styles.testName}>{test.name}</h1>

         <ProgressLine
            questionNumber={currentQuestionIndex + 1}
            questionAmount={questionAmount}
         />

         <div className={styles.questionTitleWrap}>
            <h2 className={styles.questionTitle}>
               {currentQuestion.title}
            </h2>
            <p className={styles.quesyionSelection}>
               <span>0</span>
               /
               <span>1</span>
            </p>
         </div>

         <div className={styles.controls}>
            <AnswerList answers={answers} />

            <button type="submit" className={styles.submitBtn}>
               <RightArrow />
            </button>
         </div>
      </section>
   );
};

export default Question;
