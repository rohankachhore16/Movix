import { createSlice } from "@reduxjs/toolkit";
import { getProductAsyncThunk } from "../asyncThunk/getProductAsyncThunk";
import { THUNK_STATUS } from "../reduxConstant/reduxConstant";
const initialState = {
  data: null,
  status: {
    productStatus: null,
  },
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductAsyncThunk.pending, (state, action) => {
      state.status.productStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(getProductAsyncThunk.fulfilled, (state, action) => {
      state.status.productStatus = THUNK_STATUS.SUCCESS;
      state.data = action?.payload?.data;
    });
    builder.addCase(getProductAsyncThunk.rejected, (state, action) => {
      state.status.productStatus = THUNK_STATUS.FAILED;
    });
  },
});

export const productState = (state) => state.productState;
export default productSlice.reducer;
