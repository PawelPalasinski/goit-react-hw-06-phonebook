import { configureStore, combineReducers } from "@reduxjs/toolkit";
import phoneBookReducer from './reducer';

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
