import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
   currentTest: {},
   currentQuestionIndex: 0,
   currentResult: [], // {questionIndex, selectedAnswerIndex, correctAnswerIndex}
   currentResultCounter: 0,
   results: [], // {testId, resultCounter, {questionIndex, selectedAnswerIndex, correctAnswerIndex}[]}
};

const testSlice = createSlice({
   name: "test",
   initialState,
   reducers: {
      setCurrentTest(state, action) {
         state.currentTest = action.payload;
         state.currentQuestionIndex = 0;
         state.currentResult = [];
         console.log(state.currentTest);
      },

      nextQuestion(state) {
         state.currentQuestionIndex++;
      },

      addToCurrentResult(state, action) {
         const { selectedAnswerIndex, correctAnswerIndex } = action.payload;

         if (+selectedAnswerIndex === correctAnswerIndex) {
            state.currentResultCounter++;
            console.info(state.currentResultCounter);
         }

         state.currentResult.push({
            questionIndex: state.currentQuestionIndex,
            selectedAnswerIndex: +selectedAnswerIndex,
            correctAnswerIndex,
         });
         console.log(current(state.currentResult))
      },

      addToResults(state) {
         const resultIndex = state.results.findIndex(
            (result) => result.testId === state.currentTest.id
         );
         const result = {
            testId: state.currentTest.id,
            resultCounter: state.currentResultCounter,
            results: state.currentResult,
         };

         if (resultIndex === -1) {
            state.results.push(result);
         } else {
            state.results[resultIndex] = result;
         }
         state.currentQuestionIndex = 0; // new test attempt will be started from first question
         state.currentResult = [];
         console.log(current(state.results))
      },
   },
});

export default testSlice;

export const {
   setCurrentTest,
   nextQuestion,
   addToCurrentResult,
   addToResults,
} = testSlice.actions;
