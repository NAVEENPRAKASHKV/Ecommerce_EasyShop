import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";

// jwt decode for user information
const decodeToken = (token) => {
  if (token) {
    try {
      const decoded_userinfo = jwtDecode(token);
      return decoded_userinfo;
    } catch (error) {
      console.error("Invalid token", error);
      return null; // Return null if decoding fails
    }
  } else {
    return null; // Return null if no token is provided
  }
};
// api calls
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
    try {
      const response = await api.post("/customer/customer-login", info);
      localStorage.setItem("customerToken", response.data.token);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// slice
export const authUserReducer = createSlice({
  name: "auth",
  initialState: {
    loader: false,
    userInfo: decodeToken(localStorage.getItem("customerToken")),
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
        state.userInfo = decodeToken(payload.token);
        state.successMessage = payload.message;
        state.loader = false;
      })
      .addCase(customer_login.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(customer_login.rejected, (state, { payload }) => {
        state.errorMessage = payload.error;
        state.loader = false;
      })
      .addCase(customer_login.fulfilled, (state, { payload }) => {
        state.userInfo = decodeToken(payload.token);
        state.successMessage = payload.message;
        state.loader = false;
      });
  },
});

export const { messageClear } = authUserReducer.actions;
export default authUserReducer.reducer;
