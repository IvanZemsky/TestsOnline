import { createSlice, current } from "@reduxjs/toolkit";
import { addToCurrentResult, endCurrentTestResult } from "./testSlice";

const resultSlice = createSlice({
   name: "results",
   initialState: {
      results: [], // {testId, resultCounter, {questionIndex, selectedAnswerIndex, correctAnswerIndex}[]}
   },
   reducers: {
      addToResults(state, action) {
         const testsState = action.payload;
         console.log(testsState)

         const resultIndex = state.results.findIndex(
            (result) => result.testId === testsState.currentTest.id
         );
         const result = {
            testId: testsState.currentTest.id,
            resultCounter: testsState.currentResultCounter,
            results: testsState.currentResult,
         };

         if (resultIndex === -1) {
            state.results.push(result);
         } else {
            state.results[resultIndex] = result;
         }
         //console.info(current(state.results)); // ***
      },
   },
    extraReducers: (builder) => {
   //    builder.addCase(endCurrentTestResult, (state, action) => {
   //       const {testsState} = action.payload;
   //       console.log(testsState)
   //    })
   builder.addCase(addToCurrentResult.type, (state, action) => {
      console.log('er', current(state), action.payload)
   })
   },
});

export default resultSlice;
export const {addToResults} = resultSlice.actions
