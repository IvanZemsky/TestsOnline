import { combineSlices, configureStore } from "@reduxjs/toolkit"
import testSlice from "./slices/testSlice"

const rootReducer = combineSlices(testSlice);

const store = configureStore({
   reducer: rootReducer
})

export default store
