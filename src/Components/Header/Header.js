import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function Header() {
  const headerIcons = [
    {
      id: 0,
      icon: <SearchIcon />,
    },
    {
      id: 1,
      icon: <ShoppingCartIcon />,
    },
    {
      id: 2,
      icon: <AccountCircleIcon />,
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
        </div>
      </div>
    </div>
  );
}
