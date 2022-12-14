import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <div id="navbar">
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
        <option value="for_childer">For Children</option>
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
  );
}
