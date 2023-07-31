import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  setFilter,
  setContacts,
  loadContacts,
} from './actions';

const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];

const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [setContacts]: (state, action) => {
    return action.payload;
  },
  [loadContacts]: (state, action) => {
    return action.payload;
  },
});

const filterReducer = createReducer('', {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});

export { contactsReducer, filterReducer };
