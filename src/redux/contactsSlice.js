import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log('Action:', action);
      state.contacts.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    deleteContact: (state, action) => {
      console.log('Action:', action);
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
