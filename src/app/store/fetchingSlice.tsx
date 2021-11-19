import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: "fetching",
  initialState: {
    fetching: false,
  },
  reducers: {
    setFetching(state) {
      state.fetching = !state.fetching;
    },
  },
});

export const fetchingAction = fetchingSlice.actions;

export default fetchingSlice;
