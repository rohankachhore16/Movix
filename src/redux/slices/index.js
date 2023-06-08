import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import productSlice from "./productSlice";

export default combineReducers({
  user: AuthSlice,
  product: productSlice,
});
  