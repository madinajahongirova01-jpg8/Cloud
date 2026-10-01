import axios from "axios";

export const API_URL = "https://store-api.softclub.tj";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const imageUrl = (name: string) => `${API_URL}/images/${name}`;

export const getErrorMessage = (e: any, fallback = "Something went wrong") =>
  e?.response?.data?.errors?.[0] ?? fallback;