import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reFilter } from "./Filter";
import { reForgotPass } from "./ForgotPassword";
import { reLoading } from "./Loading";
import { reLogin } from "./Login";
import { reMenu } from "./MenuButton";
import { reProduct } from "./Product";
import { reRegister } from "./Register";

const reducer = combineReducers({
  loading: reLoading,
  login: reLogin,
  filter: reFilter,
  register: reRegister,
  forgotPass: reForgotPass,
  menu: reMenu,
  product: reProduct,
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
