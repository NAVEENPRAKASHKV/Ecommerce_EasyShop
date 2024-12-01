import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const customer_register = createAsyncThunk(
  "authUser/customer_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await api.post("/customer/customer-register", info);
      localStorage.setItem("customerToken", response.data.token);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const customer_login = createAsyncThunk(
  "authUser/customer_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log("user details", info);
    try {
      const response = await api.post("/customer/customer-login", info);
      localStorage.setItem("customerToken", response.data.token);

      console.log(
        "response from the server in customer register",
        response.data
      );
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authUserReducer = createSlice({
  name: "auth",
  initialState: {
    loader: false,
    userInfo: "",
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customer_register.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(customer_register.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
        state.loader = false;
      })
      .addCase(customer_register.fulfilled, (state, { payload }) => {
        state.successMessage = payload.message;
        state.loader = false;
      });
  },
});
export const { messageClear } = authUserReducer.actions;
export default authUserReducer.reducer;
