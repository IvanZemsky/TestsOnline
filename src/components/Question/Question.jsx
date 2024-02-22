import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnswerList from "../AnswerList/AnswerList";
import styles from "./Question.module.css";
import QuestionTitle from "../UI/QuestionTitle/QuestionTitle";

const Question = ({test}) => {

   const currentQuestionIndex = useSelector(
      (state) => state.test.currentQuestionIndex
   );
   
   const currentQuestion = test.questions[currentQuestionIndex];
   const answers = currentQuestion.answers;

   return (
      <section className={styles.question}>

         <QuestionTitle questionTitle={currentQuestion.title}/>

         <AnswerList
            testId={test.id}
            answers={answers}
            questionAmount={test.questions.length}
            currentQuestionIndex={currentQuestionIndex}
            correctAnswerIndex={currentQuestion.correctAnswer}
         />
      </section>
   );
};

export default Question;
