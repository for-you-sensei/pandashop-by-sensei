import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Header() {
  return (
    <div id="header-box">
      <div id="header">
        <NavLink to="/" className="pandashop-text">
          PandaShop
        </NavLink>

        <div className="header-nav">
          <p>Delivery</p>
          <p>Contact</p>
        </div>

        <div className="header-icon">
          <figure className="header-figure">
            <SearchIcon />
          </figure>

          <figure className="header-figure">
            <ShoppingCartIcon />
          </figure>

          <figure className="header-figure">
            <AccountCircleIcon />
          </figure>
        </div>
      </div>
    </div>
  );
}
