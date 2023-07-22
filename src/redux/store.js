import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducers';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
