import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favorite";
import jobListReducer from "../reducers/jobslist";

const globalReducer = combineReducers({
  favorite: favoriteReducer,
  jobslist: jobListReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
