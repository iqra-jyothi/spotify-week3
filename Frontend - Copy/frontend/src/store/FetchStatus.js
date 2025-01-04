import { createSlice } from "@reduxjs/toolkit";

const FetchStatus = createSlice({
  name: 'fetchstates',
  initialState: {
    fetchDone: false,
    currentlyfetching: false,
  },
  reducers: {
    markfetchDone: (state) => {
      state.fetchDone = true;
      state.currentlyfetching = false;  // Set fetching to false when done
    },
    markfetching: (state) => {
      state.currentlyfetching = true;  // Start fetching
    },
    markfetchingfinished: (state) => {
      state.currentlyfetching = false;  // Finish fetching even in case of error
    }
  }
});

export const fetchaction = FetchStatus.actions;

export default FetchStatus.reducer;
