import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reLoading } from "./Loading";
import { reMenu } from "./MenuButton";

const reducer = combineReducers({
  loading: reLoading,
  menu: reMenu,
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
