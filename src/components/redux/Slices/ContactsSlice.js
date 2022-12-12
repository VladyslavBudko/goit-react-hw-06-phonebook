import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState: [1111],
  reducers: {
    contactsAdd(state, action) {
      state.push(action.payload);
    },
    contactsRemove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { contacts } = contactsSlice.actions;
