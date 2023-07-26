import { configureStore } from '@reduxjs/toolkit';
import contactsSliceReducer from './contactsSlice';
import filterSliceReducer from './filterSlice';

const rootReducer = {
  contactsArray: contactsSliceReducer,
  filter: filterSliceReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
