import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactsArray: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    addContact: (state, action) => {
      console.log('Action:', action);
      state.contactsArray.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contactsArray));
    },

    deleteContact: (state, action) => {
      console.log('Action:', action);
      state.contactsArray = state.contactsArray.filter(
        contact => contact.id !== action.payload.id
      );
      localStorage.setItem('contacts', JSON.stringify(state.contactsArray));
    },
    setContactsArray: (state, action) => {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact, setContactsArray } =
  contactsSlice.actions;

export default contactsSlice.reducer;
