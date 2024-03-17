import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
   addToCurrentResult,
   addToResults,
   nextQuestion,
} from "../store/slices/testSlice";

export default function useNextQuestion(currentQuestionIndex, questionAmount, correctAnswerIndex) {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

   function onNextQuestionClick() {
      if (currentQuestionIndex >= questionAmount - 1) {
         dispatch(
            addToCurrentResult({ selectedAnswerIndex, correctAnswerIndex })
         );
         dispatch(addToResults());
         navigate(`result`);
         return;
      }

      dispatch(addToCurrentResult({ selectedAnswerIndex, correctAnswerIndex }));
      dispatch(nextQuestion({ selectedAnswerIndex }));
      setSelectedAnswerIndex(null);
   }

   return {
      onNextQuestionClick,
      selectedAnswerIndex,
      setSelectedAnswerIndex,
   };
}
