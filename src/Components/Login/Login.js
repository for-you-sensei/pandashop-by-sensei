import React from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { acLogin } from "../../Redux/Login";
import { PatternFormat } from "react-number-format";
import CloseIcon from "@mui/icons-material/Close";
import { acRegister } from "../../Redux/Register";
import { acForgotPass } from "../../Redux/ForgotPassword";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const login = useSelector((state) => state.login);
  const forgotPass = useSelector((state) => state.forgotPass);
  const register = useSelector((state) => state.register);

  const dispatch = useDispatch();

  return (
    <div id={login ? "login-menu" : "login-menu-false"}>
      <form className="login-menu-form">
        <button
          className="login-menu-close"
          onClick={(e) => {
            e.preventDefault();
            dispatch(acLogin(!login));
          }}
        >
          <CloseIcon />
        </button>

        <p>Pandashop.Uz</p>

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

        <input type="text" placeholder="Password" />

        <label>
          <input type="checkbox" />
          Remember Me
        </label>

        <button
          className="login-menu-submit"
          onClick={(e) => {
            // e.preventDefault();
            navigate("/my_profile");
            // dispatch(acLogin(!login));
          }}
        >
          Log In
        </button>

        <div className="login-menu-actions">
          <p
            onClick={() => {
              dispatch(acLogin(!login));
              dispatch(acForgotPass(!forgotPass));
            }}
          >
            Forgot Password?
          </p>

          <p
            onClick={() => {
              dispatch(acLogin(!login));
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
