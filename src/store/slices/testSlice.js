import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
   name: "test",
   initialState: {
      currentQuestionIndex: 0,
      result: 0,
      history: [] // {questionIndex, selectedAnswerIndex, correctAnswerIndex}
   },
   reducers: {
      nextStep(state, action) {
         const {selectedAnswerIndex, correctAnswerIndex} = action.payload

         if (selectedAnswerIndex === null) return

         if (selectedAnswerIndex === correctAnswerIndex) {
            state.result++
         }
         state.currentQuestionIndex++
         console.log(state.currentQuestionIndex, state.result)
      },
   }
})

export default testSlice

export const {nextStep} = testSlice.actions