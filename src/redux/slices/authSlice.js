import { createSlice } from "@reduxjs/toolkit";
import { userLoginAsyncThunk } from "../asyncThunk/authAsyncThunk";
import { THUNK_STATUS } from "../reduxConstant/reduxConstant";
import {
  getCatogries,
  getCatogriesAsyncThunk,
} from "../asyncThunk/getProductAsyncThunk";

const initialState = {
  user: null,
  token: null,
  data: null,

  userLoginStatus: null,
  userRollStatus: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // addToken:(state,action)=>{
    //   state.token = action?.payload
    // },
    removeToken: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginAsyncThunk.pending, (state, action) => {
      state.userLoginStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(userLoginAsyncThunk.fulfilled, (state, action) => {
      state.userLoginStatus = THUNK_STATUS.SUCCESS;
      state.token = action?.payload?.data?.access_token;
    });
    builder.addCase(userLoginAsyncThunk.rejected, (state, action) => {
      state.userLoginStatus = THUNK_STATUS.FAILED;
    });
    //use slice
    // builder.addCase(userLoginAsyncThunk.pending, (state, action) => {
    //   state.userRollStatus = THUNK_STATUS.LOADING;
    // });
    // builder.addCase(userLoginAsyncThunk.fulfilled, (state, action) => {
    //   state.userRollStatus = THUNK_STATUS.SUCCESS;
    // });
    // builder.addCase(userLoginAsyncThunk.rejected, (state, action) => {
    //   state.userRollStatus = THUNK_STATUS.FAILED;
    // });
  },
});
export const { removeToken } = authSlice.actions;
export const authState = (state) => state.authState;
export default authSlice.reducer;
