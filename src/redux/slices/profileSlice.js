import { createSlice } from "@reduxjs/toolkit";
import { profileAsyncThunk } from "../asyncThunk/getProfileAsyncThunk";
import { THUNK_STATUS } from "../reduxConstant/reduxConstant";
const initialState = {
  data: null,
  status: {
    profileStatus: null,
  },
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(profileAsyncThunk.pending, (state, action) => {
      state.status = THUNK_STATUS.LOADING;
    });
    builder.addCase(profileAsyncThunk.fulfilled, (state, action) => {
      console.log(action,"________________response")

      state.status = THUNK_STATUS.SUCCESS;
      state.data = action?.payload?.data 
    });
    builder.addCase(profileAsyncThunk.rejected, (state, action) => {
      state.status = THUNK_STATUS.rejected;
    });
  },
});

export const profileState = (state)=> state.profileState;

export default profileSlice.reducer;