
import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wish",
  initialState: [],
  reducers: {
    ADD_TO_WISHLIST: (state, action) => {
      state.push(action.payload);
    },
    REMOVE_FROM_WISHLIST: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload); // Ensure return
    },
  },
});

export const wishActions = WishlistSlice.actions;
export default WishlistSlice;