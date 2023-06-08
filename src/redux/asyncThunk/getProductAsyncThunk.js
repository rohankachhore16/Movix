import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../reduxConstant/reduxConstant";
import { getProductService } from "../services/getProductService";

export const getProductAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.USER,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getProductService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
