import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", response.data.token);

      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    messageClear: (state, action) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(admin_login.pending, (state, action) => {
      state.loader = true;
      state.errorMessage = "";
    });
    builder.addCase(admin_login.rejected, (state, action) => {
      state.loader = false;
      state.errorMessage = action.payload.error;
    });
    builder.addCase(admin_login.fulfilled, (state, action) => {
      state.loader = false;
      state.successMessage = action.payload.message;
    });
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
