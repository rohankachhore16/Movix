import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../reduxConstant/reduxConstant";
import {userLoginService} from "../services/authService"
export const userLoginAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async(payload,{rejectWithValue})=>{
    try{
      const response = await userLoginService(payload)
      return response;
    }catch(err){
      return rejectWithValue(err);
    }
  }
)