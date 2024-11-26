import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./../../api/api";

export const add_product = createAsyncThunk(
  "product/add_product",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    console.log(product);
    try {
      const response = await api.post("/product-add", product, {
        withCredentials: true,
      });
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const get_editProduct = createAsyncThunk(
  "product/get_editProduct",
  async (productId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await api.get(`/product-get/${productId}`, {
        withCredentials: true,
      });

      console.log(response.data);
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);
export const get_product = createAsyncThunk(
  "product/get_product",
  async (
    { perPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await api.get(
        `/products-get?page=${page}&&perPage=${perPage}&&searchValue=${searchValue}`,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);
export const update_product = createAsyncThunk(
  "product/update_product",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/product-update`, product, {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);

const productReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    products: [],
    singleProduct: "",
    totalProduct: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_product.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(add_product.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload?.error;
      })
      .addCase(add_product.fulfilled, (state, action) => {
        state.loader = false;
        state.successMessage = action.payload?.message;
      })
      .addCase(get_product.fulfilled, (state, action) => {
        state.loader = false;
        state.totalProduct = action.payload.totalProduct;
        state.products = action.payload.products;
      })
      .addCase(get_editProduct.fulfilled, (state, action) => {
        state.loader = false;
        state.singleProduct = action.payload.product;
      })
      .addCase(update_product.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(update_product.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(update_product.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.singleProduct = payload.product;
        state.successMessage = payload.message;
      });
  },
});

export default productReducer.reducer;
export const { messageClear } = productReducer.actions;
