import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../reduxConstant/reduxConstant";
import { ProfileService } from "../services/profileService";

export const profileAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.PROFILE,
  async (payload, { rejetWithValue }) => {
    try {
      const response = await ProfileService(payload);
      return response;
    } catch (err) {
      return rejetWithValue(err);
    }
  }
);
