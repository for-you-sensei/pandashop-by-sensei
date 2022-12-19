import React from "react";
import "./Login.css";
import { useSelector } from "react-redux";

export function Login() {
  const login = useSelector((state) => state.login);

  console.log(login);

  return (
    <div id={login ? "login-menu" : "login-menu-false"}>
      <p>login</p>
    </div>
  );
}
