import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const contacts = createAction('contactsValue/contacts');
const filter = createAction('filterValue/contacts');

const contactsReducer = createReducer([11111], {
  [contacts]: (state, action) => state + action.payload,
});
const filterReducer = createReducer('', {
  [filter]: (state, action) => state + action.payload,
});

export const store = configureStore({
  reducer: {
    contactsValue: contactsReducer,
    filterValue: filterReducer,
  },
});

// {
//     contacts: [],
//     filter: ""
//   }
