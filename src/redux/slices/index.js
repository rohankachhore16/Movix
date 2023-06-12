import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import productSlice from "./productSlice";
import profileSlice from "./profileSlice";

export default combineReducers({
  user: AuthSlice,
  product: productSlice,
  profile: profileSlice,
  // categories:
});
