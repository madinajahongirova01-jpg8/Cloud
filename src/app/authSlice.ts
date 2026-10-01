import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api, getErrorMessage } from "../api/axios";
import type { RootState } from "./store";

export type User = {
  id: string;
  userName: string;
  email: string;
};

function decodeToken(token: string): User | null {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(base64));
    if (payload.exp && payload.exp * 1000 < Date.now()) return null;
    return { id: payload.sid, userName: payload.name, email: payload.email ?? "" };
  } catch {
    return null;
  }
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async (body: { userName: string; password: string }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Account/login", body);
      return data.data as string;
    } catch (e) {
      return rejectWithValue(getErrorMessage(e, "Wrong username or password"));
    }
  }
);

export type RegisterBody = {
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (body: RegisterBody, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Account/register", body);
      return data;
    } catch (e) {
      return rejectWithValue(getErrorMessage(e, "Registration failed"));
    }
  }
);

type AuthState = {
  token: string | null;
  user: User | null;
  loading: boolean;
  error: string | null;
};

const savedToken = localStorage.getItem("token");
const savedUser = savedToken ? decodeToken(savedToken) : null;
if (!savedUser) localStorage.removeItem("token");

const initialState: AuthState = {
  token: savedUser ? savedToken : null,
  user: savedUser,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.user = decodeToken(action.payload);
        localStorage.setItem("token", action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;
export const selectIsAuth = (state: RootState) => Boolean(state.auth.token);
export default authSlice.reducer;