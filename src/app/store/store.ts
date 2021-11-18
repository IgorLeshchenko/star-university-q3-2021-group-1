import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postsSlice from "../store/postsSlice";
import fetchingSlice from "../store/fetchingSlice"

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    fetching: fetchingSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
