import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { acLogin } from "../../Redux/Login";

export function Header() {
  const [profile, setProfile] = useState(false);
  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);

  const headerIcons = [
    {
      id: 0,
      icon: <SearchIcon />,
    },
    {
      id: 1,
      icon: <ShoppingCartIcon />,
    },
  ];

  return (
    <div id="header-box">
      <div id="header">
        <NavLink to="/" className="pandashop-text">
          PandaShop
        </NavLink>

        <div className="header-nav">
          <NavLink to="/delivery">Delivery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="header-icon">
          {headerIcons.map((item) => {
            return (
              <figure className="header-figure" key={item.id}>
                {item.icon}
              </figure>
            );
          })}

          <figure
            className="header-figure"
            onClick={() => {
              setProfile(!profile);
            }}
          >
            <AccountCircleIcon />
          </figure>

          <div
            className={
              profile ? "login-register-show" : "login-register-show-invisible"
            }
          >
            <button
              onClick={() => {
                dispatch(acLogin(!login));
              }}
            >
              Log In
            </button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
