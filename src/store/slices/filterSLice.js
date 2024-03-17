import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   filtered: []
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      
   },
})

export default filterSlice;
export const {} = filterSlice.actions;