import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import postsSlice from "./postsSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
