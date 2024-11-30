import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_categories = createAsyncThunk(
  "home/get_categories",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await api.get("/home/get-categories");
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
); // get_categories End Method
export const get_products = createAsyncThunk(
  "home/get_products",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await api.get("/home/get-products");
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
); // get_products End Method

export const product_details = createAsyncThunk(
  "product/product_details",
  async (slug, { fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/home/product-details/${slug}`);
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.respone);
    }
  }
);
// End Method

export const homeReducer = createSlice({
  name: "home",
  initialState: {
    errorMessage: "",
    categories: [],
    products: [],
    latest_product: [],
    topRated_product: [],
    discounted_product: [],
    product: {},
    relatedProducts: [],
    moreProducts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_categories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
      })
      .addCase(get_categories.rejected, (state, action) => {
        state.errorMessage = action.payload.error;
      })
      .addCase(get_products.rejected, (state, action) => {
        state.errorMessage = action.payload.error;
      })
      .addCase(get_products.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.latest_product = action.payload.latest_product;
        state.topRated_product = action.payload.topRated_product;
        state.discounted_product = action.payload.discounted_product;
      })
      .addCase(product_details.fulfilled, (state, { payload }) => {
        state.product = payload.product;
        state.relatedProducts = payload.relatedProducts;
        state.moreProducts = payload.moreProducts;
      });
  },
});

export default homeReducer.reducer;
