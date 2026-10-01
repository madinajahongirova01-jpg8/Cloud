import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type WishItem = {
  id: number;
  productName: string;
  image: string;
  price: number;
  hasDiscount: boolean;
  discountPrice: number;
};

function loadWishlist(): WishItem[] {
  try {
    return JSON.parse(localStorage.getItem("wishlist") ?? "[]");
  } catch {
    return [];
  }
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: loadWishlist() },
  reducers: {
    toggleWishlist: (state, action: PayloadAction<WishItem>) => {
      const index = state.items.findIndex((i) => i.id === action.payload.id);
      if (index === -1) state.items.push(action.payload);
      else state.items.splice(index, 1);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { toggleWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;