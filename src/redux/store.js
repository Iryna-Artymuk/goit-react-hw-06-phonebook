import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsListSlice';
import { filtersReducer } from '../redux/filterSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterValue: filtersReducer,
  },
});
