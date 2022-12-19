import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reLoading } from "./Loading";
import { reLogin } from "./Login";
import { reMenu } from "./MenuButton";

const reducer = combineReducers({
  loading: reLoading,
  login: reLogin,
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
