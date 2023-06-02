import { createSlice } from "@reduxjs/toolkit";
import { userLoginAsyncThunk } from "../asyncThunk/authAsyncThunk";
import { THUNK_STATUS } from "../reduxConstant/reduxConstant";

const initialState = {
  user: null,
  token: null,
  data: null,
  userLoignStatus: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginAsyncThunk.pending, (state, action) => {
      state.userLoignStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(userLoginAsyncThunk.fulfilled, (state, action) => {
      state.userLoignStatus = THUNK_STATUS.SUCCESS;
      state.token = action?.payload?.data;
    });
      builder.addCase(userLoginAsyncThunk.rejected, (state, action) => {
        state.userLoignStatus = THUNK_STATUS.FAILED;
      });
  },
});
export const { removeToken } = AuthSlice.actions;
export const authState = (state) => state.authState;
export default AuthSlice.reducer;
