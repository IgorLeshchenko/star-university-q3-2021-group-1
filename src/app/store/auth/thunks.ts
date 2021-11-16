import { createAsyncThunk } from "@reduxjs/toolkit";

import { store } from "../store";
import { authAction } from "./authSlice";
import { UserLogin } from "./interfaces";

const postUser = createAsyncThunk<UserLogin>("auth/postUser", async user => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(user),
  });

  if (response.status >= 400) {
    setTimeout(() => {
      store.dispatch(authAction.clearError());
    }, 3000);

    throw Error("Connection error");
  }

  return (await response.json()) as UserLogin;
});

export { postUser };
