import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCookie } from "../../helpers/utils";
import { AuthState } from "./interfaces";
import { postUser } from "./thunks";

const initialState: AuthState = {
  loading: false,
  error: null,
  user: getCookie("username") || null,
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
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(postUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const authAction = authSlice.actions;

export default authSlice;
