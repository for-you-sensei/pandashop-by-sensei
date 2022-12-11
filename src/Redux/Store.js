import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reLoading } from "./Loading";

const reducer = combineReducers({
  loading: reLoading,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
