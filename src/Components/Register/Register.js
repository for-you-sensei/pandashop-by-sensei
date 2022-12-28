import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PatternFormat } from "react-number-format";
import CloseIcon from "@mui/icons-material/Close";
import { acRegister } from "../../Redux/Register";
import { acLogin } from "../../Redux/Login";

export function Register() {
  const dispatch = useDispatch();

  const register = useSelector((state) => state.register);
  const login = useSelector((state) => state.login);

  return (
    <div id={register ? "login-menu" : "login-menu-false"}>
      <form className="login-menu-form">
        <button
          className="login-menu-close"
          onClick={(e) => {
            e.preventDefault();
            dispatch(acRegister(!register));
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

        <input type="text" placeholder="Password" />

        <button className="login-menu-submit">Register</button>

        <div className="login-menu-actions">
          <p
            onClick={() => {
              dispatch(acRegister(!register));
              dispatch(acLogin(!login));
            }}
          >
            Login
          </p>
        </div>
      </form>
    </div>
  );
}
