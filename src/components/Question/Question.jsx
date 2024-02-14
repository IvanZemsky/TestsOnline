import React, { useMemo } from "react";
import tests from "../../tests";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../../store/slices/testSlice";
import AnswerList from "../AnswerList/AnswerList";
import styles from "./Question.module.css";
import ProgressLine from "../UI/ProgressLine/ProgressLine";

const Question = ({ testId }) => {
   const dispatch = useDispatch();

   const currentQuestionIndex = useSelector(
      (state) => state.test.currentQuestionIndex
   );

   const test = useMemo(() => tests.find((test) => test.id === +testId), []);
   console.log(test);
   const currentQuestion = test.questions[currentQuestionIndex];
   const answers = currentQuestion.answers;
   const questionAmount = test.questions.length;

   return (
      <section className={styles.question}>
         <h1 className={styles.testName}>{test.name}</h1>

         <ProgressLine
            questionNumber={currentQuestionIndex + 1}
            questionAmount={questionAmount}
         />

         <div className={styles.questionTitleWrap}>
            <h2 className={styles.questionTitle}>{currentQuestion.title}</h2>
            <p className={styles.questionSelection}>
               <span>0</span>/<span>1</span>
            </p>
         </div>

         <AnswerList
            answers={answers}
            correctAnswerIndex={currentQuestion.correctAnswer}
         />
      </section>
   );
};

export default Question;
