import React from "react";
import styles from "./ResultQuestion.module.css";

const ResultQuestion = ({ question, results, index }) => {
   //console.log(results[index].selectedAnswerIndex)
   const isAnswerCorrect =
      question.answers[results[index]?.selectedAnswerIndex] ===
      question.answers[results[index]?.correctAnswerIndex];

   // const questionCSS = [
   //    styles.question,
   //    isAnswerCorrect ? styles.falseAnswer : styles.correctAnswer
   // ].join(" ")

   // const questionNumberCSS = [
   //    styles.questionNumber,
   //    isAnswerCorrect ? styles.falseAnswer : styles.correctAnswer
   // ].join(" ")

   const answerStatusStyle = isAnswerCorrect ? styles.correctAnswer : styles.falseAnswer;

   return (
      <div className={[styles.question, answerStatusStyle].join(" ")}>
         <header className={styles.questionHeader}>
            <p className={[styles.questionNumber, answerStatusStyle].join(" ")}>
               {index + 1}
            </p>
            <p className={styles.questionName}>{question.title}</p>
         </header>

         <div className={styles.answerWrap}>
            {/* {isAnswerCorrect ? correctAnswerIcon : falseAnswerIcon} */}

            <p className={styles.userAnswer}>
               Ваш ответ:{" "}
               {question.answers[results[index]?.selectedAnswerIndex]}
            </p>
         </div>
      </div>
   );
};

export default ResultQuestion;
