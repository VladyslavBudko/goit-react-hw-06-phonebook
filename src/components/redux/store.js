import {
  configureStore,
  //   createAction,
  //   createReducer,
  //   createSlice,
} from '@reduxjs/toolkit';

import { filterSlice, contactsSlice } from './slices';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const contacts = createAction('contactsValue/contacts');
// const filter = createAction('filterValue/contacts');

// const contactsReducer = createReducer([11111], {
//   [contacts]: (state, action) => state + action.payload,
// });
// const filterReducer = createReducer('ffff', {
//   [filter]: (state, action) => state + action.payload,
// });

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    // contactsList: contactsReducer,
    // filterQueue: filterReducer,
    contactsList: persistedContactsReducer,
    filterQueue: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);
