// src/redux/footerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
        // console.log('Updated searchTerm in store:', action.payload);
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = footerSlice.actions;
export default footerSlice.reducer;
