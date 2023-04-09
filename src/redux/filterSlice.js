import { createSlice } from '@reduxjs/toolkit';

const initialFilter = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    // очікується що в action.payload при відправці action  в фільтрі події onchange відправиться актуальне значення
    // фільтру яке reducer запише в store
    setfilter: (state, action) => state.filterValue === action.payload,
  },
});

export const { setfilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
