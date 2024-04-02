import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   filters: {
      category: 'all',
      searchText: '',
   }
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategory(state, action) {
         state.filters.category = action.payload
         state.filters.searchText = '';
      },

      setSearchText(state, action) {
         state.filters.searchText = action.payload;
      }
   },
})

export default filterSlice;
export const {setCategory, setSearchText} = filterSlice.actions;