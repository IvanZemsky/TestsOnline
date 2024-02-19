import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const testSlice = createSlice({
   name: "test",
   initialState: {
      currentTest: {},
      currentQuestionIndex: 0,
      currentResult: [], // {questionIndex, selectedAnswerIndex, correctAnswerIndex}
      currentResultCounter: 0,
      results: [], // {testId, {questionIndex, selectedAnswerIndex, correctAnswerIndex}[]}
   },
   reducers: {
      setCurrentTest(state, action) {
         state.currentTest = action.payload;
      },

      nextQuestion(state) {
         //if (selectedAnswerIndex === null) return;
         // console.info(current(state)); // ***
         state.currentQuestionIndex++;
      },

      addToCurrentResult(state, action) {
         const { selectedAnswerIndex, correctAnswerIndex } = action.payload;
         //if (selectedAnswerIndex === null) return;

         if (+selectedAnswerIndex === correctAnswerIndex) {
            state.currentResultCounter++;
         }

         state.currentResult.push({
            questionIndex: state.currentQuestionIndex,
            selectedAnswerIndex: +selectedAnswerIndex,
            correctAnswerIndex,
         });

         console.info(current(state.currentResult))
      },

      addToResults(state, action) {
         const { testId } = action.payload;
         state.results.push({
            testId,
            resultCounter: state.resultCounter,
            results: [...state.currentResult],
         });
         console.info(current(state.results)); // ***
      },

      clearCurrentTestData(state) {
         state.currentQuestionIndex = 0;
         state.currentResult = [];
         state.currentResultCounter = 0;
         console.log("cleared", current(state));
      },
   },
});

export default testSlice;

export const {
   setCurrentTest,
   nextQuestion,
   addToCurrentResult,
   addToResults,
   clearCurrentTestData,
} = testSlice.actions;
