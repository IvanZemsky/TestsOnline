import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
   currentTest: {},
   currentQuestionIndex: 0,
   currentResult: [], // {questionIndex, selectedAnswerIndex, correctAnswerIndex}
   currentResultCounter: 0,
}

const testSlice = createSlice({
   name: "test",
   initialState,
   reducers: {
      setCurrentTest(state, action) {
         state.currentTest = action.payload;
         console.log("cleared", current(state)); // ***
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

         console.info(current(state.currentResult)); // ***
      },

      clearCurrentTestState: () => initialState,

   },
});

export default testSlice;

export const {
   setCurrentTest,
   nextQuestion,
   addToCurrentResult,
   clearCurrentTestState
} = testSlice.actions;
