import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { acMenu } from "../../Redux/MenuButton";
import { NavbarMenu } from "./NavbarMenu";
import MenuIcon from "@mui/icons-material/Menu";

export function Navbar() {
  const navigate = useNavigate();
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

          <select
            className="nav-select"
            onChange={(e) => {
              navigate(`/${e.target.value}`);
            }}
          >
            <option>Clothes</option>
            <option value="for_men">For Men</option>
            <option value="for_women">For Women</option>
            <option value="for_girls">For Girls</option>
            <option value="for_children">For Children</option>
          </select>

          <NavLink to="/discaunts">Discaunts</NavLink>

          <select
            className="nav-select"
            onChange={(e) => {
              navigate(`/${e.target.value}`);
            }}
          >
            <option>More</option>
            <option value="for_mobile">For Mobile</option>
            <option value="for_office">For Office</option>
            <option value="for_car">For Car</option>
            <option value="for_room">For Room</option>
          </select>

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
      <NavbarMenu />
    </div>
  );
}
