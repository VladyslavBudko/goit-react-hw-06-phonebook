import { createSlice } from '@redux/toolkit';

export const contactsSlice = createSlice({
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

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: 'ffffff',
  filter: {
    filter(state, action) {
      return state + action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
