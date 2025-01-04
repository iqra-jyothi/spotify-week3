import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { category: "All" }, // Default category
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

// Export the action creator
export const { setCategory } = categorySlice.actions;

// Export the reducer to be added to the store
export default categorySlice.reducer;

  