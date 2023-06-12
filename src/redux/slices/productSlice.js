import { createSlice } from "@reduxjs/toolkit";
import { getCatogriesAsyncThunk, getProductAsyncThunk } from "../asyncThunk/getProductAsyncThunk";
import { THUNK_STATUS } from "../reduxConstant/reduxConstant";
import { act } from "react-dom/test-utils";
const initialState = {
  data: null,
  categoreis:null,
  status: {
    productStatus: null,
    categoreisStatus: null,

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

    //categoreis Slice
    builder.addCase(getCatogriesAsyncThunk.pending, (state, action) => {
      
      state.status.categoreisStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(getCatogriesAsyncThunk.fulfilled, (state, action) => {
// console.log(action,"actions")
      state.status.categoreisStatus = THUNK_STATUS.SUCCESS;
      state.categoreis= action?.payload?.data
    });
    builder.addCase(getCatogriesAsyncThunk.rejected, (state, action) => {
      state.status.categoreisStatus = THUNK_STATUS.FAILED;
    });
    //crat
  },
});

export const productState = (state) => state.productState;
export default productSlice.reducer;
