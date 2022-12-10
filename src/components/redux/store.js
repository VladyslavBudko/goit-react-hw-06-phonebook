import {
  configureStore,
  //   createAction,
  //   createReducer,
  createSlice,
} from '@reduxjs/toolkit';

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

export const { contacts } = contactsSlice.actions;

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: 'ffffff',
  filter: {
    filter(state, action) {
      return state + action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;

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
    contactsList: contactsSlice.reducer,
    filterQueue: filterSlice.reducer,
  },
});

// {
//     contacts: [],
//     filter: ""
//   }
