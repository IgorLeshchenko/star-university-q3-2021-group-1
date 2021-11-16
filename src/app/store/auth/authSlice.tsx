import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState } from "./interfaces";
import { postUser } from "./thunks";

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    clearError: state => {
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder.addCase(postUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(postUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.user = action.payload.username;
      state.loading = false;
    });
    builder.addCase(postUser.rejected, (state, action) => {
      // fake - must remove next line
      state.user = "user123";

      state.loading = false;
      state.error = action.error;
    });
  },
});

export const authAction = authSlice.actions;

export default authSlice;
