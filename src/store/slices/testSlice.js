import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const testSlice = createSlice({
   name: "test",
   initialState: {
      currentQuestionIndex: 0,
      result: [], // {questionIndex, selectedAnswerIndex, correctAnswerIndex}
      resultCounter: 0
   },
   reducers: {
      nextQuestion(state, action) {
         const {selectedAnswerIndex, correctAnswerIndex} = action.payload
         if (selectedAnswerIndex === null) return

         if (+selectedAnswerIndex === correctAnswerIndex) {
            state.resultCounter++
         }

         state.currentQuestionIndex++
      },

      addToResults(state, action) {
         const {selectedAnswerIndex, correctAnswerIndex} = action.payload
         if (selectedAnswerIndex === null) return

         state.result.push({
            currentQuestionIndex: state.currentQuestionIndex,
            selectedAnswerIndex: +selectedAnswerIndex,
            correctAnswerIndex
         })
        console.info(current(state.result)) // ***
      },

      clearCurrentTestData(state) {
         state.currentQuestionIndex = 0;
         state.result.length = 0;
         state.resultCounter = 0;
         console.log('cleared', current(state))
      }
   }
})

export default testSlice

export const {nextQuestion, addToResults, clearCurrentTestData} = testSlice.actions