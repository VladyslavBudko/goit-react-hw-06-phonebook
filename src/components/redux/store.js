import { configureStore, createReducer } from '@reduxjs/toolkit';

const contactsReducer = createReducer([], {});
const filterReducer = createReducer("", {});

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
