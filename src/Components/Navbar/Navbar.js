import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <div id="navbar">
      <NavLink to="/new">New</NavLink>

      <select className="nav-select">
        <option>Clothes</option>
        <option>For Men</option>
        <option>For Women</option>
        <option>For Girls</option>
        <option>For Children</option>
      </select>

      <NavLink to="/discaunts">Discaunts</NavLink>

      <select className="nav-select">
        <option>More</option>
        <option>For Mobile</option>
        <option>For Office</option>
        <option>For Car</option>
        <option>For Room</option>
      </select>

      <NavLink to="/discaunts">Partner</NavLink>
    </div>
  );
}
