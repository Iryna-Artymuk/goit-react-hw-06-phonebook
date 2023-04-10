import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsListSlice';
import { filterReducer } from '../redux/filterSlice';
import { modalReducer } from '../redux/modalSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage: storage,
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  modalActive: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
