import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { acLogin } from "../../Redux/Login";
import { PatternFormat } from "react-number-format";
import CloseIcon from "@mui/icons-material/Close";
import { acRegister } from "../../Redux/Register";
import { acForgotPass } from "../../Redux/ForgotPassword";

export function ForgotPassword() {
  const login = useSelector((state) => state.login);
  const register = useSelector((state) => state.register);
  const forgotPass = useSelector((state) => state.forgotPass);

  const dispatch = useDispatch();

  return (
    <div id={forgotPass ? "login-menu" : "login-menu-false"}>
      <form className="login-menu-form">
        <button
          className="login-menu-close"
          onClick={(e) => {
            e.preventDefault();
            dispatch(acForgotPass(!forgotPass));
          }}
        >
          <CloseIcon />
        </button>

        <p>Pandashop.Uz</p>

        <input type="text" placeholder="Full Name" />

        <PatternFormat
          // value={phone}
          format="+99 8(##) ### ####"
          allowEmptyFormatting
          mask="_"
          onValueChange={(e) => {
            console.log();
            //   setPhone(e.floatValue);
          }}
        />

        <button className="login-menu-submit">Log In</button>

        <div className="login-menu-actions">
          <p
            onClick={() => {
              dispatch(acForgotPass(!forgotPass));
              dispatch(acLogin(!login));
            }}
          >
            Login
          </p>

          <p
            onClick={() => {
              dispatch(acForgotPass(!forgotPass));
              dispatch(acRegister(!register));
            }}
          >
            Register Now
          </p>
        </div>
      </form>
    </div>
  );
}
