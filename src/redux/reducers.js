import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';

const contactsReducer = createReducer([], {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterReducer = createReducer('', {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});

export { contactsReducer, filterReducer };
