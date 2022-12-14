import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutComponent.css";

export function AboutComponent({ name, link }) {
  return (
    <div id="about-component">
      <p>{name}</p>

      <NavLink to={link}>About...</NavLink>
    </div>
  );
}
