import {
  configureStore,
  //   createAction,
  //   createReducer,
  //   createSlice,
} from '@reduxjs/toolkit';

import { persistedContactsReducer } from './Slices/ContactsSlice';
import { filterSlice } from './Slices/FilterSlice';

import { persistStore } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

export const store = configureStore({
  reducer: {
    contactsList: persistedContactsReducer,
    filterQueue: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
