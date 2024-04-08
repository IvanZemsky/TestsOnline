import React from "react";
import styles from "./ResultQuestion.module.css";

const ResultQuestion = ({ question, results, index }) => {
   const isAnswerCorrect =
      question.answers[results[index]?.selectedAnswerIndex] ===
      question.answers[results[index]?.correctAnswerIndex];

   const answerStatusStyle = isAnswerCorrect
      ? styles.correctAnswer
      : styles.falseAnswer;

   return (
      <li className={[styles.question, answerStatusStyle].join(" ")}>
         <div className={styles.selectedAnswer}>
            <header className={styles.questionHeader}>
               <p className={[styles.questionNumber, answerStatusStyle].join(" ")}>
                  {index + 1}
               </p>
               <p className={styles.questionName}>{question.title}</p>
            </header>

            <div className={styles.answerWrap}>
               <p className={styles.userAnswerText}>
                  Ваш ответ:{" "}
                  {question.answers[results[index]?.selectedAnswerIndex]}
               </p>
            </div>
         </div>
         {!isAnswerCorrect && (
            <p className={styles.rightAnswer}>
               <span>Правильный ответ:</span>{" "}
               {question.answers[results[index]?.correctAnswerIndex]}
            </p>
         )}
      </li>
   );
};

export default ResultQuestion;
