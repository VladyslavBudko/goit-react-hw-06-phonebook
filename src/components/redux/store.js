import {
  configureStore,
  //   createAction,
  //   createReducer,
  //   createSlice,
} from '@reduxjs/toolkit';

import { persistedContactsReducer } from './Slices/ContactsSlice';
import { filterSlice } from './Slices/FilterSlice';

import { persistStore } from 'redux-persist';

// const contacts = createAction('contactsValue/contacts');
// const filter = createAction('filterValue/contacts');

// const contactsReducer = createReducer([11111], {
//   [contacts]: (state, action) => state + action.payload,
// });
// const filterReducer = createReducer('ffff', {
//   [filter]: (state, action) => state + action.payload,
// });

export const store = configureStore({
  reducer: {
    // contactsList: contactsReducer,
    // filterQueue: filterReducer,
    contactsList: persistedContactsReducer,
    filterQueue: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);
