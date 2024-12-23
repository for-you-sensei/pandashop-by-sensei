import React, { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { acLogin } from "../../Redux/Login";
import { acRegister } from "../../Redux/Register";

export function Header() {
  const [profile, setProfile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector((state) => state.login);
  const register = useSelector((state) => state.register);

  const headerIcons = [
    {
      id: 0,
      icon: <SearchIcon />,
      link: "",
    },
    {
      id: 1,
      icon: <ShoppingCartIcon />,
      link: "/my_cart",
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
              <figure
                className="header-figure"
                key={item.id}
                onClick={() => {
                  navigate(item.link);
                }}
              >
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
            <button
              onClick={() => {
                dispatch(acRegister(!register));
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
