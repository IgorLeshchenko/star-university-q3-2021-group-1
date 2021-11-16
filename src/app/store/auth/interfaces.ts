import { SerializedError } from "@reduxjs/toolkit";

export type AuthState = {
  loading: boolean;
  error: SerializedError | null;
  user: string | null;
};

export interface UserLogin {
  username: string;
  password: string;
}
