import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';

export default configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  },
});
