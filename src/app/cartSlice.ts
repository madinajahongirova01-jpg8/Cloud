import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api, getErrorMessage } from "../api/axios";
import { logout } from "./authSlice";
import type { RootState } from "./store";

export type CartItem = {
  id: number;
  quantity: number;
  product: {
    id: number;
    productName: string;
    image: string;
    price: number;
    hasDiscount: boolean;
    discountPrice: number;
    quantity: number;
  };
};

type CartState = {
  items: CartItem[];
  totalProducts: number;
  totalPrice: number;
  totalDiscountPrice: number;
  loading: boolean;
  error: string | null;
};

const initialState: CartState = {
  items: [],
  totalProducts: 0,
  totalPrice: 0,
  totalDiscountPrice: 0,
  loading: false,
  error: null,
};

export const getCart = createAsyncThunk("cart/get", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get("/Cart/get-products-from-cart");
    return data.data[0];
  } catch (e) {
    return rejectWithValue(getErrorMessage(e));
  }
});

const cartAction = (name: string, request: (id: number) => Promise<unknown>) =>
  createAsyncThunk(`cart/${name}`, async (id: number, { dispatch, rejectWithValue }) => {
    try {
      await request(id);
      await dispatch(getCart());
    } catch (e) {
      return rejectWithValue(getErrorMessage(e));
    }
  });

export const addToCart = cartAction("add", (id) => api.post(`/Cart/add-product-to-cart?id=${id}`));
export const increaseCart = cartAction("increase", (id) => api.put(`/Cart/increase-product-in-cart?id=${id}`));
export const reduceCart = cartAction("reduce", (id) => api.put(`/Cart/reduce-product-in-cart?id=${id}`));
export const deleteFromCart = cartAction("delete", (id) => api.delete(`/Cart/delete-product-from-cart?id=${id}`));

export const clearCart = createAsyncThunk("cart/clear", async (_, { dispatch, rejectWithValue }) => {
  try {
    await api.delete("/Cart/clear-cart");
    await dispatch(getCart());
  } catch (e) {
    return rejectWithValue(getErrorMessage(e));
  }
});

export const addProductToCart = createAsyncThunk(
  "cart/addProduct",
  async (
    { productId, quantity = 1 }: { productId: number; quantity?: number },
    { dispatch, getState, rejectWithValue }
  ) => {
    try {
      const findItem = () =>
        (getState() as RootState).cart.items.find((i) => i.product.id === productId);

      let item = findItem();
      let left = quantity;

      if (!item) {
        await api.post(`/Cart/add-product-to-cart?id=${productId}`);
        await dispatch(getCart());
        item = findItem();
        left -= 1;
      }

      if (item && left > 0) {
        for (let i = 0; i < left; i++) {
          await api.put(`/Cart/increase-product-in-cart?id=${item.id}`);
        }
        await dispatch(getCart());
      }
    } catch (e) {
      return rejectWithValue(getErrorMessage(e));
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload?.productsInCart ?? [];
        state.totalProducts = action.payload?.totalProducts ?? 0;
        state.totalPrice = action.payload?.totalPrice ?? 0;
        state.totalDiscountPrice = action.payload?.totalDiscountPrice ?? 0;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logout, () => initialState);
  },
});

export default cartSlice.reducer;