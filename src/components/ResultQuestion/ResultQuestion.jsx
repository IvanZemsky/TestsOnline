import React from "react";
import styles from "./ResultQuestion.module.css";

const ResultQuestion = ({ question, results, index }) => {
   //console.log(results[index].selectedAnswerIndex)
   const isCorrectAnswer =
       question.answers[results[index]?.selectedAnswerIndex] ===
       question.answers[results[index]?.correctAnswerIndex];

   return (
      <div className={styles.question}>
         <p className={styles.questionNumber}>
            №{index + 1}:{" "}
            {question.title}
         </p>
         <p className={styles.userAnswer}>
            Ваш ответ: {question.answers[results[index]?.selectedAnswerIndex]} 
         </p>

         {isCorrectAnswer ? "правильный ответ"
         : (
            question.answers[results[index]?.correctAnswerIndex]
         )}

      </div>
   );
};

export default ResultQuestion;
