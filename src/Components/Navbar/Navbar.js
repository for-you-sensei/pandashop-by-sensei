import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { acMenu } from "../../Redux/MenuButton";
import { NavbarMenu } from "./NavbarMenu";
import MenuIcon from "@mui/icons-material/Menu";

export function Navbar() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

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
    <div id="navbar-box">
      <div id="navbar">
        <div className="navbar-selections">
          <NavLink to="/new">New</NavLink>

          <div className="drop-down-card">
            <NavLink to="/all_product">Clothes </NavLink>
            <div className="sub-menu">
              <NavLink to="/for_men">For Men</NavLink>
              <NavLink to="/for_women">For Women</NavLink>
              <NavLink to="/for_girl">For Girls</NavLink>
              <NavLink to="/for_children">For Children</NavLink>
            </div>
          </div>

          <NavLink to="/discaunts">Discaunts</NavLink>

          <div className="drop-down-card">
            <NavLink to="/all_product">More </NavLink>
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
        </div>
      </div>

      <div className="navbar-menu">
        <NavbarMenu />
      </div>
    </div>
  );
}
