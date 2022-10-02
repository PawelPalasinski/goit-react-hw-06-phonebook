import { configureStore } from '@reduxjs/toolkit';
import contacts from './slices/contacts';
import filterContacts from './slices/filter';

const rootReducer = {
  contacts,
  filter: filterContacts,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
