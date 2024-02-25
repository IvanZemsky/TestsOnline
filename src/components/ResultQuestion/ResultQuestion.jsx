import React from "react";
import styles from "./ResultQuestion.module.css";

const ResultQuestion = ({ question, results, index }) => {
   //console.log(results[index].selectedAnswerIndex)
   const isAnswerCorrect =
      question.answers[results[index]?.selectedAnswerIndex] ===
      question.answers[results[index]?.correctAnswerIndex];

   const answerStatusStyle = isAnswerCorrect
      ? styles.correctAnswer
      : styles.falseAnswer;

   return (
      <div className={[styles.question, answerStatusStyle].join(" ")}>
         <header className={styles.questionHeader}>
            <p className={[styles.questionNumber, answerStatusStyle].join(" ")}>
               {index + 1}
            </p>
            <p className={styles.questionName}>{question.title}</p>
         </header>

         <div className={styles.answerWrap}>
            {/* answerWrap - если не нужен, убрать*/}
            {/* {isAnswerCorrect ? correctAnswerIcon : falseAnswerIcon} */}
            <p className={styles.userAnswer}>
               Ваш ответ:{" "}
               {question.answers[results[index]?.selectedAnswerIndex]}
            </p>
         </div>
         {!isAnswerCorrect && (
            <p>
               Правильный ответ:{" "}
               {question.answers[results[index]?.correctAnswerIndex]}
            </p>
         )}
      </div>
   );
};

export default ResultQuestion;
