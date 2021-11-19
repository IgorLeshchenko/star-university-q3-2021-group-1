import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserLogin } from "./interfaces";
import API from "../../api/index";

const postUser = createAsyncThunk("auth/postUser", async ({ username, password }: UserLogin) => {
  const response = await API.UserRequest.loginUser(username, password);

  if (response) {
    return username as string;
  }
});

const addUser = createAsyncThunk("auth/addUser", async ({ username, password }: UserLogin) => {
  const response = await API.UserRequest.addUser(username, password);

  if (response) {
    return username as string;
  }
});

export { postUser, addUser };
