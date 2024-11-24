import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";

//fuction definition
const returnRole = (token) => {
  if (!token) return "";
  try {
    const decodeToken = jwtDecode(token);
    const expireTime = new Date(decodeToken.exp * 1000);

    if (new Date() > expireTime) {
      localStorage.removeItem("accessToken");
      return "";
    } else {
      return decodeToken.role;
    }
  } catch (error) {
    console.error("Error in returnRole function:", error.message || error);
    return ""; // Explicitly return an empty string in case of an error
  }
};

//redux thunk
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

export const seller_register = createAsyncThunk(
  "auth/seller_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log("in the seller asyn user data", info);
    try {
      const response = await api.post("/seller-register", info, {
        withCredentials: true,
      });
      console.log("register data", response.data);
      localStorage.setItem("accessToken", response.data.token);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const seller_login = createAsyncThunk(
  "auth/seller_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await api.post("/seller-login", info, {
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
export const get_user_info = createAsyncThunk(
  "auth/get_user_info",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await api.get("/get-user", {
        withCredentials: true,
      });
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//slice
const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
    role: returnRole(localStorage.getItem("accessToken")),
    token: localStorage.getItem("accessToken"),
  },
  reducers: {
    messageClear: (state, action) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.loader = true;
        state.errorMessage = "";
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload.error;
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.role = returnRole(action.payload.token);
        state.token = action.token;
      })
      .addCase(seller_register.pending, (state) => {
        state.loader = true;
        state.errorMessage = "";
      })
      .addCase(seller_register.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload.error;
      })
      .addCase(seller_register.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.role = returnRole(action.payload.token);
        state.token = action.token;
      })
      .addCase(seller_login.pending, (state) => {
        state.loader = true;
        state.errorMessage = "";
      })
      .addCase(seller_login.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload.error;
      })
      .addCase(seller_login.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload.message;
        state.role = returnRole(action.payload.token);
        state.token = action.token;
      })
      .addCase(get_user_info.fulfilled, (state, action) => {
        state.loader = false;
        state.userInfo = action.payload.userInfo;
      });
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
