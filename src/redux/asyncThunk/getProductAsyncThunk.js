import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../reduxConstant/reduxConstant";
import {
  cardDelteService,
  getCategoriesServices,
  getProductService,
} from "../services/getProductService";

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
export const getCatogriesAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.CATEGORIES,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await getCategoriesServices(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const cardDeleteAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.CARD_DELETE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await cardDelteService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
