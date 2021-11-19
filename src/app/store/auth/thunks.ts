import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserLogin } from "./interfaces";
import API from "../../api/index";

const postUser = createAsyncThunk("auth/postUser", async ({ username, password }: UserLogin) => {
  await API.UserRequest.loginUser(username, password);

  return username as string;
});

const addUser = createAsyncThunk("auth/addUser", async ({ username, password }: UserLogin) => {
  await API.UserRequest.addUser(username, password);

  return username as string;
});

export { postUser, addUser };
