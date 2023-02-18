import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { acMenu } from "../../Redux/MenuButton";
import { acLogin } from "../../Redux/Login";
import { NavbarMenu } from "./NavbarMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { acRegister } from "../../Redux/Register";

export function Navbar() {
  const [profile, setProfile] = useState(false);
  // const [logIn, setlogIn] = useState(false);

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const login = useSelector((state) => state.login);
  const register = useSelector((state) => state.register);

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
    <div id="navbar-box">
      <div id="navbar">
        <div className="navbar-selections">
          <NavLink to="/new">New</NavLink>

          <div className="drop-down-card">
            <NavLink to="/all_products">Clothes </NavLink>
            <div className="sub-menu">
              <NavLink to="/for_men">For Men</NavLink>
              <NavLink to="/for_women">For Women</NavLink>
              <NavLink to="/for_girls">For Girls</NavLink>
              <NavLink to="/for_children">For Children</NavLink>
            </div>
          </div>

          <NavLink to="/discounts">Discounts</NavLink>

          <div className="drop-down-card">
            <NavLink to="/all_products">More </NavLink>
            <div className="sub-menu">
              <NavLink to="/for_mobile">For Mobile</NavLink>
              <NavLink to="/for_office">For Office</NavLink>
              <NavLink to="/for_car">For Car</NavLink>
              <NavLink to="/for_room">For Room</NavLink>
            </div>
          </div>

          <NavLink to="/partner">Partner</NavLink>
        </div>

        <figure
          onClick={(e) => {
            e.preventDefault();
            dispatch(acMenu(!menu));
          }}
          className="navbar-figure"
          id="navbar-icons"
        >
          <MenuIcon />
        </figure>

        <div id="navbar-icons">
          {headerIcons.map((item) => {
            return (
              <figure className="navbar-figure" key={item.id}>
                {item.icon}
              </figure>
            );
          })}

          <figure
            className="navbar-figure"
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

      <div className="navbar-menu">
        <NavbarMenu />
      </div>
    </div>
  );
}
